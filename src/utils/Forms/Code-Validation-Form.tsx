import InputButton from "../Bottons/Input-button";
import SubmitButton from "../Bottons/Submit-button";

export default function CodeValidationForm() {
  return (
    <form action="" method="post">
        {/* Code Input Field */}
        <InputButton type="text" placeholder="ادخل الكود" name="code-validation" />
        {/* Submit Button */}
        <SubmitButton text="تأكيد كود التفعيل" />
    </form>
  )
}
