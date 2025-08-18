"use client";

import { GET_ALL_PRODUCTS } from "@/Graphql/Schemas/ProducrQuery";
import { CreateProductType } from "@/types/types";
import { useQuery } from "@apollo/client";
import Image from "next/image";


export default function Products_Details() {
const {data:AllProducts} = useQuery(GET_ALL_PRODUCTS,{
  fetchPolicy: "network-only",
})
// console.log(AllProducts?.GetAllProducts?.products)
  return (
    <div className="py-6 space-y-6 text-foreground w-full">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold">إدارة المنتجات</h1>
      </div>

      <div className="overflow-x-auto  rounded-lg shadow border border-gray-200">
        <table className="min-w-full text-sm text-right">
          <thead className="bg-accent ">
            <tr>
              <th className="p-3">صورة المنتج</th>
              <th className="p-3">اسم المنتج</th>
              <th className="p-3">التصنيف</th>
              <th className="p-3">السعر</th>
              <th className="p-3">الكمية</th>
              <th className="p-3">الحالة</th>
              <th className="p-3">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {AllProducts?.GetAllProducts?.products?.map((product:CreateProductType) => (
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
                  <button className="text-blue-600 hover:underline">تعديل</button>
                  <button
                    className="text-red-600 hover:underline"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
