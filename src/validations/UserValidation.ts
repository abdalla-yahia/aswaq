import {email, z} from 'zod';

//Create User Validation
export const UserCreateSchemaValidaion = z.object({
  name: z.string().min(3, "الاسم لازم يكون على الأقل 3 أحرف"),
  email: z.string().email("البريد الإلكتروني غير صحيح").optional(),
  phone:z.string().regex(/^\d{11}$/, "رقم الهاتف يجب أن يكون 11 رقم صحيح").optional(),
  password: z.string().min(3, "كلمة السر لازم تكون 8 أحرف على الأقل").regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "كلمة المرور يجب أن تحتوي على حرف كبير وحرف صغير ورقم"
    ),
  address : z.string().optional()
}).refine(data => data.email || data.phone, {
  message: "Either email or phone is required",
  path: ["email"] // أو ["phone"]
});

//Login User Validation 
export const UserLoginValidation = z.object({
  email: z
    .string()
    .email("البريد الإلكتروني غير صحيح")
    .optional(),

  phone: z
    .string()
    .regex(/^\d{11}$/, "رقم الهاتف يجب أن يكون 11 رقم صحيح")
    .optional(),

  password: z
    .string()
    .min(3, "كلمة المرور يجب ألا تقل عن 8 أحرف")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "كلمة المرور يجب أن تحتوي على حرف كبير وحرف صغير ورقم"
    ),
}).refine(
  (data) => data.email || data.phone,
  { message: "يجب إدخال البريد الإلكتروني أو رقم الهاتف" }
);

// export type CreateUserInput = z.infer<typeof UserCreateSchemaValidaion>;
 