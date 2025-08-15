'use client'
import { useActionState } from "react";
import InputButton from "../Bottons/Input-button";
import SubmitButton from "../Bottons/Submit-button";
import { useQuery } from "@apollo/client";
import { GET_ME } from "@/Graphql/Schemas/UserQuery";
import { CreateAddress } from "@/interfaces/addressInterface";
import { FormAddress } from "@/types/types";
import { RootState, useAppDispatch } from "@/libs/Store/Store";
import { createAddress } from "@/Features/Actions/addressesActions";
import { AddressNewValidation } from "@/validations/AddressValidation";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function Anew_Addresses_Form() {
  const {address,error,loading} = useSelector((state:RootState)=>state.address)
  const {data}= useQuery(GET_ME,{
    fetchPolicy: 'network-only',
  })
  const dispatch = useAppDispatch()
  const AddAnewAddress = (prevState:CreateAddress,formData:FormData):FormAddress=>{
    const newAddress = {
      ...prevState,
      name:formData.get('NameAddres') as string,
      address:formData.get('Address') as string,
      phone:formData.get('PhoneAddress') as string,
      userId:data?.me?.id
    }
    //Check Validation Inputs
    const validation = AddressNewValidation.safeParse(newAddress)
    if(!validation.success){
      toast.error(validation?.error?.issues.map(e=>e.message))
    }
    console.log(newAddress)
    dispatch(createAddress(newAddress))
    return newAddress as FormAddress;
  
  }

  const initialState:FormAddress = {
    name:'',
    address:'',
    phone:'',
    userId:'',

  }
  const [state, formAction] = useActionState(AddAnewAddress,initialState);
  if(address?.name){
    window.location.reload()
  }
  return (
    <form action={formAction} className="w-full">
      {/**Section Title*/}
      <h1 className="flex w-full p-3 justify-center items-center text-sm md:text-xl lg:text-4xl">أضف عنوان جديد</h1>
      {/**Form Content*/}
      <div className="flex flex-col justify-start items-start gap-2 w-full md:w-1/2">
        {/*Address Name*/}
        <div className="flex justify-between items-center w-full gap-2">
          <h2>اسم العنون : </h2>
          <div className="w-3/4">
            <InputButton  type="text" name="NameAddres" placeholder="أضف اسم العنوان " />
          </div>
        </div>
        {/*Address */}
        <div className="flex justify-between items-center w-full gap-2">
          <h2>العنون : </h2>
          <div className="w-3/4">
            <InputButton  type="text" name="Address" placeholder="أضف العنوان الجديد" />
          </div>
        </div>
        {/*Phone */}
        <div className="flex justify-between items-center w-full gap-2">
          <h2>رقم الهاتف : </h2>
          <div className="w-3/4">
            <InputButton  type="text" name="PhoneAddress" placeholder="أضف رقم الهاتف للعنوان " />
          </div>
        </div>
        {
          error && <p className="text-red-500">{error}</p>
        }
        {
          address?.name && <p className="text-green-500">تم حفظ عنوان  {address?.name} بنجاح</p>
        }
        <SubmitButton  text={loading?'جارٍ الحفظ....':'حفظ'} bgcolor="bg-accent" textcolor="" />
      </div>
    </form>
  )
}
