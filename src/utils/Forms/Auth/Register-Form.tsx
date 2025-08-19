'use client'
import { SetStateAction, useActionState, useEffect, useState } from 'react';
import InputButton from "../../Bottons/Input-button";
import PasswordButton from "../../Bottons/Password-button";
import SubmitButton from "../../Bottons/Submit-button";
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '@/libs/Store/Store';
import { createUser } from '@/Features/Actions/usersActions';
import { FormState } from '@/types/types';
import { UserCreateSchemaValidaion } from '@/validations/UserValidation';
import * as icon from '@/utils/Icons/Icons'
import DatePicker from 'react-datepicker';
import FullAddress from '../../FullAddress';
import { toast } from "react-toastify";
import { Gender } from '@prisma/client';
import { createAddress } from '@/Features/Actions/addressesActions';


export default function RegisterForm() {
  const { user, error, loading } = useSelector((state: RootState) => state.user)
  const [birthDate, setBirthDate] = useState(null);
  const [governorate, setGovernorate] = useState<{ id: string, name: string }>({ id: '', name: '' });
  const [department, setDepartment] = useState<{ id: string, name: string }>({ id: '', name: '' });
  const [neighborhood, setNeighborhood] = useState<{ id: string, name: string }>({ id: '', name: '' });
  const [addressDetails, setAddressDetails] = useState('');
  const [checkPasswordValid,setCheckPasswordValid]=useState('')

  const fullAddress = [
    governorate.name,
    department.name,
    neighborhood.name,
    addressDetails
  ].filter(Boolean).join(' - ');

  const dispatch = useAppDispatch()

  const registerAction = (prevState: FormState, formData: FormData): FormState => {
    const genderValue = formData.get('Gender') as Gender;
    const newState = {
      ...prevState,
      name: formData.get('UserName') as string,
      email: formData.get('Email') as string,
      phone: formData.get('Phone') as string,
      gender: genderValue ? (formData.get('Gender') as unknown as Gender) : null,
      birthDate: new Date(birthDate as unknown as string),
      address: fullAddress as string,
      password: formData.get('Password') as string,
    };

    //Check if the password is valid 
    if (formData.get('ConfirmPassword') !== formData.get('Password')) {
      toast.error('الرقم السري غير متطابق')
      return { ...prevState }
    }
    //Check Validation of Data
    const validationData = UserCreateSchemaValidaion.safeParse(newState)
    if (!validationData.success) {
      const errors = validationData.error?.issues.map(err => ({
        path: err.path.join('.'),
        message: err.message
      }));
      toast.error(errors.map(e => `${e.path}: ${e.message}`).join(', '));
    }
    dispatch(createUser(newState as FormState))
    
    
      return newState as FormState;
  };

  //Inisialize Form
  const initialState: FormState = {
    name: '',
    email: '',
    address: '',
    password: '',
    phone:'',
    gender:undefined,
    birthDate:new Date(birthDate as unknown as string),
  };


  const [state, formAction] = useActionState(registerAction, initialState);

  //Redirect User To Homepage
  useEffect(()=>{
    if (user?.user?.id) {
      dispatch(createAddress({
        userId: user?.user?.id,
        name:'العنوان الرئيسي',
        address: fullAddress,
        phone:user?.user?.phone ? user?.user?.phone :''
      }))
      window.location.href = "/";
    }
  },[user?.user?.id])
  return (
    <form action={formAction}>
      {/* User Name */}
      <InputButton type="text" placeholder="اسم المستخدم" name="UserName" requird />
      {/* Phone */}
      <InputButton type="text" placeholder=" رقم الهاتف" name="Phone" requird />
      {/* Email */}
      <InputButton type="text" placeholder="البريد الإلكتروني" name="Email" />
      {/* Password */}
      <PasswordButton onchange={(e)=>setCheckPasswordValid(e.target.value)} placeholder="الرقم السري" name="Password" requird />
      {/*Check Valid Rols Password*/}
      <ul>
        <li className={`${/[A-Z]/.test(checkPasswordValid)?'text-green-500':'text-gray-500'} text-[12px] flex justify-start items-center`}> {/[A-Z]/.test(checkPasswordValid) && <icon.IoMdCheckmark className='text-green-500 text-[12px]'/>} يجب أن يحتوي الرقم السري على حرف كبير</li>
        <li className={`${/[a-z]/.test(checkPasswordValid)?'text-green-500':'text-gray-500'} text-[12px] flex justify-start items-center`}> {/[a-z]/.test(checkPasswordValid) && <icon.IoMdCheckmark className='text-green-500 text-[12px]'/>} يجب أن يحتوي الرقم السري على الأقل 1 حرف صغير</li>
        <li className={`${/[0-9]/.test(checkPasswordValid)?'text-green-500':'text-gray-500'} text-[12px] flex justify-start items-center`}> {/[0-9]/.test(checkPasswordValid) && <icon.IoMdCheckmark className='text-green-500 text-[12px]'/>} يجب أن يحتوي الرقم السري على الأقل 1 رقم</li>
        <li className={`${checkPasswordValid?.length >= 8 ?'text-green-500':'text-gray-500'} text-[12px] flex justify-start items-center`}> {checkPasswordValid?.length >= 8  && <icon.IoMdCheckmark className='text-green-500 text-[12px]'/>} يجب أن يكون الرقم السري على الأقل 8 أحرف</li>
      </ul>
      {/* Confirm Password */}
      <PasswordButton placeholder="تأكيد الرقم السري" name="ConfirmPassword" requird />
      {/* Gender */}
      <select name="Gender" id="" className="w-full p-2 my-3 border rounded bg-background">
        <option value=''>الجنس</option>
        <option value="MALE">ذكر</option>
        <option value="FEMALE">أنثى</option>
      </select>
      {/*BirthDate*/}
      <div className="w-full p-2 my-3 border rounded bg-background">
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
      {/**************** Full Address **********************************/}
      <FullAddress governorate={governorate} setGovernorate={setGovernorate} department={department} setDepartment={setDepartment} setNeighborhood={setNeighborhood} setAddressDetails={setAddressDetails} addressDetails={addressDetails} />
      {/* Submit Button */}
      {error &&
        <div className='flex gap-2'>
          <icon.IoMdClose className="text-red-500" />
          <p className="text-red-500 select-text">فشلت عملية تسجيل المستخدم الجديد !!</p>
        </div>
      }
      {user?.user?.name &&
        <div className='flex gap-2'>
          <icon.IoMdCheckmark className="text-green-500" />
          <p className="text-green-500 select-text">تم تسجيل المستخدم {user?.user?.name} بنجاح</p>
        </div>
      }
      <p className='flex justify-start items-center text-center'>العلامة <span className='text-red-500 text-3xl mx-1'>*</span> تعني ان الحقل مطلوب </p>
      {
        department.name && neighborhood.name &&
        <SubmitButton text={loading ? "جارٍ التسجيل..." : "تسجيل"} bgcolor="bg-primary" textcolor="text-white" />
      }
    </form>
  )
}
