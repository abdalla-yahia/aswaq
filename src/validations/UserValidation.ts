import {z} from 'zod';

//Create User Validation
export const UserCreateSchemaValidaion = z.object({
  name: z.string().min(3, "الاسم لازم يكون على الأقل 3 أحرف"),
  email: z.string().email("البريد الإلكتروني غير صحيح").optional(),
  phone:z.string().min(11,'رقم الهاتف لا يقل عن 11 رقم').max(11,'رقم الهاتف لا يزيد عن 11 رقم').optional(),
  password: z.string().min(3, "كلمة السر لازم تكون 8 أحرف على الأقل"),
  address : z.string().optional()
}).refine(data => data.email || data.phone, {
  message: "Either email or phone is required",
  path: ["email"] // أو ["phone"]
});



// export type CreateUserInput = z.infer<typeof UserCreateSchemaValidaion>;
 