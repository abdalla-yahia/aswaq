import {z} from 'zod';

//Create Product Validation Schema
export const CreateProductValidation = z.object({
  title: z.string().min(1, "اسم المنتج مطلوب"),
  description: z.string().nullable().optional(),
  price: z.number().positive("Price must be a positive number"),
  oldPrice: z.number().nullable().optional(),
  discountType: z.enum(['FIXED','PERCENTAGE']).nullable().optional(),
  discountValue: z.number().nullable().optional(),
  quantity: z.number().int().nonnegative("Quantity must be a non-negative integer"),
  image: z.string().nullable().optional(),
  categoryId: z.string().nullable().optional(),
  brandId: z.string().nullable().optional(),
  isFeatured: z.boolean().optional(),
  status: z.enum(['ACTIVE' , 'INACTIVE', 'ARCHIVED']).optional(),
  metaTitle: z.string().nullable().optional(),
  metaDesc: z.string().nullable().optional(),
});