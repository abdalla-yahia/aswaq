import { PrismaClient } from '@prisma/client';
import { CreateUser } from '@/interfaces/usersInterface';
import { LoginUser, UserToken } from '@/types/types';
import { SetCookies } from '@/libs/generateToken';
import { UserCreateSchemaValidaion, UserLoginValidation } from '@/validations/UserValidation';
import bcrypt from 'bcrypt';
import { getUserFromRequest } from '@/libs/getUserFromRequest';

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
        throw new Error('Not authenticated');
      }
      return await ctx.prisma.user.findUnique({
        where: { id: user?.id },
      });
    },
  },
};

const userMutations = {
  Mutation: {
    CreateUser: async (_: unknown, args: CreateUser, ctx: { prisma: PrismaClient; resHeaders: Headers }) => {
      try {
        if (!args.name || (!args.email && !args.phone) || !args.password) {
          throw new Error('Name, Email or Phone, and Password are required');
        }

        const existingUser = await ctx.prisma.user.findFirst({
          where: {
            OR: [
              { email: args.email ?? undefined },
              { phone: args.phone ?? undefined },
            ],
          },
        });
        if (existingUser) {
          throw new Error('Email or Phone already exists');
        }

        const validationData = UserCreateSchemaValidaion.safeParse(args);
        if (!validationData.success) throw new Error(validationData?.error?.message);

        const genSalt = bcrypt.genSaltSync(10, 'a');
        const hashpassword = bcrypt.hashSync(validationData?.data?.password, genSalt);
        validationData.data.password = hashpassword;

        const NewUser = await ctx.prisma.user.create({
          data: validationData?.data,
        });

        const tokenCookie = SetCookies({
          id: NewUser?.id,
          name: NewUser?.name,
          role: NewUser?.role,
        });

        ctx.resHeaders.append('Set-Cookie', tokenCookie);

        return {
          message: 'User Created Successfully',
          token: tokenCookie,
          user: NewUser,
        };
      } catch (error: unknown) {
        console.error('Error in CreateUser mutation:', error);
        throw new Error(error instanceof Error ? error.message : 'Internal server error');
      }
    },

    loginUser: async (_: unknown, args: LoginUser, ctx: { prisma: PrismaClient; resHeaders: Headers }) => {
      try {
        if ((!args.email && !args.phone) || !args.password) {
          throw new Error('Email or Phone, and Password are required');
        }

        const ValidateLogin = UserLoginValidation.safeParse(args);
        if (!ValidateLogin.success) throw new Error('Invalid Data Login !!');

        const UserExist = await ctx.prisma.user.findFirst({
          where: {
            OR: [
              { email: ValidateLogin?.data?.email ?? undefined },
              { phone: ValidateLogin?.data?.phone ?? undefined },
            ],
          },
        });
        if (!UserExist) throw new Error('User Not Found !!');

        const CorrectPassword = await bcrypt.compare(
          ValidateLogin?.data?.password,
          UserExist?.password
        );
        if (!CorrectPassword) throw new Error('Some Thing Went Wrong');

        const tokenCookie = SetCookies({
          id: UserExist?.id,
          role: UserExist?.role,
          name: UserExist?.name,
        });

        ctx.resHeaders.append('Set-Cookie', tokenCookie);

        return {
          message: 'User Login Successfully',
          token: tokenCookie,
          user: UserExist,
        };
      } catch (error: unknown) {
        console.error('Error in loginUser mutation:', error);
        throw new Error(error instanceof Error ? error.message : 'Internal server error');
      }
    },

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
        throw new Error(error instanceof Error ? error.message : 'Internal server error');
      }
    },
  },
};

export const userResolvers = {
  ...usersQueries,
  ...userMutations,
};
