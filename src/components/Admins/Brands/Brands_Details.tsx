'use client';

import Image from 'next/image';
import { useState } from 'react';

const brands = [
  {
    id: 1,
    name: 'Nike',
    logo: '/images/brands/nike.png',
    productsCount: 42,
    active: true,
  },
  {
    id: 2,
    name: 'Adidas',
    logo: '/images/brands/adidas.png',
    productsCount: 35,
    active: false,
  },
];

export default function Brands_Details() {
  const [data, setData] = useState(brands);

  return (
    <div className="py-6  w-full">
      <h1 className="text-2xl font-bold mb-6">إدارة البراندات</h1>

      <div className="overflow-auto rounded shadow">
        <table className="min-w-full bg-white dark:bg-gray-900 text-right">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-3">الشعار</th>
              <th className="p-3">الاسم</th>
              <th className="p-3">عدد المنتجات</th>
              <th className="p-3">الحالة</th>
              <th className="p-3">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {data.map((brand) => (
              <tr key={brand.id} className="border-b dark:border-gray-700">
                <td className="p-3">
                  <Image src={brand.logo} alt={brand.name} width={50} height={50} className="rounded" />
                </td>
                <td className="p-3 font-medium">{brand.name}</td>
                <td className="p-3">{brand.productsCount}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-sm rounded text-white 
                    ${brand.active ? 'bg-green-600' : 'bg-red-600'}`}
                  >
                    {brand.active ? 'نشط' : 'غير نشط'}
                  </span>
                </td>
                <td className="p-3 space-x-2 rtl:space-x-reverse">
                  <button className="text-blue-600 hover:underline">تعديل</button>
                  <button className="text-yellow-600 hover:underline">
                    {brand.active ? 'تعطيل' : 'تفعيل'}
                  </button>
                  <button className="text-red-600 hover:underline">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
