
import LoginForm from "@/utils/Forms/Login-Form";
import Link from "next/link";

export default function LoginPage() {

  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-background">
      <div className="bg-foreground w-1/2 text-background p-6 rounded-lg shadow-lg">
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
