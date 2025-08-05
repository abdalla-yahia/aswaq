"use client";

import { useState } from "react";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  status: "active" | "inactive";
};

export default function Products_Details() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "حذاء رياضي",
      category: "الأحذية",
      price: 599,
      quantity: 10,
      status: "active",
    },
    {
      id: "2",
      name: "قميص رجالي",
      category: "الملابس",
      price: 299,
      quantity: 0,
      status: "inactive",
    },
  ]);

  const handleDelete = (id: string) => {
    if (confirm("هل أنت متأكد من حذف المنتج؟")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="py-6 space-y-6 text-foreground w-full">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold">إدارة المنتجات</h1>
        <button className="bg-blue-600 text-foreground px-4 py-2 rounded hover:bg-blue-700">
          + إضافة منتج
        </button>
      </div>

      <div className="overflow-x-auto  rounded-lg shadow border border-gray-200">
        <table className="min-w-full text-sm text-right">
          <thead className="bg-accent ">
            <tr>
              <th className="p-3">اسم المنتج</th>
              <th className="p-3">التصنيف</th>
              <th className="p-3">السعر</th>
              <th className="p-3">الكمية</th>
              <th className="p-3">الحالة</th>
              <th className="p-3">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">{product.price} ج.م</td>
                <td className="p-3">{product.quantity}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      product.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {product.status === "active" ? "نشط" : "غير نشط"}
                  </span>
                </td>
                <td className="p-3 space-x-2">
                  <button className="text-blue-600 hover:underline">تعديل</button>
                  <button
                    onClick={() => handleDelete(product.id)}
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
