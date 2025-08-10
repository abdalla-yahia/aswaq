import { CreateUser } from '@/interfaces/usersInterface';
import { LoginUser, UserToken } from '@/types/types';
import { SetCookies } from '@/libs/generateToken';
import { UserCreateSchemaValidaion, UserLoginValidation } from '@/validations/UserValidation';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { getUserFromRequest } from '@/libs/getUserFromRequest';
//User Queries
const usersQueries = {
    Query: {
    GetAllUsers: async (_: unknown, __: unknown, ctx: { prisma: PrismaClient }) => {
      return ctx.prisma.user.findMany();
    },
    GetUserById: async (_: unknown, args: { id: string }, ctx: { prisma: PrismaClient }) => {
      return ctx.prisma.user.findUnique({ where: { id: args.id } });
    },
     me: async (_: unknown, __: unknown, ctx: { req: Request; prisma: PrismaClient }) => {
      const user = getUserFromRequest(ctx.req) as UserToken;
      if (!user) {
        throw new Error("Not authenticated");
      }

      return await ctx.prisma.user.findUnique({
        where: { id: user?.id },
      });
    },
  }
}

//User Mutaions
const userMutations = {
 Mutation: {
  //Create A New User
  CreateUser: async (
    _: unknown,
    args: CreateUser,
    ctx: { prisma: PrismaClient ,resHeaders:Headers}
  ) => {
    try {
      //Check Empty Failds
      if (!args.name || (!args.email && !args.phone) || !args.password) {
        throw new Error("Name, Email or Phone, and Password are required");
      }
      //Check Existing Email On Database
      const existingUser = await ctx.prisma.user.findFirst({
        where: {
          OR: [
            { email: args.email ?? undefined },
            { phone: args.phone ?? undefined }
          ]
        }
      });
      if (existingUser) {
        throw new Error("Email or Phone already exists");
      }
      //Check Validation of Data
      const validationData = UserCreateSchemaValidaion.safeParse(args)
      if(!validationData.success) throw new Error(validationData?.error?.message)
      //Hashed Password
      const genSalt = bcrypt.genSaltSync(10,'a')
      const hashpassword = bcrypt.hashSync(validationData?.data?.password,genSalt)
      validationData.data.password = hashpassword
      // Add User Data To Database With Validation Data
      const NewUser =  await ctx.prisma.user.create({
        data: validationData?.data
      })
      //Generate Auth-Token 
      const tokenCookie = SetCookies({
        id:NewUser?.id,
        name:NewUser?.name,
        role:NewUser?.role
      }) 
      //Set Token To Cookies
      ctx.resHeaders.append("Set-Cookie", tokenCookie);
      return {
      message: "User Created Successfully",
      token: tokenCookie,
      user: NewUser,
    };
    } catch (error: unknown) {
  console.error("Error in CreateUser mutation:", error);

  if (error instanceof Error) {
    throw new Error(error.message);
  } else if (typeof error === "string") {
    throw new Error(error);
  } else {
    throw new Error("Internal server error");
  }
}
  },
  // Login User
  loginUser:async (_:unknown,args:LoginUser,ctx:{prisma:PrismaClient,resHeaders:Headers})=>{
      try {
      //Check Empty Failds
      if ((!args.email && !args.phone) || !args.password) {
        throw new Error("Email or Phone, and Password are required");
      }
    //Validate Data Login
    const ValidateLogin = UserLoginValidation.safeParse(args)
    if(!ValidateLogin.success){
      throw new Error('Invalid Data Login !!')
    }
    //Check If Exisist Email Or Phone
    const UserExist = await ctx.prisma.user.findFirst({
      where:{
        OR:[
          {email:ValidateLogin?.data?.email ?? undefined},
          {phone:ValidateLogin?.data?.phone ?? undefined}
        ]
      }
    })
    if(!UserExist){
      throw new Error('User Not Found !!')
    }
    //Compare Password
    const CorrectPassword =await bcrypt.compare(ValidateLogin?.data?.password,UserExist?.password)
    if(!CorrectPassword){
      throw new Error('Some Thing Went Wrong')
    }
    const tokenCookie = SetCookies({
      id:UserExist?.id,
      role:UserExist?.role,
      name:UserExist?.name
    })
    //Set Token On Header
    ctx.resHeaders.append('Set-Cookie',tokenCookie)
      return {
      message: "User Login Successfully",
      token: tokenCookie,
      user: UserExist,
    };
    } catch (error: unknown) {
  console.error("Error in CreateUser mutation:", error);

  if (error instanceof Error) {
    throw new Error(error.message);
  } else if (typeof error === "string") {
    throw new Error(error);
  } else {
    throw new Error("Internal server error");
  }
}
  }
  //Update A Specific User

  //Delete A Specific User
}
}


export const userResolvers = {
...usersQueries,
...userMutations
};
