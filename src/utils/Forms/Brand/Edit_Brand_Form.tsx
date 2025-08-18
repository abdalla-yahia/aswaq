import InputButton from "../../Bottons/Input-button";
import SubmitButton from "../../Bottons/Submit-button";
import UploadImage from "../../UploadImage";
import { SetStateAction, useActionState, useState } from "react";
import { useAppDispatch } from "@/libs/Store/Store";
import { UpdateBrand } from "@/types/types";
import { UpdateBrandValidation } from "@/validations/BrandValidation";
import { toast } from "react-toastify";
import { updateBrand } from "@/Features/Actions/brandActions";

export default function Edit_Brand_Form({brand}:{brand:UpdateBrand}) {

    const [imageUrl, setImageUrl] = useState<string | null>(brand?.logo as string);
    const dispatch = useAppDispatch()
        //Edit Brand
        const EditBrand = (prevState:UpdateBrand,formData:FormData):UpdateBrand =>{
            const editstate={
                ...prevState,
                id:brand?.id,
                name:formData.get('BrandName') as string || brand?.name,
                description:formData.get('BrandDescription') as string || brand?.description,
                image:formData.get('BrandImageUrl') as string || brand?.logo,
            }
            //Check Validation Data
            const Validation = UpdateBrandValidation.safeParse(editstate)
            if(!Validation.success){
                toast.error(Validation?.error?.issues?.map(e=>e?.message).join(', '))
            }
            dispatch(updateBrand(editstate as UpdateBrand))
            return editstate as UpdateBrand;
        }
        //InitialState
        const initialState:UpdateBrand = {
        id:brand?.id,
        name:brand?.name,
        description:brand?.description,
        logo:brand?.logo,
    }
    const [state,actionState] = useActionState(EditBrand,initialState)

    // @To-Do Reload Page After Update Element
    //     window.lobrandion.reload()
    // 
    
  return (
    <form action={actionState} >
         {/*Brand Image*/}
                <UploadImage imageUrl={imageUrl as unknown as string} setImageUrl={setImageUrl as (arg0: string) => SetStateAction<string>} />
                {/*Brand Image URL*/}
                <InputButton type="text" onchange={(e)=>setImageUrl(e.target.value)} placeholder="رابط الصورة" name="BrandImageUrl" />
                {/*Brand Name*/}
                <InputButton type="text" placeholder={brand?.name || "اسم البراند"} name="BrandName" />
                {/*Brand Description*/}
                <InputButton type="text" placeholder={brand?.description || 'وصف البراند'} name="BrandDescription" />
                {/*Submit*/}
                <SubmitButton text="حفظ" bgcolor="bg-blue-500" textcolor="white"/>
    </form>
  )
}
