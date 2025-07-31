import RegisterForm from "@/utils/Forms/Register-Form";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <section className="register flex justify-center items-center">
    <div className=" md:w-2/3 font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-2xl font-bold text-center">تسجيل مستخدم جديد</h1>
      {/* Register Form */}
      <RegisterForm />
        <p className="mt-4 text-center">
            هل لديك حساب بالفعل? <Link href="/login" className="text-primary hover:text-red-500 translate-0.5">اضغط هنا!</Link>
        </p>
    </div>
    <Image className="hidden md:block md:w-1/3 register-image" src={'https://static.vecteezy.com/system/resources/previews/032/851/521/non_2x/cv-approved-3d-illustration-icon-or-resume-approved-3d-illustration-icon-free-png.png'} alt="register" width={600} height={600} />
    </section>
  )
}
