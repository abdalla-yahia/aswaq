import { CreateAddress } from "@/interfaces/addressInterface";
import { AddressNewValidation } from "@/validations/AddressValidation";
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
        //Update Address
        updateAddress:async (_:unknown,args:CreateAddress,ctx:{prisma:PrismaClient})=>{
            try {
                //Check If Address Already Exist
                const IsExist = await ctx.prisma.addresses.findUnique({
                    where:{id:args?.id}
                })
                if(!IsExist){
                    return {success:false,message:"العنوان ليس موجود في قاعدة البيانات"}
                }
                const GetDataValidation = AddressNewValidation.pick({
                    name:true,
                    address:true,
                    phone:true
                })
                const Validation = GetDataValidation.safeParse({
                    name:args?.name,
                    address:args?.address,
                    phone:args?.phone
                })
                if(!Validation.success){
                    return {success:false,message:Validation?.error?.issues?.map(e=>e?.message).join(', ')}
                }
                //Update Address
                await ctx.prisma.addresses.update({
                    where:{id:args?.id},
                    data:Validation?.data
                })
                return {
                    success:true,
                    message:'Address Updated Successfully'
                }
            } catch (error) {
                return{success:false,message:error}
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
