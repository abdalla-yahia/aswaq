
export const userResolvers = {
  Query: {
    GetAllUsers: async (_: unknown, __: unknown, ctx: { prisma: { user: { findMany: () => unknown; }; }; } ) => {
      return ctx.prisma.user.findMany();
    },
    GetUserById: async (_: unknown,args:{id:string}, ctx: { prisma: { user: { findUnique: (arg0: { where: { id: string; }; }) => unknown; }; }; } ) => {
      return ctx.prisma.user.findUnique({ where: { id: args.id } });
    }
  },
};
