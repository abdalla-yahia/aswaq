
import LoginForm from "@/utils/Forms/Login-Form";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {

  return (
    <div className="flex w-full  items-start justify-center md:justify-between mt-5 min-h-screen bg-background">
      <Image loading="lazy" className="hidden md:block md:w-1/3 lg:w-1/2 animate-pulse" src={'https://static.vecteezy.com/system/resources/previews/029/726/216/large_2x/3d-purple-illustration-icon-of-using-smartphone-for-sign-up-or-login-to-profile-account-with-security-padlock-side-free-png.png'} alt="image-login" width={450} height={450} />
      {/**Login Form */}
      <div className=" w-5/6 md:w-2/3 lg:w-1/2 text-forground p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">تسجيل الدخول</h1>
        {/* Login Form */}
        <LoginForm />
        <p className="mt-4 text-center">
          ليس لديك حساب؟ <Link href="/register" className="text-primary hover:text-red-500 translate-0.5">إنشاء حساب جديد!</Link>
          </p>
        <p className="mt-2 text-center">
            نسيت الرقم السري ؟
          <Link href="/forgot-password" className="text-primary hover:text-red-500 translate-0.5">إعادة تعيين الرقم السري! 
          </Link>
          </p>
      </div>
    </div>
  )
}
