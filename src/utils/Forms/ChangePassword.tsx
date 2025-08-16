'use Client'
import { useSelector } from "react-redux";
import PasswordButton from "../Bottons/Password-button";
import SubmitButton from "../Bottons/Submit-button";
import { RootState, useAppDispatch } from "@/libs/Store/Store";
import { Dispatch, SetStateAction, useActionState, useState } from "react";
import { toast } from "react-toastify";
import { UserCreateSchemaValidaion } from "@/validations/UserValidation";
import { useQuery } from "@apollo/client";
import { GET_ME } from "@/Graphql/Schemas/UserQuery";
import { PasswordState } from "@/types/types";
import * as icon from '@/utils/Icons/Icons';
import { changeUserPassword } from "@/Features/Actions/usersActions";

export default function ChangePassword({setIsChangePassword}:{setIsChangePassword:Dispatch<SetStateAction<boolean>>}) {
    const {data}= useQuery(GET_ME,{
        fetchPolicy: 'network-only',
    })
    const {password,error,loading} = useSelector((state:RootState)=>state.user)
    const [newPassword,setNewPassword]= useState<string>('');
    const [confirmPassword,setConfirmPassword]= useState<string>('');

    const dispatch = useAppDispatch()

    const RechangeState = (prevState:PasswordState,formData:FormData):PasswordState=>{
        const changeState= {
            ...prevState,
            id:data?.me?.id,
            oldPassword:formData.get('OldPassword') as string,
            newPassword:formData.get('NewPassword') as string
        }
        //Check If NewPassword is equal to Confirmpassword
        if(newPassword !== confirmPassword){
            toast.error("الرقم السري غير متطابق")
            return prevState;
        }
        //Check Validation Password
        const PasswordSchema = UserCreateSchemaValidaion.pick({ password: true });
        const Validation = PasswordSchema.safeParse({password:changeState?.newPassword})
        if(!Validation.success){
            toast.error(Validation.error.issues[0].message)
            return prevState;
            }
            dispatch(changeUserPassword(changeState))
        return changeState as PasswordState
    }
    //InitialaState 
    const inisialState = {
        id:data?.me?.id,
        newPassword: "",
        oldPassword: "",
    }
    const [state,actionState] = useActionState(RechangeState,inisialState)
    
    if(password?.success === true){
        window.location.href = '/logout'
    }
  return (
    <form action={actionState} className='flex flex-col justify-between text-black items-center gap-1 absolute top-0 left-0 h-fit w-full md:w-fit bg-accent p-5 mb-8'>
        <icon.IoMdClose onClick={() => setIsChangePassword(false)} className='text-2xl cursor-pointer text-red-500 absolute top-2 left-2 font-semibold' title='إغلاق' />
        {/*Old Password*/}
        <PasswordButton placeholder="الرقم السري القديم" name="OldPassword" requird/>
        {/*New Password*/}
        <PasswordButton onchange={(e)=>setNewPassword(e.target.value)} placeholder="الرقم السري الجديد" name="NewPassword" requird />
        {/*Check Valid Rols Password*/}
        <ul>
        <li className={`${/[A-Z]/.test(newPassword)?'text-green-500':'text-gray-500'} text-[12px] flex justify-start items-center`}> {/[A-Z]/.test(newPassword) && <icon.IoMdCheckmark className='text-green-500 text-[12px]'/>} يجب أن يحتوي الرقم السري على حرف كبير</li>
        <li className={`${/[a-z]/.test(newPassword)?'text-green-500':'text-gray-500'} text-[12px] flex justify-start items-center`}> {/[a-z]/.test(newPassword) && <icon.IoMdCheckmark className='text-green-500 text-[12px]'/>} يجب أن يحتوي الرقم السري على الأقل 1 حرف صغير</li>
        <li className={`${/[0-9]/.test(newPassword)?'text-green-500':'text-gray-500'} text-[12px] flex justify-start items-center`}> {/[0-9]/.test(newPassword) && <icon.IoMdCheckmark className='text-green-500 text-[12px]'/>} يجب أن يحتوي الرقم السري على الأقل 1 رقم</li>
        <li className={`${newPassword?.length >= 8 ?'text-green-500':'text-gray-500'} text-[12px] flex justify-start items-center`}> {newPassword?.length >= 8  && <icon.IoMdCheckmark className='text-green-500 text-[12px]'/>} يجب أن يكون الرقم السري على الأقل 8 أحرف</li>
        </ul>
        {/*Confirm Password*/}
        <PasswordButton onchange={(e)=>setConfirmPassword(e.target.value)} placeholder="تأكيد الرقم السري" name="ConfirmPassword" requird />
        {/*Submit Changes */}
        {
            error && <p className="text-red-500" >فشل في تحديث الرقم السري</p>
        }
        {
            password?.success && <p className="text-green-500" >تم تغيير الرقم السري بنجاح</p>
        }
        <SubmitButton text={loading ? "جارٍ الحفظ..." : "حفظ"} bgcolor="bg-blue-500" textcolor="text-white" />
    </form>
  )
}
