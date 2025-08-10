import { CreateUser } from '@/interfaces/usersInterface';
import { SetCookies } from '@/utils/generateToken';
import { UserCreateSchemaValidaion } from '@/validations/UserValidation';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
//User Queries
const usersQueries = {
    Query: {
    GetAllUsers: async (_: unknown, __: unknown, ctx: { prisma: PrismaClient }) => {
      return ctx.prisma.user.findMany();
    },
    GetUserById: async (_: unknown, args: { id: string }, ctx: { prisma: PrismaClient }) => {
      return ctx.prisma.user.findUnique({ where: { id: args.id } });
    }
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
  }
  //Update A Specific User

  //Delete A Specific User
}
}


export const userResolvers = {
...usersQueries,
...userMutations
};
