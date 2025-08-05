'use client';

import Image from 'next/image';
import { useState } from 'react';

const categories = [
  {
    id: 1,
    title: 'ملابس',
    image: '/images/categories/clothes.jpg',
    productsCount: 24,
    active: true,
  },
  {
    id: 2,
    title: 'أحذية',
    image: '/images/categories/shoes.jpg',
    productsCount: 15,
    active: false,
  },
];

export default function Categories_Details() {
  const [data, setData] = useState(categories);

  return (
    <div className="py-6 w-full">
      <h1 className="text-2xl font-bold mb-6">إدارة التصنيفات</h1>

      <div className="overflow-auto rounded shadow">
        <table className="min-w-full bg-white dark:bg-gray-900 text-right">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-3">الصورة</th>
              <th className="p-3">الاسم</th>
              <th className="p-3">عدد المنتجات</th>
              <th className="p-3">الحالة</th>
              <th className="p-3">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {data.map((cat) => (
              <tr key={cat.id} className="border-b dark:border-gray-700">
                <td className="p-3">
                  <Image src={cat.image} alt={cat.title} width={50} height={50} className="rounded" />
                </td>
                <td className="p-3 font-medium">{cat.title}</td>
                <td className="p-3">{cat.productsCount}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-sm rounded text-white 
                    ${cat.active ? 'bg-green-600' : 'bg-red-600'}`}
                  >
                    {cat.active ? 'نشط' : 'غير نشط'}
                  </span>
                </td>
                <td className="p-3 space-x-2 rtl:space-x-reverse">
                  <button className="text-blue-600 hover:underline">تعديل</button>
                  <button className="text-yellow-600 hover:underline">
                    {cat.active ? 'تعطيل' : 'تفعيل'}
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
