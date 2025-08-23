import { CreateBrand } from "@/types/types"
import { CreateBrandValidation } from "@/validations/BrandValidation"
import { PrismaClient } from "@prisma/client"

const brandQueries = {
    Query:{
        AllBrands:async (_:unknown,__:unknown,ctx:{prisma:PrismaClient})=>{
            try{
                const AllBrands = await ctx.prisma.brand.findMany({
                    include:{
                        products:true
                    }
                })
                return {success:true,message:'Get All Brands Successfully',brand:AllBrands}
            }catch(error){
                return {success:false,message:error}
            }
        }
    }
}

const brandMutations = {
    Mutation:{
        //Create A New Brand
        createBrand:async(_:unknown,args:CreateBrand,ctx:{prisma:PrismaClient})=>{
            try {
                //Check If Brand Exist In DB 
                const IsExists = await ctx.prisma.brand.findFirst({
                    where:{name:args?.name}
                })
                if(IsExists){
                    return {success:false,message:'هذا البراند موجود بالفعل من قبل'}
                }
                //Check Validation Of Data
                const Validation = CreateBrandValidation.safeParse(args)
                if(!Validation.success){
                    return {success:false,message:Validation?.error?.issues?.map(e=>e?.message).join(', ')}
                }
                const NewBrand = await ctx.prisma.brand.create({data:Validation?.data})
                return {
                    success:true,
                    message:'Brand Created Successfully',
                    Brand:NewBrand
                }
            } catch (error) {
                return {success:false,message:error}
            }
        },
        //Update A Specific Brand
        updateABrand:async(_:unknown,args:CreateBrand,ctx:{prisma:PrismaClient})=>{
            try {
                //Check If Brand Existe In DB
                const IsExists = await ctx.prisma.brand.findUnique({
                    where:{id:args?.id}
                })
                if(!IsExists){
                    return {success:false,message:'هذا البراند لا يوجد  في قاعدة البيانات'}
                }
                //Check Validation Data 
                const Validation = CreateBrandValidation.safeParse(args)
                if(!Validation?.success){
                    return {success:false,message:Validation?.error?.issues?.map(e=>e?.message).join(', ')}
                }
                //Update Brand
                const UpdatedBrand = await ctx.prisma.brand.update({
                    where:{id:args?.id},
                    data:Validation?.data
                })
                return {
                    success:true,
                    message:'Brand Updated Successfully',
                    brand:UpdatedBrand
                }
            } catch (error) {
                return {success:false,message:error}
            }
        },
        deleteABrand:async(_:unknown,args:{id:string},ctx:{prisma:PrismaClient})=>{
            try{
                //Check If Brand Existes
                const IsExists = await ctx.prisma.brand.findUnique({where:{id:args?.id}})
                if(!IsExists){
                    return {success:false,message:'هذا البراند ليس موجود'}
                }
                const DeleteBrand = await ctx.prisma.brand.delete({where:{id:args?.id}})
                return {success:true,message:'Brand Deleted Successfully',brand:DeleteBrand}
            }catch(error){
                return {success:false,message:error}
            }
        },
    }
}

export const BrandResolvers = {
    ...brandQueries,
    ...brandMutations
}