'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const stats = [
  { title: 'عدد الطلبات', value: 7, icon: '📦' },
  { title: 'الرصيد بالمحفظة', value: '350 ج.م', icon: '💰' },
  { title: 'المفضلة', value: 5, icon: '❤️' },
  { title: 'تقييماتي', value: 3, icon: '⭐' },
];

const chartData = [
  { month: 'مارس', amount: 500 },
  { month: 'أبريل', amount: 800 },
  { month: 'مايو', amount: 1000 },
  { month: 'يونيو', amount: 700 },
  { month: 'يوليو', amount: 1200 },
  { month: 'أغسطس', amount: 900 },
];

const lastOrders = [
  { id: 'ORD3001', date: '2025-08-01', status: 'تم التوصيل', total: '450 ج.م' },
  { id: 'ORD3002', date: '2025-07-28', status: 'قيد التنفيذ', total: '320 ج.م' },
  { id: 'ORD3003', date: '2025-07-25', status: 'ملغي', total: '250 ج.م' },
];

function UserStatCard({ title, value, icon }: { title: string; value: string | number; icon: string }) {
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

export default function UserHomePage() {
  return (
    <div className="p-6 space-y-6 w-full">
      <h1 className="text-2xl font-bold">مرحبًا بك 👋</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">هذا هو حسابك الشخصي، يمكنك متابعة كل شيء من هنا.</p>

      {/* كروت المعلومات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <UserStatCard key={i} {...stat} />
        ))}
      </div>

      {/* رسم بياني */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">مشترياتك خلال الأشهر الماضية</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* آخر الطلبات */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">آخر الطلبات</h2>
        <div className="overflow-auto">
          <table className="min-w-full text-right">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-2">رقم الطلب</th>
                <th className="p-2">التاريخ</th>
                <th className="p-2">الحالة</th>
                <th className="p-2">الإجمالي</th>
              </tr>
            </thead>
            <tbody>
              {lastOrders.map((order) => (
                <tr key={order.id} className="border-b dark:border-gray-700">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.date}</td>
                  <td className="p-2">{order.status}</td>
                  <td className="p-2">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
