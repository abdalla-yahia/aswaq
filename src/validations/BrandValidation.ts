import {z} from 'zod';

export const CreateBrandValidation = z.object({
    name:z.string().min(3,'اسم التصنيف لا يقل عن ثلاثة احرف').max(100),
    description:z.string().max(300).optional().nullable(),
    logo:z.string().optional().nullable(),
})

export const UpdateBrandValidation = z.object({
    id:z.string().optional(),
    name:z.string().min(3,'اسم التصنيف لا يقل عن ثلاثة احرف').max(100),
    description:z.string().max(300).optional().nullable(),
    logo:z.string().optional().nullable(),
})
