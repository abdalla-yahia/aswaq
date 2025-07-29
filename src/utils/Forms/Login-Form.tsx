import InputButton from "@/utils/Bottons/Input-button";
import PasswordButton from "@/utils/Bottons/Password-button";
import SubmitButton from "@/utils/Bottons/Submit-button";

export default function LoginForm() {
  return (
    <form action="" method="post">
            {/* Email / Phone Number */}
            <InputButton type="email" placeholder="الإيميل / رقم الهاتف" name="email"/>
            {/* Password */}
            <PasswordButton placeholder="الرقم السري" name="password"/>
            {/* Submit Button */}
            <SubmitButton text="دخول" bgcolor="bg-primary" textcolor="text-white"/>
        </form>
  )
}
