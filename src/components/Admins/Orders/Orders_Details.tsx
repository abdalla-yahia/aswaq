
'use client';

import { useState } from 'react';

const orders = [
  {
    id: 101,
    customer: 'أحمد علي',
    itemsCount: 3,
    total: 450,
    payment: 'كاش',
    status: 'قيد المعالجة',
    date: '2025-08-03',
  },
  {
    id: 102,
    customer: 'سارة محمود',
    itemsCount: 1,
    total: 150,
    payment: 'Visa',
    status: 'مكتمل',
    date: '2025-08-02',
  },
];

export default function Orders_Details() {
  const [data, setData] = useState(orders);

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">إدارة الطلبات</h1>

      <div className="overflow-auto rounded shadow">
        <table className="min-w-full bg-white dark:bg-gray-900">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-right">
              <th className="p-3">رقم</th>
              <th className="p-3">العميل</th>
              <th className="p-3">المنتجات</th>
              <th className="p-3">الإجمالي</th>
              <th className="p-3">الدفع</th>
              <th className="p-3">الحالة</th>
              <th className="p-3">التاريخ</th>
              <th className="p-3">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.id} className="border-b dark:border-gray-700">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.itemsCount} منتج</td>
                <td className="p-3">{order.total} ج.م</td>
                <td className="p-3">{order.payment}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-sm text-white 
                    ${order.status === 'مكتمل' ? 'bg-green-500' :
                      order.status === 'قيد الشحن' ? 'bg-yellow-500' :
                      order.status === 'ملغي' ? 'bg-red-500' :
                      'bg-blue-500'}`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-3">{order.date}</td>
                <td className="p-3 space-x-2 rtl:space-x-reverse">
                  <button className="text-blue-600 hover:underline">تفاصيل</button>
                  <button className="text-green-600 hover:underline">تحديث الحالة</button>
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
