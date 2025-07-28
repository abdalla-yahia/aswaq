import InputButton from "../Bottons/Input-button";
import PasswordButton from "../Bottons/Password-button";
import SubmitButton from "../Bottons/Submit-button";

export default function RegisterForm() {
  return (
     <form action="" method="post">
                {/* User Name */}
                <InputButton type="text" placeholder="اسم المستخدم" name="user-name"/>
                {/* Email */}
                <InputButton type="email" placeholder="الإيميل / رقم الهاتف" name="email"/>
                {/* Password */}
                <PasswordButton placeholder="الرقم السري" name="password"/>
                {/* Confirm Password */}
                <PasswordButton placeholder="تأكيد الرقم السري" name="confirm-password"/>
                {/* Address */}
                <InputButton type="text" placeholder="العنوان" name="address"/>
                {/* Submit Button */}
                <SubmitButton text="دخول" />
            </form>
  )
}
