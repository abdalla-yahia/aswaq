'use client'
import { loginUser } from "@/Features/Actions/usersActions";
import { RootState, useAppDispatch } from "@/libs/Store/Store";
import { LoginUser } from "@/types/types";
import InputButton from "@/utils/Bottons/Input-button";
import PasswordButton from "@/utils/Bottons/Password-button";
import SubmitButton from "@/utils/Bottons/Submit-button";
import { UserLoginValidation } from "@/validations/UserValidation";
import Image from "next/image";
import { useActionState } from "react";
import { useSelector } from "react-redux";
import * as icon from '@/utils/Icons/Icons'
import { toast } from "react-toastify";

export default function LoginForm() {
  const { user, error, loading } = useSelector((state: RootState) => state.user)
  const dispatch = useAppDispatch()

  const loginHandler = (prevstate: LoginUser, formdata: FormData): LoginUser => {
    const loginData = {
      ...prevstate,
      email: (formdata.get('Email') as string).toString().includes('@') ? formdata.get('Email') : undefined,
      phone: (!(formdata.get('Email') as string).toString().includes('@')) ? formdata.get('Email') : undefined,
      password: formdata.get('Password')
    }
    //Check Validation of Login Data
    const validationLogin = UserLoginValidation.safeParse(loginData)
    if (!validationLogin.success) {
      const errors = validationLogin.error?.issues.map(err => ({
        path: err.path.join('.'),
        message: err.message
      }));
      toast.error(errors.map(e => `${e.path}: ${e.message}`).join(', '));
    }
    dispatch(loginUser(loginData as LoginUser))
    return loginData as LoginUser
  }
  const initialstate = {
    email: '',
    phone: '',
    password: ''
  }
  const [state, actionState] = useActionState(loginHandler, initialstate)

  //Redirect Login User To Dashboard
  if (user?.user?.name) {
    window.location.href = "/";;
  }
  return (
    <form action={actionState} >
      {/* Email / Phone Number */}
      <InputButton type="text" placeholder="الإيميل / رقم الهاتف" name="Email" />
      {/* Password */}
      <PasswordButton placeholder="الرقم السري" name="Password" />
      {/* Submit Button */}
      {error &&
        <div className='flex gap-2'>
          <icon.IoMdClose className="text-red-500" />
          <p className="text-red-500 select-text">فشل في تسجيل الدخول !!</p>
        </div>
      }
      {user?.user?.name &&
        <div className='flex gap-2'>
          <icon.IoMdCheckmark className="text-green-500" />
          <p className="text-green-500 select-text">تم دخول المستخدم {user?.user?.name} بنجاح</p>
        </div>
      }
      <SubmitButton text={loading ? "جارٍ تسجيل الدخول..." : "دخول"} bgcolor="bg-primary" textcolor="text-white" />
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
