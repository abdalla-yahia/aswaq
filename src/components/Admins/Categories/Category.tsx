import { useState } from 'react';
import Image from 'next/image';
import * as icon from '@/utils/Icons/Icons';
import Edit_Category_Form from '@/utils/Forms/Edit_Category_Form';
import { CreateCategory, UpdateCategory } from '@/types/types';

export default function Category({cat}:{cat:CreateCategory}) {
      const [isCategoryEdit,setIsCategoryEdit] =useState(false)
    
  return (
    <tr key={cat?.id} className="border-b dark:border-gray-700">
                <td className="p-3">
                  <Image src={cat?.image as string} alt={cat?.name} width={50} height={50} className="rounded" />
                </td>
                <td className="p-3 font-medium">{cat?.name}</td>
                <td className="p-3">{cat?.products?.length}</td>
                <td className="p-3 text-right">{cat?.description}</td>
                <td className="p-3 space-x-2 rtl:space-x-reverse">
                  <div className="flex gap-2">
                    {
                      isCategoryEdit && <Edit_Category_Form cat={cat as UpdateCategory}/>
                    }
                    <icon.HiPencilSquare onClick={()=>setIsCategoryEdit(!isCategoryEdit)} title='تعديل التصنيف' className='text-green-500 cursor-pointer' />
                    <icon.CiTrash  title='حذف التصنيف' className='text-red-500 cursor-pointer'/>
                  </div>
                </td>
              </tr>
  )
}
