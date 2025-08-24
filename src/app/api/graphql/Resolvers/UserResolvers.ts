import { PrismaClient } from '@prisma/client';
import { CreateUser, UpdateUser } from '@/interfaces/usersInterface';
import { LoginUser, PasswordState, UserToken } from '@/types/types';
import { SetCookies } from '@/libs/generateToken';
import { UserCreateSchemaValidaion, UserLoginValidation, UserUpdateValidation } from '@/validations/UserValidation';
import bcrypt from 'bcrypt';
import { getUserFromRequest } from '@/libs/getUserFromRequest';

const usersQueries = {
  Query: {
    //Get All Users
    GetAllUsers: async (_: unknown, __: unknown, ctx: { prisma: PrismaClient }) => {
      return ctx.prisma.user.findMany();
    },
    //Get User By ID
    GetUserById: async (_: unknown, args: { id: string }, ctx: { prisma: PrismaClient }) => {
      try {
        //Check if User Is Existes
        const IsExist = await ctx.prisma.user.findUnique({where:{id:args.id}})
        if(!IsExist){
          return {success:false,message:'User Not Found'}
        }
        const user = await ctx.prisma.user.findUnique({ where: { id: args.id } });
        return user;

      } catch (error) {
        return {success:false,message:error}
      }
    },
    me: async (_: unknown, __: unknown, ctx: { req: Request; prisma: PrismaClient }) => {
      const user = getUserFromRequest(ctx.req) as UserToken;
      if (!user) {
        return {success:false,message:'Not authenticated',user:null};
      }
      return await ctx.prisma.user.findUnique({
        where: { id: user?.id },
        include:{
          alladdresses:true
        }
      });
    },

  },
};

const userMutations = {
  Mutation: {
    //Create A New User
    CreateUser: async (_: unknown, args: CreateUser, ctx: { prisma: PrismaClient; resHeaders: Headers }) => {
      try {
        if (!args.name || (!args.email && !args.phone) || !args.password || !args.address) {
          return {success:false,message:'Name, Email or Phone, and Password are required'};
        }
        //Check if User Existe in DB
        const existingUser = await ctx.prisma.user.findFirst({
          where: {
            OR: [
              { phone: args.phone ?? undefined},
              { email: args.email ?? undefined },
            ],
          },
        });
        //Check Is User Exist On DB
        if (existingUser) {
          return {success:false,message:'Email or Phone already exists',existingUser:null};
        }
        //Validation Data
        const validationData = UserCreateSchemaValidaion.safeParse(args);
        if (!validationData?.success) return{success:false,message:(validationData?.error?.issues.map(e=>e.message))};
        //Hashed Password
        const genSalt = bcrypt.genSaltSync(10,'a');
        const hashpassword = bcrypt.hashSync(validationData?.data?.password, genSalt);
        validationData.data.password = hashpassword;
        //Create Anew User
        const NewUser = await ctx.prisma.user.create({
          data: validationData?.data,
        });
        //Create Token And Set It On Cookies
        const tokenCookie = SetCookies({
          id: NewUser?.id,
          role: NewUser?.role,
        });
        //Set Cookie On Headers
        ctx.resHeaders.append('Set-Cookie', tokenCookie);
        //Return Successfull Results
        return {
          success:true,
          message: 'User Created Successfully',
          token: tokenCookie,
          user: NewUser,
        };
      } catch (error) {
        console.error('Error in CreateUser mutation:', error);
        return {success:false,message:(error instanceof Error ? error.message : 'Internal server error')};
      }
    },
    //Login User
    loginUser: async (_: unknown, args: LoginUser, ctx: { prisma: PrismaClient; resHeaders: Headers }) => {
      try {
        if ((!args.email && !args.phone) || !args.password) {
          return {success:false,message:'Email or Phone, and Password are required'};
        }
        //Check Valid Data Of Login
        const ValidateLogin = UserLoginValidation.safeParse(args);
        if (!ValidateLogin.success) return {success:false,message:'Invalid Data Login !!'};
        //Check Is User Exist On Database By Email Or Phone
        const UserExist = await ctx.prisma.user.findFirst({
          where: {
            OR: [
              { email: ValidateLogin?.data?.email ?? undefined },
              { phone: ValidateLogin?.data?.phone ?? undefined },
            ],
          },
        });
        if (!UserExist) return {success:false,message:'User Not Found !!'};
        //Compare Login User Password With It`s Password Saved On DB
        const CorrectPassword = await bcrypt.compare(
          ValidateLogin?.data.password,
          UserExist?.password
        );
        if (!CorrectPassword) return {success:false,message:'Some Thing Went Wrong',CorrectPassword:null};
        //Set Token On Headers With Cookies
        const tokenCookie = SetCookies({
          id: UserExist?.id,
          role: UserExist?.role
        });
        ctx.resHeaders.append('Set-Cookie', tokenCookie);
        
        return {
          success:true,
          message: 'User Login Successfully',
          token: tokenCookie,
          user: UserExist,
        };
      } catch (error) {
        console.error('Error in loginUser mutation:', error);
        return {success:false,message:'غير معروف'};
      }
    },
    //Logout User By Delete User Token From Cookies  
    logout: async (_: unknown, __: unknown, ctx: { resHeaders: Headers }) => {
      try {
        ctx.resHeaders.append(
          'Set-Cookie',
          `authToken=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict; Secure=${
            process.env.NODE_ENV === 'production'
          }`
        );
        return { success: true, message: 'Logged out successfully' };
      } catch (error) {
        console.error('Error in logout mutation:', error);
        return {success:false,message:(error instanceof Error ? error.message : 'Internal server error')};
      }
    },
    //Delete User
    DeleteUser:async (_:unknown,args:{id:string},ctx:{prisma:PrismaClient,resHeaders:Headers})=>{
      try{
      if(!args?.id){
        return {success:false,message:'لا يوجد رقم تعريفي للمستخدم'}
      }
      //Check Is User Exist On DB
      const IsExist = await ctx.prisma.user.findUnique({
        where:{id:args?.id}
      })
      if(!IsExist){
        return {success:false,message:'هذا المستخدم لا يوجد في قاعدة البيانات'}
      }
      //Delete User From DB
      await ctx.prisma.user.delete({
        where:{id:args?.id}
      })
      //Delete Token From Headers
      ctx.resHeaders.append(
        'Set-Cookie',
          `authToken=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict; Secure=${
            process.env.NODE_ENV === 'production'
          }`
      )
      return { success: true, message: 'Delete User successfully' };

    }catch(error){
        return {success:false,message:(error instanceof Error ? error.message : 'Internal server error')};
    }
    },
    //Update User 
    updateUser:async (_:unknown,args:UpdateUser,ctx:{prisma:PrismaClient,resHeaders:Headers})=>{
      try{
        //Check Is User Exist On DB
        const IsExist = await ctx.prisma.user.findUnique({
          where:{id:args?.id}
          })
        if(!IsExist){
          return {success:false,message:'هذا المستخدم لا يوجد في قاعدة البيانات' }
        }
        //ValisationData
        const ValidationData = UserUpdateValidation.safeParse(args.data)
        if(!ValidationData.success){
          return {success:false,message:ValidationData.error.issues[0].message }
        }
        //Update User From DB
        const updatedUser = await ctx.prisma.user.update({
            where:{id:args?.id},
            data:args.data
        })

          return { success: true, message: 'Update User successfully',user:updatedUser };
          }catch(error){
            console.error(error)
            return {success:false,message:(error instanceof Error ? error.message : 'Internal server error')};
            }

    },
    //Change User Password
    changePassword:async (_:unknown,args:PasswordState,ctx:{prisma:PrismaClient})=>{
      try{
        //Check Is User Exist On DB
        const IsExist = await ctx.prisma.user.findUnique({
        where:{id:args?.id}
        })
        if(!IsExist){
        return {success:false,message:'هذا المستخدم لا يوجد في قاعدة البيانات'}
        }
        //Check Old Password
        const checkPassword = await bcrypt.compare(args?.oldPassword,IsExist?.password)
        if(!checkPassword){
        return {success:false,message:'كلمة المرور القديمة غير صحيحة'}
        }
        //Check Validation Password 
        const PasswordSchema = UserCreateSchemaValidaion.pick({ password: true });
        const validationPassword = PasswordSchema.safeParse({password:args?.newPassword})
        if(!validationPassword.success){
          return {success:false,message:validationPassword.error.issues.map(e=>e.message).join(", ") }
          }
        //Hash New Password
        const genSalt =  bcrypt.genSaltSync(10)
        const hashPassword =  bcrypt.hashSync(validationPassword?.data?.password,genSalt)
        //Update User Password From DB
        const updatedUser = await ctx.prisma.user.update({
        where:{id:args?.id},
        data:{password:hashPassword}
        })
        return { success: true, message: 'Change Password successfully',user:updatedUser };
      }catch(error){
        console.error(error)
        return {success:false,message:(error instanceof Error ? error.message : 'Internal server error')};
    }
  },
}
}

export const userResolvers = {
  ...usersQueries,
  ...userMutations,

};
