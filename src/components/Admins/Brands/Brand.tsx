import { useState } from 'react';
import Image from 'next/image';
import * as icon from '@/utils/Icons/Icons';
import Edit_Brand_Form from '@/utils/Forms/Brand/Edit_Brand_Form';
import { CreateBrand, UpdateBrand } from '@/types/types';
import { useAppDispatch } from '@/libs/Store/Store';
import { deleteBrand } from '@/Features/Actions/brandActions';
import swal from 'sweetalert';

export default function Brand({brand}:{brand:CreateBrand}) {
      const [isBrandEdit,setIsBrandEdit] =useState(false)
      const dispatch = useAppDispatch()
      //Delete Brand
      const DeleteBrandHandle = ()=>{
        swal({
            title: "هل أنت متأكد من الحذف؟",
            text: "بمجرد حذف البراند سيتم مسحة نهائياً ولن تستطع إستعادة بياناته مرة أخرى!",
            icon: "warning",
            dangerMode: true,
            buttons:["إلغاء", "حذف"]
          })
        .then((willDelete) => {
          if (willDelete) {
            dispatch(deleteBrand(brand?.id as string))
            swal("تم حذف البراند", {
              icon: "success",
            });
            window.location.reload()
          } else {
            swal("أنت الأن في أمان لم يتم الحذف!");
          }
        });
      }
  return (
    <tr key={brand?.id} className="border-b dark:border-gray-700">
                <td className="p-3">
                  <Image src={brand?.logo as string} alt={brand?.name} width={50} height={50} className="rounded" />
                </td>
                <td className="p-3 font-medium">{brand?.name}</td>
                <td className="p-3">{brand?.products?.length}</td>
                <td className="p-3 text-right">{brand?.description}</td>
                <td className="p-3 space-x-2 rtl:space-x-reverse">
                  {/*Actions Of Brand*/}
                  <div className="flex gap-2">
                    {
                      isBrandEdit && <Edit_Brand_Form brand={brand as UpdateBrand}/>
                    }
                    <icon.HiPencilSquare onClick={()=>setIsBrandEdit(!isBrandEdit)} title='تعديل البراند' className='text-green-500 cursor-pointer' />
                    <icon.CiTrash onClick={()=>DeleteBrandHandle()}  title='حذف البراند' className='text-red-500 cursor-pointer'/>
                  </div>
                </td>
              </tr>
  )
}
