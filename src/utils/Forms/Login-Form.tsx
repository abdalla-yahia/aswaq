'use client'
import InputButton from "@/utils/Bottons/Input-button";
import PasswordButton from "@/utils/Bottons/Password-button";
import SubmitButton from "@/utils/Bottons/Submit-button";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  return (
    <form action="" method="post">
      {/* Email / Phone Number */}
      <InputButton onchange={() => ''} type="email" placeholder="الإيميل / رقم الهاتف" name="email" />
      {/* Password */}
      <PasswordButton onchange={() => ''} placeholder="الرقم السري" name="password" />
      {/* Submit Button */}
      <SubmitButton onclick={() => ''} text="دخول" bgcolor="bg-primary" textcolor="text-white" />
      <div className="w-full text-center text-muted my-3"> ـــــــــــــــــــــ or ـــــــــــــــــــــ </div>
      <div className="flex w-full justify-center my-2 items-center gap-2 text-muted">
        <div className="w-1/2 py-2 hover:bg-accent flex justify-center items-center px-3 border mx-1 rounded-xl cursor-pointer">
          <Image src={'https://static.vecteezy.com/system/resources/thumbnails/046/861/647/small_2x/google-logo-transparent-background-free-png.png'} alt="google" width={20} height={20} />
          <h2>Google</h2>
        </div>
        <div className="w-1/2 py-2 hover:bg-accent flex justify-center items-center px-3 border mx-1 rounded-xl cursor-pointer">
          <Image className="rounded-full" src={'https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png'} alt="Facebook" width={20} height={20} />
          <h2 className="">Facebook</h2>
        </div>
      </div>

    </form>
  )
}
