'use client';

import { useState } from 'react';

type ProductStock = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  minStock: number;
};

const initialData: ProductStock[] = [
  { id: '1', name: 'حديد 12 مم', quantity: 4, unit: 'طن', minStock: 5 },
  { id: '2', name: 'حديد 10 مم', quantity: 10, unit: 'طن', minStock: 5 },
  { id: '3', name: 'زوايا 4×4', quantity: 1, unit: 'حزمة', minStock: 3 },
];

export default function Inventory_Details() {
  const [stock, setStock] = useState(initialData);
  const [search, setSearch] = useState('');

  const filteredStock = stock.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const updateQuantity = (id: string, delta: number) => {
    setStock((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <div className="py-6 space-y-6 w-full">
      <h1 className="text-2xl font-bold mb-4">إدارة المخزون 🛠️</h1>

      {/* البحث */}
      <input
        type="text"
        placeholder="ابحث عن منتج..."
        className="w-full sm:w-1/2 p-2 border rounded dark:bg-gray-900"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* جدول */}
      <div className="bg-white dark:bg-gray-900 py-4 rounded shadow overflow-auto w-full">
        <table className="min-w-full text-right">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2">المنتج</th>
              <th className="p-2">الكمية</th>
              <th className="p-2">الوحدة</th>
              <th className="p-2">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredStock.map((item) => (
              <tr
                key={item.id}
                className={`border-b dark:border-gray-700 ${
                  item.quantity <= item.minStock ? 'bg-red-50 dark:bg-red-900' : ''
                }`}
              >
                <td className="p-2">{item.name}</td>
                <td className="p-2 font-bold">{item.quantity}</td>
                <td className="p-2">{item.unit}</td>
                <td className="p-2 space-x-2 rtl:space-x-reverse">
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 py-1 bg-green-600 text-white rounded"
                  >
                    + إضافة
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 py-1 bg-red-600 text-white rounded"
                  >
                    - خصم
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredStock.length === 0 && (
          <p className="text-center py-4 text-gray-500">لا يوجد نتائج.</p>
        )}
      </div>
    </div>
  );
}
