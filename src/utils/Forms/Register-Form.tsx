'use client'
import { useActionState, useEffect } from 'react';
import InputButton from "../Bottons/Input-button";
import PasswordButton from "../Bottons/Password-button";
import SubmitButton from "../Bottons/Submit-button";
import { useSelector } from 'react-redux';
import { useAppDispatch,RootState } from '@/libs/Store/Store';
import { createUser } from '@/Features/Actions/users/usersActions';
import { FormState } from '@/types/types';
import { UserCreateSchemaValidaion } from '@/validations/UserValidation';
import * as icon from '@/utils/Icons/Icons'
import {useRouter} from 'next/navigation'

export default function RegisterForm() {
  const { user, error, loading } = useSelector((state:RootState)=>state.user)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const registerAction = (prevState: FormState, formData: FormData): FormState => {
    
    const newState =  {
      ...prevState,
      name: formData.get('UserName') as string,
      email:(formData.get('Email')?.toString().includes('@')) ? (formData.get('Email') as string):undefined ,
      phone:(!formData.get('Email')?.toString().includes('@')) ? (formData.get('Email') as string ):undefined ,
      address: formData.get('Address') as string,
      password: formData.get('Password') as string,
      // ConfirmPassword: formData.get('ConfirmPassword') as string,
    };
    console.log(newState)
      //Check Validation of Data
    const validationData = UserCreateSchemaValidaion.safeParse(newState)
    if (!validationData.success) {
  const errors = validationData.error?.issues.map(err => ({
    path: err.path.join('.'),
    message: err.message
  }));
  console.log(errors.map(e => `${e.path}: ${e.message}`).join(', '))
  throw new Error(errors.map(e => `${e.path}: ${e.message}`).join(', '));
}
        dispatch(createUser(newState as FormState))
    return newState as FormState;
  };
  const initialState: FormState = {
    name: '',
    email: '',
    address: '',
    password: '',
    // ConfirmPassword: '',
  };
  
  const [state, formAction] = useActionState(registerAction, initialState);
  
    //Redirect User To Homepage
    if(user?.user?.name){
      router.replace('/');
    }

  console.log(user?.user?.name)
  return (
     <form action={formAction}>
                {/* User Name */}
                <InputButton   type="text" placeholder="اسم المستخدم" name="UserName"/>
                {/* Email */}
                <InputButton  type="text" placeholder="الإيميل / رقم الهاتف" name="Email"/>
                {/* Password */}
                <PasswordButton  placeholder="الرقم السري" name="Password"/>
                {/* Confirm Password */}
                <PasswordButton  placeholder="تأكيد الرقم السري" name="ConfirmPassword"/>
                {/* Address */}
                <InputButton  type="text" placeholder="العنوان" name="Address"/>
                {/* Submit Button */}
                {error&&
                <div className='flex gap-2'>
                <icon.IoMdClose className="text-red-500" />
                <p className="text-red-500 select-text">{error}</p>
                </div> 
                }
                {user?.user?.name && 
                <div className='flex gap-2'>
                  <icon.IoMdCheckmark className="text-green-500" />
                <p className="text-green-500 select-text">تم تسجيل المستخدم {user?.user?.name} بنجاح</p>
                </div>
                }
                <SubmitButton  text={loading ? "جارٍ التسجيل..." : "تسجيل"} bgcolor="bg-primary" textcolor="text-white"/>
            </form>
  )
}
