import { CreateAddress } from "@/interfaces/addressInterface";
import { RootState, useAppDispatch } from "@/libs/Store/Store";
import InputButton from "@/utils/Bottons/Input-button";
import SubmitButton from "@/utils/Bottons/Submit-button";
import FullAddress from "@/utils/FullAddress";
import { AddressNewValidation } from "@/validations/AddressValidation";
import { Dispatch, SetStateAction, useActionState, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as icon from '@/utils/Icons/Icons';
import { updateAddress } from "@/Features/Actions/addressesActions";

export default function Edite_Address_Form({setIsEditAddress,id,name,Address,phone,userId}:{id:string,name:string,Address:string,phone:string,userId:string,setIsEditAddress:Dispatch<SetStateAction<boolean>>}) {
    const {status,error,loading} = useSelector((state:RootState)=>state.address)
    const [governorate, setGovernorate] = useState<{ id: string, name: string }>({ id: '', name: '' });
      const [department, setDepartment] = useState<{ id: string, name: string }>({ id: '', name: '' });
      const [neighborhood, setNeighborhood] = useState<{ id: string, name: string }>({ id: '', name: '' });
      const [addressDetails, setAddressDetails] = useState('');
    
      const fullAddress = [
        governorate.name,
        department.name,
        neighborhood.name,
        addressDetails
      ].filter(Boolean).join(' - ');

      const dispatch  = useAppDispatch()
      const Edite_Address = (prevState:CreateAddress,formData:FormData):CreateAddress=>{
        const editaddress={
            ...prevState,
            id,
            name:formData.get('AddressName') as string || name,
            address:fullAddress || Address,
            phone:formData.get('AddressPhone') || phone,
        }
        //Check Validation Input
        const EditValidation = AddressNewValidation.pick({
            name:true,
            address:true,
            phone:true
        })
        const Validation = EditValidation.safeParse({
            name:editaddress.name,
            address:editaddress.address,
            phone:editaddress.phone
        })
        //Notifcation If Not Valid Input
        if(!Validation.success){
            toast.error(Validation.error.issues.map(e=>e.message).join(', '))
        }
        dispatch(updateAddress(editaddress as CreateAddress))

        return editaddress as CreateAddress;
      }
      //Initial State
      const initialState:CreateAddress = {
        id,
        name,
        address:Address,
        phone,
        userId
      }

      const [state,actionState] = useActionState(Edite_Address,initialState)
    return (
    <form action={actionState} className='flex flex-col justify-between text-black items-center gap-1 absolute top-0 left-0 h-fit w-full md:w-fit bg-accent p-5 mb-8'>
          <icon.IoMdClose onClick={() => setIsEditAddress(false)} className='text-2xl cursor-pointer text-red-500 absolute top-2 left-2 font-semibold' title='إغلاق' />
        {/*Address Name*/}
        <InputButton type="text" placeholder={name} name="AddressName"/>
        {/*Address Details*/}
        <FullAddress governorate={governorate} setGovernorate={setGovernorate} department={department} setDepartment={setDepartment} setNeighborhood={setNeighborhood} setAddressDetails={setAddressDetails} addressDetails={addressDetails} />
        {/*Address Phone*/}
        <InputButton type="text" placeholder={phone || 'رقم الهاتف'} name="AddressPhone"/>
        {/*Submit button*/}
        {
            error && <p className="text-red-500">فشل في تعديل العنوان</p>
        }
        {
            status?.success && <p className="text-green-500">تم نعديل العنوان بنجاح</p>
        }
        <SubmitButton text={loading ?'جارٍ الحفظ...':'حفظ'} bgcolor="bg-blue-500" textcolor="white"/>
    </form>
  )
}
