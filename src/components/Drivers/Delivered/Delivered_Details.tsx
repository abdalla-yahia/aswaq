'use client';

const deliveredOrders = [
  {
    id: 'ORD7001',
    address: 'المنيا - وسط البلد',
    total: '760 ج.م',
    status: 'تم التوصيل',
    date: '2025-08-01',
  },
  {
    id: 'ORD7002',
    address: 'الفيوم - دار الرماد',
    total: '980 ج.م',
    status: 'تم التوصيل',
    date: '2025-07-30',
  },
];

export default function Delivered_Details() {
  return (
    <div className="py-6 space-y-6 w-full">
      <h1 className="text-2xl font-bold mb-2">الطلبات التي تم تسليمها</h1>
      <p className="text-gray-600 dark:text-gray-400">عرض جميع الطلبات التي تم توصيلها بنجاح.</p>

      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow overflow-auto w-full">
        <table className="min-w-full text-right">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2">رقم الطلب</th>
              <th className="p-2">العنوان</th>
              <th className="p-2">الإجمالي</th>
              <th className="p-2">التاريخ</th>
            </tr>
          </thead>
          <tbody>
            {deliveredOrders.map((order) => (
              <tr key={order.id} className="border-b dark:border-gray-700">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.address}</td>
                <td className="p-2">{order.total}</td>
                <td className="p-2">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {deliveredOrders.length === 0 && (
          <p className="text-center py-4 text-gray-500">لا توجد طلبات تم تسليمها حتى الآن.</p>
        )}
      </div>
    </div>
  );
}
