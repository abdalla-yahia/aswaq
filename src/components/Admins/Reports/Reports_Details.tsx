'use client';

import { useState } from 'react';

const dummyReports = {
  income: 15000,
  expenses: 7000,
  netProfit: 8000,
  dailySales: 1200,
  topProducts: [
    { name: 'قميص رجالي', sales: 30 },
    { name: 'حذاء رياضي', sales: 25 },
    { name: 'فستان نسائي', sales: 20 },
  ]
};

export default function Reports_Details() {
  const [report] = useState(dummyReports);

  return (
    <div className="py-6 w-full">
      <h1 className="text-2xl font-bold mb-6">التقارير المالية</h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">إجمالي الإيرادات</h2>
          <p className="text-green-600 text-xl font-bold">{report.income} ج.م</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">إجمالي المصروفات</h2>
          <p className="text-red-600 text-xl font-bold">{report.expenses} ج.م</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">صافي الربح</h2>
          <p className="text-blue-600 text-xl font-bold">{report.netProfit} ج.م</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">المبيعات اليومية</h2>
        <p className="text-xl">{report.dailySales} ج.م</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">أعلى المنتجات مبيعًا</h2>
        <ul className="space-y-2">
          {report.topProducts.map((product, idx) => (
            <li key={idx} className="flex justify-between border-b pb-2">
              <span>{product.name}</span>
              <span>{product.sales} عملية بيع</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
