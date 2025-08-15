import { CreateAddress } from "@/interfaces/addressInterface";
import { PrismaClient } from "@prisma/client";


const AddressQueries = {
    Query:{
        addresses:async (_: unknown, __: unknown, ctx: { prisma: PrismaClient }) => {
            return ctx.prisma.addresses.findMany()
        }
    }
}

const AddressREsolvers = {
    Mutation :{
        createAddress:async (_: unknown, args: CreateAddress, ctx: { prisma:PrismaClient})=>{
            try {
                return ctx.prisma.addresses.create({
                    data:args
                })
            } catch (error) {
                return error
            }
        }
    }
}


export const AddressResolvers = {
  ...AddressQueries,
  ...AddressREsolvers,
};
