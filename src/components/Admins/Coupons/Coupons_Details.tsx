'use client';

import { useState } from 'react';

const coupons = [
  {
    code: 'SAVE20',
    value: 20,
    type: 'percentage', // or 'fixed'
    expires: '2025-09-01',
    minOrder: 200,
    active: true,
  },
  {
    code: 'WELCOME50',
    value: 50,
    type: 'fixed',
    expires: '2025-08-10',
    minOrder: 100,
    active: false,
  },
];

export default function Coupons_Details() {
  const [data, setData] = useState(coupons);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">إدارة الكوبونات</h1>

      <div className="overflow-auto rounded shadow">
        <table className="min-w-full bg-white dark:bg-gray-900 text-right">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-3">الكود</th>
              <th className="p-3">القيمة</th>
              <th className="p-3">النوع</th>
              <th className="p-3">تاريخ الانتهاء</th>
              <th className="p-3">الحد الأدنى</th>
              <th className="p-3">الحالة</th>
              <th className="p-3">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coupon, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="p-3 font-semibold">{coupon.code}</td>
                <td className="p-3">
                  {coupon.type === 'percentage'
                    ? `${coupon.value}%`
                    : `${coupon.value} ج.م`}
                </td>
                <td className="p-3">
                  {coupon.type === 'percentage' ? 'نسبي' : 'ثابت'}
                </td>
                <td className="p-3">{coupon.expires}</td>
                <td className="p-3">{coupon.minOrder} ج.م</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-sm rounded text-white 
                    ${coupon.active ? 'bg-green-600' : 'bg-red-600'}`}
                  >
                    {coupon.active ? 'مفعل' : 'غير مفعل'}
                  </span>
                </td>
                <td className="p-3 space-x-2 rtl:space-x-reverse">
                  <button className="text-blue-600 hover:underline">تعديل</button>
                  <button className="text-yellow-600 hover:underline">
                    {coupon.active ? 'تعطيل' : 'تفعيل'}
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
