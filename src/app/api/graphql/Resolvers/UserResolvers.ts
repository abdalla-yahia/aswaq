
export const userResolvers = {
  Query: {
    GetAllUsers: async (_: unknown, __: unknown, ctx:any ) => {
      return ctx.prisma.user.findMany();
    },
    GetUserById: async (_: unknown,args:{id:string}, ctx:any ) => {
      return ctx.prisma.user.findUnique({ where: { id: args.id } });
    }
  },
};
