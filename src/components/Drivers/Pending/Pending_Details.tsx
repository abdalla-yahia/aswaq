'use client';

const pendingOrders = [
  {
    id: 'ORD6001',
    address: 'الاسكندرية - سموحة',
    total: '520 ج.م',
    status: 'قيد التوصيل',
    date: '2025-08-03',
  },
  {
    id: 'ORD6002',
    address: 'الزقازيق - القومية',
    total: '410 ج.م',
    status: 'قيد التوصيل',
    date: '2025-08-02',
  },
];

export default function Pending_Details() {
  const handleDelivered = (id: string) => {
    // هنا تقدر تبعت API request لتحديث حالة الطلب
    alert(`تم توصيل الطلب رقم ${id}`);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-2">طلبات قيد التوصيل</h1>
      <p className="text-gray-600 dark:text-gray-400">تابع الطلبات التي لم يتم توصيلها بعد.</p>

      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow overflow-auto">
        <table className="min-w-full text-right">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2">رقم الطلب</th>
              <th className="p-2">العنوان</th>
              <th className="p-2">الإجمالي</th>
              <th className="p-2">التاريخ</th>
              <th className="p-2">إجراء</th>
            </tr>
          </thead>
          <tbody>
            {pendingOrders.map((order) => (
              <tr key={order.id} className="border-b dark:border-gray-700">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.address}</td>
                <td className="p-2">{order.total}</td>
                <td className="p-2">{order.date}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelivered(order.id)}
                    className="text-green-600 hover:underline"
                  >
                    تم التوصيل
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {pendingOrders.length === 0 && (
          <p className="text-center py-4 text-gray-500">لا توجد طلبات قيد التوصيل حاليًا.</p>
        )}
      </div>
    </div>
  );
}
