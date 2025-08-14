import React, { Dispatch, SetStateAction, useActionState, useState } from 'react'
import SubmitButton from '@/utils/Bottons/Submit-button';
import DatePicker from 'react-datepicker';
import * as icon from '@/utils/Icons/Icons';
import { useQuery } from '@apollo/client';
import { GET_ME } from '@/Graphql/Schemas/UserQuery';
import InputButton from '../Bottons/Input-button';
import { FormEdit } from '@/types/types';
import { UserUpdateValidation } from '@/validations/UserValidation';
import { toast } from 'react-toastify';
import { RootState, useAppDispatch } from '@/libs/Store/Store';
import { updateUser } from '@/Features/Actions/users/usersActions';
import UploadImage from '../UploadImage';
import { useSelector } from 'react-redux';
import { Gender } from '@prisma/client';

export default function EditUserDataForm({setIsEdit}:{setIsEdit:Dispatch<SetStateAction<boolean>>}) {
        const { user, error } = useSelector((state:RootState)=>state.user)  
        const [birthDate, setBirthDate] = useState(null);
        const [imageUrl, setImageUrl] = useState<string | null>(null);

      const dispatch = useAppDispatch()
    const { data } = useQuery(GET_ME, {
        fetchPolicy: "network-only", 
      });

      const EditUserDataHandller = (prevState:FormEdit,formData:FormData):FormEdit=>{
        const genderValue = formData.get('Gender') as string;
        const emailValue = formData.get('Email') as string;
        const phoneValue = formData.get('Phone') as string;

          const editState = {
            ...prevState,
            id: data?.me?.id,
            data: {
              image: (imageUrl as string)?.trim() || data?.me?.image,
              name: (formData.get('UserName') as string) || data?.me?.name,
              email: emailValue?.trim() ? emailValue.trim() : data?.me?.email, // ما تبعتش "" 
              phone: phoneValue?.trim() ? phoneValue.trim() : data?.me?.phone, // ما تبعتش ""
              gender: genderValue?.trim()
                  ? (genderValue as unknown as Gender)
                  : (data?.me?.gender as Gender),
              birthDate: birthDate && birthDate !== ""
                  ? new Date(birthDate as string)
                  : data?.me?.birthDate
                  ? new Date(Number(data?.me?.birthDate))
                  : null,
                      },
          }
        console.log("قبل",editState)
        //Validation Data
        const validationData = UserUpdateValidation.safeParse(editState.data)
        if(!validationData.success){
             const errors = validationData.error?.issues.map(err => ({
                path: err.path.join('.'),
                message: err.message
            }));
            toast.error(errors.map(e => `${e.path}: ${e.message}`).join(', '));
                    }
          console.log("بعد",editState)
        dispatch(updateUser(editState))
        return editState as FormEdit;
            }
        //InisialState 
    const initialState:FormEdit = {
        id:data?.me?.id,
        data:{
        image: data?.me?.image,
        name: data?.me?.name,
        email: data?.me?.email,
        phone: data?.me?.phone,
        gender: data?.me?.gender as Gender,
        birthDate: data?.me?.birthDate
        }
    }
            const [state,formAction] = useActionState(EditUserDataHandller,initialState)
      if(user?.user?.name){
        setIsEdit(false)
        window.location.reload()
      }
  return (
    <form action={formAction} className='flex flex-col justify-between text-black items-center gap-1 absolute top-0 left-0 h-fit w-fit bg-accent p-5'>
                <icon.IoMdClose onClick={()=>setIsEdit(false)} className='text-2xl cursor-pointer text-red-500 absolute top-2 left-2 font-semibold' title='إغلاق'/>
                {/*User Image*/}
                <UploadImage imageUrl={imageUrl as unknown as string} setImageUrl={setImageUrl as (arg0:string)=>SetStateAction<string>} />
                {/* <div className="flex items-center gap-4">
                    <label className="text-lg font-bold" htmlFor='userimage'>
                    <input type="file" name="UserImage" id="userimage" className='hidden'/>
                    <icon.FaUserCircle className="text-6xl text-gray-400" />
                    </label>
                </div> */}
                {/* User Name */}
                <InputButton   type="text" placeholder={data?.me?.name || "اسم المستخدم"} name="UserName" />
                {/* Email */}
                <InputButton  type="text" placeholder={data?.me?.email || 'البريد الإلكتروني'} name="Email"/>
                {/* Phone */}
                <InputButton  type="text" placeholder={data?.me?.phone || "رقم الهاتف"} name="Phone" />
                {/* Gender */}
                   <select name="Gender" id="" className="p-2 my-3 border rounded w-full">
                  <option value=''>الجنس</option>
                  <option value="MALE">ذكر</option>
                  <option value="FEMALE">أنثى</option>
                </select>
                {/*BirthDate*/}
                <div className=" p-2 my-3 border rounded ">
                <DatePicker
                        selected={birthDate}
                        onChange={(date) => setBirthDate(date as SetStateAction<null>)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="تاريخ الميلاد"
                        maxDate={new Date()}
                        minDate={new Date('1970-01-01')}
                        showMonthDropdown
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={100} // عدد السنين اللي تظهر
                        className="w-full"
                        popperPlacement="bottom"
                        />
                </div>
                 {error&&
                                <div className='flex gap-2'>
                                <icon.IoMdClose className="text-red-500" />
                                <p className="text-red-500 select-text">{error}</p>
                                </div> 
                                }
                                {user?.user?.name && 
                                <div className='flex gap-2'>
                                  <icon.IoMdCheckmark className="text-green-500" />
                                <p className="text-green-500 select-text">تم تعديل المستخدم {user?.user?.name} بنجاح</p>
                                </div>
                                }
                <SubmitButton text='حفظ التعديلات' bgcolor='bg-blue-500' textcolor='white'/>
    </form>
  )
}
