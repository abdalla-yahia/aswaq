import { CreateCategory } from "@/types/types"
import { CreateCategoryValidation } from "@/validations/CategoryValidation"
import { PrismaClient } from "@prisma/client"

const categoryQueries = {
    Query:{
        AllCategories:async (_:unknown,__:unknown,ctx:{prisma:PrismaClient})=>{
            try{
                const AllCategories = await ctx.prisma.category.findMany()
                return {success:true,message:'Get All Categories Successfully',category:AllCategories}
            }catch(error){
                return {success:false,message:error}
            }
        }
    }
}

const categoryMutations = {
    Mutation:{
        //Create A New Category
        createCategoey:async(_:unknown,args:CreateCategory,ctx:{prisma:PrismaClient})=>{
            try {
                //Check If Category Exist In DB 
                const IsExists = await ctx.prisma.category.findFirst({
                    where:{name:args?.name}
                })
                if(IsExists){
                    return {success:false,message:'هذا التصنيف موجود بالفعل من قبل'}
                }
                //Check Validation Of Data
                const Validation = CreateCategoryValidation.safeParse(args)
                if(!Validation.success){
                    return {success:false,message:Validation?.error?.issues?.map(e=>e?.message).join(', ')}
                }
                const NewCategory = await ctx.prisma.category.create({data:Validation?.data})
                return {
                    success:true,
                    message:'Category Created Successfully',
                    category:NewCategory
                }
            } catch (error) {
                return {success:false,message:error}
            }
        },
        //Update A Specific Category
        updateACategory:async(_:unknown,args:CreateCategory,ctx:{prisma:PrismaClient})=>{
            try {
                //Check If Category Existe In DB
                const IsExists = await ctx.prisma.category.findUnique({
                    where:{id:args?.id}
                })
                if(!IsExists){
                    return {success:false,message:'هذا التصنيف لا يوجد  في قاعدة البيانات'}
                }
                //Check Validation Data 
                const Validation = CreateCategoryValidation.safeParse(args)
                if(!Validation?.success){
                    return {success:false,message:Validation?.error?.issues?.map(e=>e?.message).join(', ')}
                }
                //Update Category
                const UpdatedCategory = await ctx.prisma.category.update({
                    where:{id:args?.id},
                    data:Validation?.data
                })
                return {
                    success:true,
                    message:'Category Updated Successfully',
                    category:UpdatedCategory
                }
            } catch (error) {
                return {success:false,message:error}
            }
        },
        deleteACategory:async(_:unknown,args:{id:string},ctx:{prisma:PrismaClient})=>{
            try{
                //Check If Category Existes
                const IsExists = await ctx.prisma.category.findUnique({where:{id:args?.id}})
                if(!IsExists){
                    return {success:false,message:'هذا التصنيف ليس موجود'}
                }
                const DeleteCategory = await ctx.prisma.category.delete({where:{id:args?.id}})
                return {success:true,message:'Category Deleted Successfully',category:DeleteCategory}
            }catch(error){
                return {success:false,message:error}
            }
        },
    }
}

export const CategoryResolvers = {
    ...categoryQueries,
    ...categoryMutations
}