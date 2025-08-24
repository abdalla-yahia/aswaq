'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '@/Graphql/Schemas/UserQuery';

const stats = [
  { title: 'طلبات اليوم', value: 12, icon: '🛒' },
  { title: 'مستخدمين نشطين', value: 340, icon: '👥' },
  { title: 'عدد المنتجات', value: 129, icon: '📦' },
  { title: 'مبيعات اليوم', value: '4,300 ج.م', icon: '💰' },
];

const salesData = [
  { day: 'السبت', sales: 1000 },
  { day: 'الأحد', sales: 1500 },
  { day: 'الإثنين', sales: 2300 },
  { day: 'الثلاثاء', sales: 1800 },
  { day: 'الأربعاء', sales: 2800 },
  { day: 'الخميس', sales: 3500 },
  { day: 'الجمعة', sales: 2200 },
];

const lastOrders = [
  { id: 'ORD123', user: 'أحمد علي', total: '450 ج.م', status: 'قيد التنفيذ', date: '2025-08-04' },
  { id: 'ORD124', user: 'منى محمد', total: '800 ج.م', status: 'تم التوصيل', date: '2025-08-03' },
  { id: 'ORD125', user: 'خالد سمير', total: '1200 ج.م', status: 'ملغي', date: '2025-08-03' },
  { id: 'ORD126', user: 'ياسر عبدو', total: '300 ج.م', status: 'قيد التنفيذ', date: '2025-08-02' },
  { id: 'ORD127', user: 'سارة جمال', total: '950 ج.م', status: 'تم التوصيل', date: '2025-08-01' },
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

export default function AdminDashboardPage() {
  const { data } = useQuery(GET_ME, {
    fetchPolicy: 'cache-and-network',
  })
  return (
    <div className="py-6 space-y-6 w-full">
      <h1 className="text-2xl font-bold">لوحة تحكم المسؤول {data?.me?.name}</h1>

      {/* الكروت */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* الرسم البياني */}
      <div className="bg-white dark:bg-gray-900 py-4 rounded shadow w-full">
        <h2 className="text-xl font-semibold mb-4">مبيعات الأسبوع</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* آخر الطلبات */}
      <div className="bg-white dark:bg-gray-900 py-4 rounded shadow w-full">
        <h2 className="text-xl font-semibold mb-4">آخر الطلبات</h2>
        <div className="overflow-auto">
          <table className="min-w-full text-right">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-2">رقم الطلب</th>
                <th className="p-2">المستخدم</th>
                <th className="p-2">الإجمالي</th>
                <th className="p-2">الحالة</th>
                <th className="p-2">التاريخ</th>
              </tr>
            </thead>
            <tbody>
              {lastOrders.map((order) => (
                <tr key={order.id} className="border-b dark:border-gray-700">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.user}</td>
                  <td className="p-2">{order.total}</td>
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
