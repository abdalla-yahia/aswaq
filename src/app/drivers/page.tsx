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
  { title: 'إجمالي الطلبات', value: 24, icon: '📦' },
  { title: 'قيد التوصيل', value: 6, icon: '🚚' },
  { title: 'تم التوصيل', value: 18, icon: '✅' },
  { title: 'الملغي / المرتجع', value: 2, icon: '❌' },
];

const chartData = [
  { day: 'السبت', delivered: 2 },
  { day: 'الأحد', delivered: 4 },
  { day: 'الإثنين', delivered: 3 },
  { day: 'الثلاثاء', delivered: 5 },
  { day: 'الأربعاء', delivered: 1 },
  { day: 'الخميس', delivered: 2 },
  { day: 'الجمعة', delivered: 4 },
];

const assignedOrders = [
  { id: 'ORD5001', address: 'القاهرة - مدينة نصر', status: 'قيد التوصيل', date: '2025-08-03' },
  { id: 'ORD5002', address: 'الجيزة - فيصل', status: 'تم التوصيل', date: '2025-08-02' },
  { id: 'ORD5003', address: 'المنصورة - المشاية', status: 'قيد التوصيل', date: '2025-08-01' },
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

export default function DriverDashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-2">لوحة تحكم الدليفري 🚚</h1>
      <p className="text-gray-600 dark:text-gray-400">مرحبًا، إليك ملخص أداءك خلال الأسبوع الحالي.</p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">عدد الطلبات التي تم توصيلها خلال الأسبوع</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="delivered" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Latest Orders */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">الطلبات الحالية</h2>
        <div className="overflow-auto">
          <table className="min-w-full text-right">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-2">رقم الطلب</th>
                <th className="p-2">العنوان</th>
                <th className="p-2">الحالة</th>
                <th className="p-2">التاريخ</th>
              </tr>
            </thead>
            <tbody>
              {assignedOrders.map((order) => (
                <tr key={order.id} className="border-b dark:border-gray-700">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.address}</td>
                  <td className="p-2">{order.status}</td>
                  <td className="p-2">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
