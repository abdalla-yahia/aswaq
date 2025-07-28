import ResetPasswordForm from "@/utils/Forms/Reset-Password-Form";

export default function CodeValidation() {
  return (
    <div className="w-1/2 mx-auto my-10 p-5 text-highlight bg-amber-100 rounded shadow-lg">
      <h1 className="text-center text-3xl">تعيين رقم سري جديد</h1>
      <ResetPasswordForm />
    </div>
  )
}
