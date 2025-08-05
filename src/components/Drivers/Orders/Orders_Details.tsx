'use client';

import { useState } from 'react';

const allOrders = [
  {
    id: 'ORD5001',
    status: 'قيد التوصيل',
    date: '2025-08-03',
    total: '450 ج.م',
    address: 'القاهرة - مدينة نصر',
  },
  {
    id: 'ORD5002',
    status: 'تم التوصيل',
    date: '2025-08-02',
    total: '800 ج.م',
    address: 'الجيزة - فيصل',
  },
  {
    id: 'ORD5003',
    status: 'ملغي',
    date: '2025-08-01',
    total: '300 ج.م',
    address: 'طنطا - شارع البحر',
  },
];

export default function Orders_Details() {
  const [filter, setFilter] = useState('all');

  const filteredOrders = allOrders.filter((order) =>
    filter === 'all' ? true : order.status === filter
  );

  return (
    <div className="py-6 space-y-6 w-full">
      <h1 className="text-2xl font-bold mb-2">الطلبات المستلمة</h1>
      <p className="text-gray-600 dark:text-gray-400">تابع الطلبات المسندة إليك.</p>

      {/* فلترة */}
      <div className="space-x-2 rtl:space-x-reverse w-full">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded border ${
            filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800'
          }`}
        >
          الكل
        </button>
        <button
          onClick={() => setFilter('قيد التوصيل')}
          className={`px-3 py-1 rounded border ${
            filter === 'قيد التوصيل' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800'
          }`}
        >
          قيد التوصيل
        </button>
        <button
          onClick={() => setFilter('تم التوصيل')}
          className={`px-3 py-1 rounded border ${
            filter === 'تم التوصيل' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800'
          }`}
        >
          تم التوصيل
        </button>
        <button
          onClick={() => setFilter('ملغي')}
          className={`px-3 py-1 rounded border ${
            filter === 'ملغي' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800'
          }`}
        >
          ملغي
        </button>
      </div>

      {/* جدول الطلبات */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow overflow-auto">
        <table className="min-w-full text-right">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2">رقم الطلب</th>
              <th className="p-2">الحالة</th>
              <th className="p-2">التاريخ</th>
              <th className="p-2">الإجمالي</th>
              <th className="p-2">العنوان</th>
              <th className="p-2">إجراء</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b dark:border-gray-700">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.status}</td>
                <td className="p-2">{order.date}</td>
                <td className="p-2">{order.total}</td>
                <td className="p-2">{order.address}</td>
                <td className="p-2">
                  {order.status === 'قيد التوصيل' && (
                    <button className="text-blue-600 hover:underline">تم التوصيل</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredOrders.length === 0 && (
          <p className="text-center py-4 text-gray-500">لا توجد طلبات بهذه الحالة.</p>
        )}
      </div>
    </div>
  );
}
