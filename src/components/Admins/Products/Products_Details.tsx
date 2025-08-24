"use client";

import { GET_ALL_PRODUCTS } from "@/Graphql/Schemas/ProducrQuery";
import { CreateProductType } from "@/types/types";
import { useQuery } from "@apollo/client";

import Product from "./Product";

export default function Products_Details() {
  const { data: AllProducts } = useQuery(GET_ALL_PRODUCTS, {
    fetchPolicy: "cache-and-network",
  })

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
            {AllProducts?.GetAllProducts?.products?.map((product: CreateProductType) => (
              <Product key={product?.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
