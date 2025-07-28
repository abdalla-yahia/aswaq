'use client';
import * as icon from '@/components/Icons/Icons'
import { useState } from "react";

export default function PasswordButton({name,placeholder}: {name?: string,placeholder?: string}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex justify-center items-center  gap-2 w-full border rounded my-3 p-2 ">
          <input type={!showPassword ?'password':'text'} placeholder={placeholder} name={name} className="w-full outline-none border-none" />
            {!showPassword ? 
            <icon.FaRegEyeSlash onClick={()=>setShowPassword(true)} className="cursor-pointer"/>
            :
            <icon.FaRegEye onClick={()=>setShowPassword(false)} className="cursor-pointer"/> 
            }
          </div>
  )
}
