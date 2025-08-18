'use client';
import { CreateCategory, UpdateCategory } from "@/types/types";
import Image from "next/image";
import { useAppDispatch } from '@/libs/Store/Store';
import { useState } from "react";
import { deleteCategory } from '@/Features/Actions/categoryActions';
import * as icon from '@/utils/Icons/Icons';
import Edit_Category_Form from '@/utils/Forms/Category/Edit_Category_Form';
import swal from "sweetalert";

export default function SubCategory({sub}: { sub: CreateCategory }) {
          const [isCategoryEdit,setIsCategoryEdit] =useState(false)
          const dispatch = useAppDispatch()
          //Delete Category
          const DeleteCategoryHandle = ()=>{
            swal({
                title: "هل أنت متأكد من الحذف؟",
                text: "بمجرد حذف التصنيف سيتم مسحة نهائياً ولن تستطع إستعادة بياناته مرة أخرى!",
                icon: "warning",
                dangerMode: true,
                buttons:["إلغاء", "حذف"]
              })
            .then((willDelete) => {
              if (willDelete) {
                dispatch(deleteCategory(sub?.id as string))
                swal("تم حذف التصنيف", {
                  icon: "success",
                });
                window.location.reload()
              } else {
                swal("أنت الأن في أمان لم يتم الحذف!");
              }
            });
          }
  return (
    <tr  className="border-b dark:border-gray-700">
                <td className="p-3">
                    {sub?.image &&
                    <Image src={sub?.image as string} width={80} height={80} alt={`image-${sub?.name}`}/>}
                    </td>
                <td className="p-3 font-medium">{sub?.name}</td>
                <td className="p-3">{sub?.parent?.name}</td>
                <td className="p-3">{sub?.description}</td>
                <td className="p-3 space-x-2 rtl:space-x-reverse">
                    {/*Actions Of Category*/}
                        <div className="flex gap-2">
                            {
                            isCategoryEdit && <Edit_Category_Form cat={sub as UpdateCategory}/>
                            }
                            <icon.HiPencilSquare onClick={()=>setIsCategoryEdit(!isCategoryEdit)} title='تعديل التصنيف' className='text-green-500 cursor-pointer' />
                            <icon.CiTrash onClick={()=>DeleteCategoryHandle()}  title='حذف التصنيف' className='text-red-500 cursor-pointer'/>
                        </div>
                </td>
              </tr>
  )
}
