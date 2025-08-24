import { useQuery } from "@apollo/client";
import InputButton from "../../Bottons/Input-button";
import SubmitButton from "../../Bottons/Submit-button";
import UploadImage from "../../UploadImage";
import { GET_ALL_CATEGORIES } from "@/Graphql/Schemas/CategoryQuery";
import { SetStateAction, useActionState, useState } from "react";
import { useAppDispatch } from "@/libs/Store/Store";
import { UpdateCategory } from "@/types/types";
import { UpdateCategoryValidation } from "@/validations/CategoryValidation";
import { toast } from "react-toastify";
import { updateCategory } from "@/Features/Actions/categoryActions";

export default function Edit_Category_Form({ cat }: { cat: UpdateCategory }) {
    const { data } = useQuery(GET_ALL_CATEGORIES, {
        fetchPolicy: 'cache-and-network',
    })
    const [ParentId, setParentId] = useState<null | string>(null)
    const [imageUrl, setImageUrl] = useState<string | null>(cat?.image as string);
    const dispatch = useAppDispatch()
    //Edit Category
    const EditCategory = (prevState: UpdateCategory, formData: FormData): UpdateCategory => {
        const editstate = {
            ...prevState,
            id: cat?.id,
            name: formData.get('CategoryName') as string || cat?.name,
            description: formData.get('CategoryDescription') as string || cat?.description,
            image: formData.get('CategoryImageUrl') as string || cat?.image,
            parentId: ParentId ? ParentId : cat?.parentId
        }
        //Check Validation Data
        const Validation = UpdateCategoryValidation.safeParse(editstate)
        if (!Validation.success) {
            toast.error(Validation?.error?.issues?.map(e => e?.message).join(', '))
        }
        dispatch(updateCategory(editstate as UpdateCategory))
        return editstate as UpdateCategory;
    }
    //InitialState
    const initialState: UpdateCategory = {
        id: cat?.id,
        name: cat?.name,
        description: cat?.description,
        image: cat?.image,
        parentId: cat?.parentId
    }
    const [state, actionState] = useActionState(EditCategory, initialState)

    // @To-Do Reload Page After Update Element
    //     window.location.reload()
    // 

    return (
        <form action={actionState} >
            {/*Category Image*/}
            <UploadImage imageUrl={imageUrl as unknown as string} setImageUrl={setImageUrl as (arg0: string) => SetStateAction<string>} />
            {/*Category Image URL*/}
            <InputButton type="text" onchange={(e) => setImageUrl(e.target.value)} placeholder="رابط الصورة" name="CategoryImageUrl" />
            {/*Category Name*/}
            <InputButton type="text" placeholder={cat?.name || "اسم التصنيف"} name="CategoryName" />
            {/*Category Description*/}
            <InputButton type="text" placeholder={cat?.description || 'وصف التصنيف'} name="CategoryDescription" />
            {/*Category ParentId*/}
            <select onChange={(e) => setParentId(e.target.value)} className="w-full text-blue-500 border rounded p-2 mb-4">
                <option value={'null'}>اختر التصنيف</option>
                {
                    data?.AllCategories?.category?.map((category: UpdateCategory) =>
                        <option key={category?.id} value={category?.id}>{category?.name}</option>
                    )
                }
            </select>
            {/*Submit*/}
            <SubmitButton text="حفظ" bgcolor="bg-blue-500" textcolor="white" />
        </form>
    )
}
