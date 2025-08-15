import {z} from 'zod';

//Create Anew Address 
export const AddressNewValidation = z.object({
    name:z.string().min(3,'اسم العنوان لا يقل عن ثلاثة حروف').max(100),
    address:z.string().min(3,'العنوان لا يقل عن ثلاثة حروف').max(250),
    phone:z.string().regex(/^\d{11}$/, "رقم الهاتف يجب أن يكون 11 رقم صحيح").optional(),
    userId:z.string()
})