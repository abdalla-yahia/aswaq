import { CreateProductType } from "@/types/types";
import { CreateProductValidation } from "@/validations/ProductValidation";
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
        //Get Product By Category ID
        productsByCategory: async (_: unknown, args: { categoryId: string }, ctx: { prisma: PrismaClient }) => {
            try {
                const products = await ctx.prisma.product.findMany({
                    where: { categoryId: args.categoryId },
                });
                return products;
            } catch (error) {
                return{success:false,message:error};
            }
        },
        //Get Product By Brand ID
        productsByBrand: async (_: unknown, args: { brandId: string }, ctx: { prisma: PrismaClient }) => {
            try {
                const products = await ctx.prisma.product.findMany({
                    where: { brandId: args.brandId },
                });
                return products;
            } catch (error) {
                return{success:false,message:error};
            }
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
        let slug = slugify(validationData?.data?.title, { lower: true, strict: true, trim: true, replacement: '-' , locale: 'ar' });
        //Check if product with same slug exists
        const existingProduct = await ctx.prisma.product.findMany({
          where: { slug :{startsWith:'baseSlug'}},
        });
        if (existingProduct) {
            slug = `${slug}-${existingProduct.length + 1}`;
        }
        //Create Anew Product
        const newProduct = await ctx.prisma.product.create({
          data: {
            ...validationData?.data,
            slug: slug,
        },
        });
        
        return { success: true, message: 'Product created successfully', product: newProduct };
      } catch (error) {
        return { success: false, message: error };
      }
    },
    //Update Product
    updateProduct: async (_: unknown, args: { id: string } & CreateProductType, ctx: { prisma: PrismaClient }) => {
      try {
        //Validation Data
        const validationData = CreateProductValidation.safeParse(args);
        if (!validationData?.success) return { success: false, message: (validationData?.error?.issues.map(e => e.message).join(', ')) };
        //Update Product
        const updatedProduct = await ctx.prisma.product.update({
          where: { id: args.id },
          data: validationData.data,
        });
        return { success: true, message: 'Product updated successfully', product: updatedProduct };
      } catch (error) {
        return { success: false, message: error };
      }
    },
    //Delete Product
    deleteProduct: async (_: unknown, args: { id: string }, ctx: { prisma: PrismaClient }) => {
      try {
        const deletedProduct = await ctx.prisma.product.delete({
          where: { id: args.id },
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