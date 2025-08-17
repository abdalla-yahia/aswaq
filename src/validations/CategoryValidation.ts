import {z} from 'zod';

export const CreateCategoryValidation = z.object({
    name:z.string().min(3,'اسم التصنيف لا يقل عن ثلاثة احرف').max(100),
    description:z.string().min(20).max(300).optional(),
    image:z.string().optional().nullable(),
    parentId:z.string().optional().nullable()
})

export const UpdateCategoryValidation = z.object({
    id:z.string().optional(),
    name:z.string().min(3,'اسم التصنيف لا يقل عن ثلاثة احرف').max(100),
    description:z.string().min(20).max(300).optional(),
    image:z.string().optional().nullable(),
    parentId:z.string().optional().nullable()
})
