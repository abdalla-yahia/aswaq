'use client'
import { SetStateAction, useActionState, useState } from "react";
import InputButton from "../../Bottons/Input-button";
import SubmitButton from "../../Bottons/Submit-button";
import UploadImage from "../../UploadImage";
import { CreateBrand } from "@/types/types";
import { CreateBrandValidation } from "@/validations/BrandValidation";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/libs/Store/Store";
import { createAnewBrand } from "@/Features/Actions/brandActions";

export default function Create_Anew_Brand() {

    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const dispatch = useAppDispatch()
    //Create Anew Brand
    const CreateBrand = (prevState:CreateBrand,formData:FormData):CreateBrand=>{
        const newState={
            ...prevState,
            name:formData.get('BrandName') as string,
            description:formData.get('BrandDescription') as string,
            logo:imageUrl ? imageUrl as string : formData.get('BrandImageUrl') ? formData.get('BrandImageUrl') as string : '',
        }
        //Check Validation Data 
        const Validation = CreateBrandValidation.safeParse(newState)
        if(!Validation.success){
            toast.error(Validation?.error?.issues?.map(e=>e?.message).join(', '))
        }
        dispatch(createAnewBrand(Validation?.data as CreateBrand))
        return newState as CreateBrand
    }    
    const initialState:CreateBrand = {
        name:'',
        description:'',
        logo:'',
    }

    const [,actionState] = useActionState(CreateBrand,initialState)
  return (
      <form action={actionState} className="w-1/2 content-center">
        {/*Brand Image*/}
        <UploadImage imageUrl={imageUrl as unknown as string} setImageUrl={setImageUrl as (arg0: string) => SetStateAction<string>} />
        {/*Brand Image URL*/}
        <InputButton type="text" onchange={(e)=>setImageUrl(e.target.value)} placeholder="رابط الصورة" name="BrandImageUrl" />
        {/*Brand Name*/}
        <InputButton type="text" placeholder="اسم البراند" name="BrandName" requird/>
        {/*Brand Description*/}
        <InputButton type="text" placeholder="وصف البراند" name="BrandDescription" />
        {/*Submit*/}
        <SubmitButton text="حفظ" bgcolor="bg-blue-500" textcolor="white"/>
    </form>
  )
}
