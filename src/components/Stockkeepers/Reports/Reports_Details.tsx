'use client';

import { useState } from 'react';

type Movement = {
  id: string;
  date: string;
  product: string;
  type: 'إضافة' | 'خصم';
  quantity: number;
  unit: string;
  user: string;
};

const mockData: Movement[] = [
  {
    id: 'm1',
    date: '2025-08-03',
    product: 'حديد 12 مم',
    type: 'إضافة',
    quantity: 10,
    unit: 'طن',
    user: 'admin',
  },
  {
    id: 'm2',
    date: '2025-08-02',
    product: 'زوايا 4×4',
    type: 'خصم',
    quantity: 2,
    unit: 'حزمة',
    user: 'أمين المخزن',
  },
  {
    id: 'm3',
    date: '2025-08-01',
    product: 'حديد 10 مم',
    type: 'خصم',
    quantity: 1,
    unit: 'طن',
    user: 'أمين المخزن',
  },
];

export default function Reports_Details() {
  const [search, setSearch] = useState('');

  const filtered = mockData.filter((m) =>
    m.product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-6 space-y-6 w-full">
      <h1 className="text-2xl font-bold mb-2">📊 تقارير حركة المخزون</h1>
      <p className="text-gray-600 dark:text-gray-400">سجل شامل بكل عمليات الإضافة والخصم من المخزون.</p>

      {/* فلتر بالمنتج */}
      <input
        type="text"
        placeholder="🔍 ابحث باسم المنتج"
        className="w-full sm:w-1/2 p-2 border rounded dark:bg-gray-900"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* جدول */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow overflow-auto">
        <table className="min-w-full text-right">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2">التاريخ</th>
              <th className="p-2">المنتج</th>
              <th className="p-2">النوع</th>
              <th className="p-2">الكمية</th>
              <th className="p-2">الوحدة</th>
              <th className="p-2">المستخدم</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((m) => (
              <tr key={m.id} className="border-b dark:border-gray-700">
                <td className="p-2">{m.date}</td>
                <td className="p-2">{m.product}</td>
                <td className={`p-2 font-semibold ${m.type === 'إضافة' ? 'text-green-600' : 'text-red-600'}`}>
                  {m.type}
                </td>
                <td className="p-2">{m.quantity}</td>
                <td className="p-2">{m.unit}</td>
                <td className="p-2">{m.user}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <p className="text-center py-4 text-gray-500">لا توجد حركات تطابق البحث.</p>
        )}
      </div>
    </div>
  );
}
