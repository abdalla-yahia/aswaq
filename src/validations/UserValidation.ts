import { Gender } from '@prisma/client';
import {z} from 'zod';

//Create User Validation
export const UserCreateSchemaValidaion = z.object({
  name: z.string().min(3, "الاسم لازم يكون على الأقل 3 أحرف"),
  phone:z.string().regex(/^\d{11}$/, "رقم الهاتف يجب أن يكون 11 رقم صحيح"),
  email: z.string().email("البريد الإلكتروني غير صحيح").optional().or(z.literal("")).nullable(),
  password: z.string().min(8, "كلمة السر لازم تكون 8 أحرف على الأقل").regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "كلمة المرور يجب أن تحتوي على حرف كبير وحرف صغير ورقم"
    ),

  gender: z.preprocess((val) => {
  if (val === "") return null; // أو undefined لو تحب
  return val;
}, z.nativeEnum(Gender).nullable().optional()),

  birthDate: z.preprocess((val) => {
  if (typeof val === "string" && val.trim() !== "") {
    return new Date(val);
  }
  return val;
}, z.date().nullable().optional()),
  address : z.string(),
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
//Schema for Update User
export const UserUpdateValidation = z.object({
  name: z.string().min(3, "الاسم لازم يكون على الأقل 3 أحرف").optional(),
  phone:z.string().regex(/^\d{11}$/, "رقم الهاتف يجب أن يكون 11 رقم صحيح").optional(),
  email: z.string().email("البريد الإلكتروني غير صحيح").optional().or(z.literal("")).nullable(),
  gender: z.preprocess((val) => {
  if (val === "") return null; // أو undefined لو تحب
  return val;
}, z.nativeEnum(Gender).nullable().optional()),

  birthDate: z.preprocess((val) => {
  if (val === "") return null;
  if (typeof val === "string" && val.trim() !== "") {
    return new Date(val);
  }
  return val;
}, z.date().nullable().optional()),
 image: z.string().url().optional()

})