'use client'
import { SetStateAction, useActionState, useState } from "react";
import InputButton from "../../Bottons/Input-button";
import SubmitButton from "../../Bottons/Submit-button";
import UploadImage from "../../UploadImage";
import { CreateCategory } from "@/types/types";
import { CreateCategoryValidation } from "@/validations/CategoryValidation";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/libs/Store/Store";
import { createAnewCategory } from "@/Features/Actions/categoryActions";
import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "@/Graphql/Schemas/CategoryQuery";

export default function Create_Anew_Category() {
    const {data} = useQuery(GET_ALL_CATEGORIES,{
        fetchPolicy:'network-only',
    })
    const [ParentId,setParentId] = useState<null|string>(null)
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const dispatch = useAppDispatch()
    //Create Anew Category
    const CreateCategory = (prevState:CreateCategory,formData:FormData):CreateCategory=>{
        const newState={
            ...prevState,
            name:formData.get('CategoryName') as string,
            description:formData.get('CategoryDescription') as string,
            image:imageUrl ? imageUrl as string : formData.get('CategoryImageUrl') ? formData.get('CategoryImageUrl') as string : '',
            parentId:ParentId
        }
        //Check Validation Data 
        const Validation = CreateCategoryValidation.safeParse(newState)
        if(!Validation.success){
            toast.error(Validation?.error?.issues?.map(e=>e?.message).join(', '))
        }
        console.log(newState)
        dispatch(createAnewCategory(Validation?.data as CreateCategory))
        return newState as CreateCategory
    }    
    const initialState:CreateCategory = {
        name:'',
        description:'',
        image:'',
        parentId:null
    }

    const [,actionState] = useActionState(CreateCategory,initialState)
  return (
      <form action={actionState} className="w-1/2 content-center">
        {/*Category Image*/}
        <UploadImage imageUrl={imageUrl as unknown as string} setImageUrl={setImageUrl as (arg0: string) => SetStateAction<string>} />
        {/*Category Image URL*/}
        <InputButton type="text" placeholder="رابط الصورة" name="CategoryImageUrl" />
        {/*Category Name*/}
        <InputButton type="text" placeholder="اسم التصنيف" name="CategoryName" requird/>
        {/*Category Description*/}
        <InputButton type="text" placeholder="وصف التصنيف" name="CategoryDescription" />
        {/*Category ParentId*/}
        <select onChange={(e)=>setParentId(e.target.value)} className="w-full text-blue-500 border rounded p-2 mb-4">
        <option value={'null'}>اختر التصنيف</option>
        {
            data?.AllCategories?.category?.map((category:CreateCategory)=>
                <option key={category?.id} value={category?.id}>{category?.name}</option>
            )
        }
        </select>
        {/*Submit*/}
        <SubmitButton text="حفظ" bgcolor="bg-blue-500" textcolor="white"/>
    </form>
  )
}
