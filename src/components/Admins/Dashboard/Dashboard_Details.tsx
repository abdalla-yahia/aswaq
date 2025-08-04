"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function  Dashboard_Details() {
  const stats = [
    { title: "عدد المستخدمين", value: "324" },
    { title: "عدد المنتجات", value: "120" },
    { title: "عدد الطلبات", value: "98" },
    { title: "إجمالي الإيرادات", value: "34,500 ج.م" },
  ];

  const lowStock = [
    { name: "منتج A", stock: 3 },
    { name: "منتج B", stock: 2 },
  ];

  const ordersPerDay = [
    { day: "السبت", orders: 5 },
    { day: "الأحد", orders: 8 },
    { day: "الإثنين", orders: 4 },
    { day: "الثلاثاء", orders: 10 },
    { day: "الأربعاء", orders: 7 },
    { day: "الخميس", orders: 12 },
    { day: "الجمعة", orders: 6 },
  ];

  const orderStatus = [
    { name: "مكتملة", value: 45 },
    { name: "قيد التنفيذ", value: 35 },
    { name: "ملغاة", value: 18 },
  ];

  const COLORS = ["#00C49F", "#FFBB28", "#FF4D4F"];

  return (
    <div className="p-6 space-y-8 text-foreground w-full">
      <h1 className="text-2xl font-bold text-foreground">لوحة التحكم</h1>

      {/* كروت الإحصائيات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className=" rounded-lg shadow p-4 border border-gray-200"
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <p className="text-2xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* الرسوم البيانية */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* حالات الطلبات */}
        <div className=" rounded-lg shadow p-4 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">حالات الطلبات</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={orderStatus}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                dataKey="value"
                label={({ name }) => name}
              >
                {orderStatus.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* الطلبات اليومية */}
        <div className=" rounded-lg shadow p-4 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">عدد الطلبات اليومية</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={ordersPerDay}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="orders" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* المنتجات منخفضة المخزون */}
      <div>
        <h2 className="text-lg font-semibold mb-2">منتجات منخفضة المخزون</h2>
        <div className="overflow-x-auto  rounded-lg shadow border border-gray-200">
          <table className="min-w-full text-sm text-right">
            <thead className="bg-accent">
              <tr>
                <th className="p-3">اسم المنتج</th>
                <th className="p-3">الكمية</th>
              </tr>
            </thead>
            <tbody>
              {lowStock.map((product, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3">{product.name}</td>
                  <td className="p-3">{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

 