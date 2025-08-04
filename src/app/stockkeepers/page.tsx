'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const stats = [
  { title: 'إجمالي المنتجات', value: 125, icon: '📦' },
  { title: 'مخزون منخفض', value: 8, icon: '⚠️' },
  { title: 'منتجات جديدة', value: 12, icon: '🆕' },
  { title: 'عدد الأصناف', value: 30, icon: '🗂️' },
];

const chartData = [
  { day: 'السبت', itemsIn: 30, itemsOut: 15 },
  { day: 'الأحد', itemsIn: 20, itemsOut: 22 },
  { day: 'الإثنين', itemsIn: 10, itemsOut: 8 },
  { day: 'الثلاثاء', itemsIn: 25, itemsOut: 20 },
  { day: 'الأربعاء', itemsIn: 15, itemsOut: 30 },
  { day: 'الخميس', itemsIn: 18, itemsOut: 12 },
  { day: 'الجمعة', itemsIn: 22, itemsOut: 17 },
];

const lowStock = [
  { name: 'حديد 12 مم', quantity: 4, unit: 'طن' },
  { name: 'حديد 10 مم', quantity: 2, unit: 'طن' },
  { name: 'زوايا', quantity: 1, unit: 'حزمة' },
];

function StatCard({ title, value, icon }: { title: string; value: string | number; icon: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded shadow flex items-center gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </div>
  );
}

export default function StockkeeperDashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">لوحة تحكم أمين المخزن 🏬</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">نظرة عامة على حالة المخزون.</p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">حركة المخزون خلال الأسبوع</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="itemsIn" stroke="#10b981" strokeWidth={3} name="الوارد" />
            <Line type="monotone" dataKey="itemsOut" stroke="#f97316" strokeWidth={3} name="المنصرف" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Low stock table */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">منتجات قرب نفادها</h2>
        <table className="min-w-full text-right">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2">المنتج</th>
              <th className="p-2">الكمية المتبقية</th>
              <th className="p-2">الوحدة</th>
            </tr>
          </thead>
          <tbody>
            {lowStock.map((item, i) => (
              <tr key={i} className="border-b dark:border-gray-700">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.quantity}</td>
                <td className="p-2">{item.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {lowStock.length === 0 && (
          <p className="text-center py-4 text-gray-500">كل المنتجات في مستوى آمن.</p>
        )}
      </div>
    </div>
  );
}
