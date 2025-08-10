'use client'
import InputButton from "../Bottons/Input-button";
import SubmitButton from "../Bottons/Submit-button";

export default function CodeValidationForm() {
  return (
    <form action="" method="post">
      {/* Code Input Field */}
      <InputButton onchange={() => ''} type="text" placeholder="ادخل الكود" name="code-validation" />
      {/* Submit Button */}
      <SubmitButton onclick={() => ''} text="تأكيد كود التفعيل" bgcolor="bg-primary" textcolor="text-white" />
    </form>
  )
}
