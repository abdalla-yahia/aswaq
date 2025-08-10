'use client'
import InputButton from "../Bottons/Input-button";
import SubmitButton from "../Bottons/Submit-button";

export default function ForgotPasswordForm() {
  return (
    <form action="" method="post">
      {/* User Email */}
      <InputButton onchange={() => ''} type="email" placeholder="ادخل ايميلك" name="email" />
      {/* Submit Button */}
      <SubmitButton onclick={() => ''} text="إرسال كود التفعيل" bgcolor="bg-primary" textcolor="text-white" />
    </form>
  )
}
