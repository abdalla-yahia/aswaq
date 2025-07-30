import ForgotPasswordForm from "@/utils/Forms/Forgot-Password-Form";

export default function ForgotPassword() {
  return (
    <div className="w-1/2 mx-auto my-10 p-5 text-foreground bg-background rounded shadow-lg">
    <h1 className="text-center text-3xl">ادخل بريدك الإلكتروني</h1>
    <ForgotPasswordForm />
    </div>
  )
}
