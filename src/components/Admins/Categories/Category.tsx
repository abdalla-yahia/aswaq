import { useState } from 'react';
import Image from 'next/image';
import * as icon from '@/utils/Icons/Icons';
import Edit_Category_Form from '@/utils/Forms/Category/Edit_Category_Form';
import { CreateCategory, UpdateCategory } from '@/types/types';
import { useAppDispatch } from '@/libs/Store/Store';
import { deleteCategory } from '@/Features/Actions/categoryActions';
import swal from 'sweetalert';

export default function Category({cat}:{cat:CreateCategory}) {
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
            dispatch(deleteCategory(cat?.id as string))
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
    <tr key={cat?.id} className="border-b dark:border-gray-700">
                <td className="p-3">
                  <Image src={cat?.image as string} alt={cat?.name} width={50} height={50} className="rounded" />
                </td>
                <td className="p-3 font-medium">{cat?.name}</td>
                <td className="p-3">{cat?.products?.length}</td>
                <td className="p-3 text-right">{cat?.description}</td>
                <td className="p-3 space-x-2 rtl:space-x-reverse">
                  {/*Actions Of Category*/}
                  <div className="flex gap-2">
                    {
                      isCategoryEdit && <Edit_Category_Form cat={cat as UpdateCategory}/>
                    }
                    <icon.HiPencilSquare onClick={()=>setIsCategoryEdit(!isCategoryEdit)} title='تعديل التصنيف' className='text-green-500 cursor-pointer' />
                    <icon.CiTrash onClick={()=>DeleteCategoryHandle()}  title='حذف التصنيف' className='text-red-500 cursor-pointer'/>
                  </div>
                </td>
              </tr>
  )
}
