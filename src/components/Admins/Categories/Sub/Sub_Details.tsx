'use client';

import { useState } from 'react';

const subcategories = [
  {
    id: 1,
    name: 'أحذية رياضية',
    parent: 'أحذية',
    productsCount: 12,
    active: true,
  },
  {
    id: 2,
    name: 'تيشرتات',
    parent: 'ملابس',
    productsCount: 18,
    active: false,
  },
];

export default function Sub_Details() {
  const [data, setData] = useState(subcategories);

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-6">التصنيفات الفرعية</h1>

      <div className="overflow-auto rounded shadow">
        <table className="min-w-full bg-white dark:bg-gray-900 text-right">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-3">الاسم الفرعي</th>
              <th className="p-3">التصنيف الرئيسي</th>
              <th className="p-3">عدد المنتجات</th>
              <th className="p-3">الحالة</th>
              <th className="p-3">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {data.map((sub) => (
              <tr key={sub.id} className="border-b dark:border-gray-700">
                <td className="p-3 font-medium">{sub.name}</td>
                <td className="p-3">{sub.parent}</td>
                <td className="p-3">{sub.productsCount}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-sm rounded text-white 
                    ${sub.active ? 'bg-green-600' : 'bg-red-600'}`}
                  >
                    {sub.active ? 'نشط' : 'غير نشط'}
                  </span>
                </td>
                <td className="p-3 space-x-2 rtl:space-x-reverse">
                  <button className="text-blue-600 hover:underline">تعديل</button>
                  <button className="text-yellow-600 hover:underline">
                    {sub.active ? 'تعطيل' : 'تفعيل'}
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
