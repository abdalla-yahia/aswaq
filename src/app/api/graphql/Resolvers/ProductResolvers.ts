import { UpdateProductInterface } from "@/interfaces/productInterfaces";
import { CreateProductType } from "@/types/types";
import { CreateProductValidation, UpdateProductValidation } from "@/validations/ProductValidation";
import { PrismaClient } from "@prisma/client";
import slugify from "slugify";


const productsQuery = {
    Query: {
        //Get All Products
        GetAllProducts: async (_: unknown, __: unknown, ctx: { prisma: PrismaClient }) => {
            try {
                const Allproducts = await ctx.prisma.product.findMany({
                    orderBy: { createdAt: 'desc' },
                    include: {
                        category: true,
                        brand: true,
                    },
                });
                return {success:true,message:'Get All Products Successfully',products:Allproducts};
            } catch (error) {
                return{success:false,message:error};
            }
        },
        //Get Product By ID
        product: async (_: unknown, args: { id: string }, ctx: { prisma: PrismaClient }) => {
            try {
                const product = await ctx.prisma.product.findUnique({
                    where: { id: args.id },
                });
                if (!product) return{success:false,message:('Product not found')};
                return product;
            } catch (error) {
                return{success:false,message:error};
            }
        },
        //Get Product By Slug
        productBySlug: async (_: unknown, args: { slug: string }, ctx:{prisma:PrismaClient}) => {
            try { 
                const product = await ctx.prisma.product.findUnique({
                    where: { slug: args.slug },
                });
                if (!product) return{success:false,message:('Product not found')};
                return product;
            } catch (error) {
                return{success:false,message:error};
            }
        },
        //Get Product By Category ID
        productsByCategoryId: async (_: unknown, args: { categoryId: string }, ctx: { prisma: PrismaClient }) => {
            try {
                const products = await ctx.prisma.product.findMany({
                    where: { categoryId: args.categoryId },
                    include: {
                        category: true,
                        brand: true,
                    },
                });
                return products;
            } catch (error) {
                return{success:false,message:error};
            }
        },
        //Get Product By Brand ID
        productsByBrandId: async (_: unknown, args: { brandId: string }, ctx: { prisma: PrismaClient }) => {
            try {
                const products = await ctx.prisma.product.findMany({
                    where: { brandId: args.brandId },
                });
                return products;
            } catch (error) {
                return{success:false,message:error};
            }
        },
        // Get Products By IDS Categories
        productsByCategoryRecursive: async (_: unknown, args: { categoryId: string },ctx:{prisma:PrismaClient}) => {
          let allCategoryIds:string[]=[];
          const children = await ctx.prisma.category.findMany({
            where: { parentId: args.categoryId },
            select: { id: true },
          });
          const ChildrenIds = children.map((c) => c.id);

          for (const child of children) {
            const NestedChilde = await ctx.prisma.category.findMany({
            where: { parentId: child.id },
            select: { id: true },
          });
          const NestedChildeIds = NestedChilde.map((N) => N.id);
            allCategoryIds = [...ChildrenIds, ...NestedChildeIds];
          }

      const products = await ctx.prisma.product.findMany({
        where: { categoryId: { in: [args.categoryId, ...allCategoryIds] } },
        include:{
          brand:true,
          category:true
        }
      });

      return products;
    },
    }
}

const productsMutations = {
  Mutation: {
    //Create A New Product
    createProduct: async (_: unknown, args: CreateProductType, ctx: { prisma: PrismaClient }) => {
      try {
        //Validation Data
        const validationData = CreateProductValidation.safeParse(args);
        if (!validationData?.success) return { success: false, message: (validationData?.error?.issues.map(e => e.message).join(', ')) };
        //Create Slug
        const baseSlug = slugify(validationData.data.title, {
          lower: true,
          strict: true,
          trim: true,
          locale: 'ar'
        });

        let slug = baseSlug;
        let counter = 1;

        //Loop until slug is unique
        while (await ctx.prisma.product.findUnique({ where: { slug } })) {
          slug = `${baseSlug}-${counter}`;
          counter++;
        }
        //Create Anew Product
        const newProduct = await ctx.prisma.product.create({
          data: {
            ...validationData?.data,
            slug,
        },
        });
        
        return { success: true, message: 'Product created successfully', product: newProduct };
      } catch (error) {
        return { success: false, message: error };
      }
    },
    updateProduct:async (_:unknown,args:{data:UpdateProductInterface},ctx:{prisma:PrismaClient})=>{
      try {
        //Check If Product Is Existes
        const IsExistes = await ctx.prisma.product.findUnique({where:{id:args?.data?.id}})
        if(!IsExistes){
          return {success:false,message:'Product Not Found'}
        }
        //Check Validation Of Data
        const Validation  = UpdateProductValidation.safeParse(args?.data)
        if(!Validation?.success){
          return {success:false,message:'Data Not Valide'}
        }
        // Update Product
        const product = await ctx.prisma.product.update({
          where:{id:Validation?.data?.id},
          data:Validation?.data
        })
        return {success:true,message:'Update Product Successfully',product}
      } catch (error) {
        return {success:false,message:error}
      }
    },
    //Delete Product
    deleteProduct: async (_: unknown, args: { id: string }, ctx: { prisma: PrismaClient }) => {
      try {
        const deletedProduct = await ctx.prisma.product.delete({
          where: { id: args?.id },
        });
        return { success: true, message: 'Product deleted successfully', product: deletedProduct };
      } catch (error) {
        return { success: false, message: error };
      }
    },
  },
};

export const productResolvers = {
  ...productsQuery,
  ...productsMutations,
};