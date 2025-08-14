'use client'
import * as icon from '@/utils/Icons/Icons'
import { useState } from "react";

export default function PasswordButton({ name, placeholder,onchange,requird }: { name?: string, placeholder?: string,onchange?:(e:React.ChangeEvent<HTMLInputElement>)=>void,requird?:boolean }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex justify-center items-center relative  gap-2 w-full border rounded my-3 p-2 px-4 ">
      <input onChange={onchange} type={!showPassword ? 'password' : 'text'} placeholder={placeholder} name={name} className="w-full outline-none border-none" />
      {!showPassword ?
        <icon.FaRegEyeSlash onClick={() => setShowPassword(true)} className="cursor-pointer" />
        :
        <icon.FaRegEye onClick={() => setShowPassword(false)} className="cursor-pointer" />
      }
          {requird && <p className="text-red-500 text-3xl absolute top-[25%] left-1">*</p>}
    </div>
  )
}
