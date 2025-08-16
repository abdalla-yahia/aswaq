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
        //Create Anew Address
        createAddress:async (_: unknown, args: CreateAddress, ctx: { prisma:PrismaClient})=>{
            try {
                return ctx.prisma.addresses.create({
                    data:args
                })
            } catch (error) {
                return error
            }
        },
        //Delete An Existe Address
        deleteAddress:async(_:unknown,args:{id:string},ctx:{prisma:PrismaClient})=>{
            try {
                //Check If The Address Exists
                const address = await ctx.prisma.addresses.findUnique({where:{id:args?.id}})
                if(!address){
                return {success:false,message:"Address Not Found",status:404}
                }
                //Delete The Address
                await ctx.prisma.addresses.delete({where:{id:args?.id}})
                return {
                success:true,
                message:"Address Deleted Successfully",
                }
            } catch (error) {
                return {success:false,message:error}
            }
        }
    }
}


export const AddressResolvers = {
  ...AddressQueries,
  ...AddressREsolvers,
};
