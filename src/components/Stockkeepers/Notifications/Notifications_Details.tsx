'use client';

type Notification = {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
};

const notifications: Notification[] = [
  {
    id: 'notif1',
    title: '🔔 تنبيه نقص مخزون',
    message: 'المخزون من حديد 12 مم أقل من الحد الأدنى.',
    date: '2025-08-04',
    read: false,
  },
  {
    id: 'notif2',
    title: '📦 توريد جديد',
    message: 'تم إضافة 10 طن من حديد 16 مم إلى المخزن.',
    date: '2025-08-03',
    read: true,
  },
  {
    id: 'notif3',
    title: '❌ خصم من المخزون',
    message: 'تم خصم 2 طن من زوايا 4×4 لتوصيل داخلي.',
    date: '2025-08-02',
    read: false,
  },
];

export default function Notifications_Details() {
  return (
    <div className="py-6 space-y-6 w-full">
      <h1 className="text-2xl font-bold mb-2">الإشعارات 🔔</h1>
      <p className="text-gray-600 dark:text-gray-400">تابع كل التحديثات المتعلقة بالمخزون.</p>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`p-4 rounded shadow border ${
              notif.read ? 'bg-white dark:bg-gray-900' : 'bg-yellow-50 dark:bg-yellow-900'
            }`}
          >
            <div className="flex justify-between items-center mb-1">
              <h2 className="font-semibold text-lg">{notif.title}</h2>
              <span className="text-sm text-gray-500">{notif.date}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{notif.message}</p>
          </div>
        ))}

        {notifications.length === 0 && (
          <p className="text-center text-gray-500">لا توجد إشعارات حالياً.</p>
        )}
      </div>
    </div>
  );
}
