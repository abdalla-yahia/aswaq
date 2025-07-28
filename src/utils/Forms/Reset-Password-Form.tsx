import PasswordButton from "../Bottons/Password-button";
import SubmitButton from "../Bottons/Submit-button";

export default function ResetPasswordForm() {
  return (
   <form action="" method="post">
           {/* New Password */}
           <PasswordButton  placeholder="ادخل الرقم السري الجديد" name="new-password" />
           {/* Confirm New Password */}
           <PasswordButton  placeholder="تأكيد الرقم السري الجديد" name="confirm-new-password" />
           {/* Submit Button */}
           <SubmitButton text="حفظ الرقم السري الجديد" />
       </form>
  )
}
