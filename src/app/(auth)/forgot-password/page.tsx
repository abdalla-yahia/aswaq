import ForgotPasswordForm from "@/utils/Forms/Forgot-Password-Form";
import Image from "next/image";

export default function ForgotPassword() {
  return (
    <div className="w-full md:w-2/3 mx-auto my-10 p-5 text-foreground bg-background rounded shadow-lg">
    <h1 className="text-center text-3xl">ادخل بريدك الإلكتروني</h1>
    <ForgotPasswordForm />
    <Image loading="lazy" src={'https://static.vecteezy.com/system/resources/previews/059/979/573/non_2x/acclaimed-avant-garde-confused-man-scratching-head-no-background-with-transparent-background-original-free-png.png'} alt="forgot-pass" width={100} height={100} />  
    <span className="w-full flex justify-center text-center text-foreground">سيتم إرسال كود تفعيل إلى بريدك الألكتروني إنسخه والصقه فى الصفحة التالية ثم بعد ذلك قم بتعيين الرقم السري الجديد</span>
    </div>
  )
}
