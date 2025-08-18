import { CreateProductType } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import * as icon from '@/utils/Icons/Icons';
import Edit_Product_Form from "@/utils/Forms/Product/Edit_Product_Form";
import { UpdateProduct } from "@/interfaces/productInterfaces";
import { useAppDispatch } from "@/libs/Store/Store";
import swal from "sweetalert";
import { deleteProduct } from "@/Features/Actions/productActions";

export default function Product({product}:{product:CreateProductType}) {
         const [isProductEdit,setIsProductEdit] =useState(false)
      const dispatch = useAppDispatch()
      //Delete Product
      const DeleteProductHandle = ()=>{
        swal({
            title: "هل أنت متأكد من الحذف؟",
            text: "بمجرد حذف المنتج سيتم مسحة نهائياً ولن تستطع إستعادة بياناته مرة أخرى!",
            icon: "warning",
            dangerMode: true,
            buttons:["إلغاء", "حذف"]
          })
        .then((willDelete) => {
          dispatch(deleteProduct(product?.id as string))
          if (willDelete) {
            swal("تم حذف المنتج", {
              icon: "success",
            });
            window.location.reload()
          } else {
            swal("أنت الأن في أمان لم يتم الحذف!");
          }
        });
      }
  return (
     <tr key={product.id} className="border-t">
                <td className="p-3">
                  <Image src={product?.image || "/placeholder.png"} alt={product?.title} width={50} height={50} className="rounded" />
                </td>
                <td className="p-3">{product?.title}</td>
                <td className="p-3">{product?.category?.name}</td>
                <td className="p-3">{product?.price} ج.م</td>
                <td className="p-3">{product?.quantity}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      product?.status === "ACTIVE"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {product.status === "ACTIVE" ? "نشط" : "غير نشط"}
                  </span>
                </td>
                <td className="p-3 space-x-2">
                  {/*Actions Of Product*/}
                      <div className="flex gap-2">
                        {
                          isProductEdit && <Edit_Product_Form product={product as UpdateProduct}/>
                        }
                        <icon.HiPencilSquare onClick={()=>setIsProductEdit(!isProductEdit)} title='تعديل التصنيف' className='text-green-500 cursor-pointer' />
                        <icon.CiTrash onClick={()=>DeleteProductHandle()}  title='حذف التصنيف' className='text-red-500 cursor-pointer'/>
                      </div>
                </td>
              </tr>
  )
}
