'use client';

import { useState } from 'react';
import {
  IoIosNotificationsOutline,
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
} from 'react-icons/io';

interface Notification {
  id: number;
  title: string;
  description: string;
  date: string;
  read: boolean;
  type: 'order' | 'promo' | 'review' | 'account';
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: 'تم شحن طلبك',
    description: 'تم شحن الطلب رقم ORD-123456 وجاري توصيله إليك.',
    date: 'منذ ساعتين',
    read: false,
    type: 'order',
  },
  {
    id: 2,
    title: 'عرض خاص 🔥',
    description: 'احصل على خصم 20% على أول طلب عند الدفع أونلاين.',
    date: 'منذ يوم واحد',
    read: false,
    type: 'promo',
  },
  {
    id: 3,
    title: 'تم تسليم الطلب',
    description: 'تم تسليم الطلب رقم ORD-654321 بنجاح.',
    date: 'منذ 3 أيام',
    read: true,
    type: 'order',
  },
];

export default function Notifications_Details() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="space-y-6 text-foreground w-full">
      <h2 className="text-2xl font-bold ">🔔 الإشعارات</h2>

      {notifications.length === 0 ? (
        <p className="text-foreground/50 text-center mt-10">لا توجد إشعارات حالياً.</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`flex items-start gap-4 p-4 rounded-lg shadow-sm border ${
                n.read ? 'bg-white' : 'bg-yellow-50'
              }`}
            >
              <div className="text-2xl text-blue-600 pt-1">
                <IoIosNotificationsOutline />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-black">{n.title}</h3>
                <p className="text-sm text-gray-600">{n.description}</p>
                <span className="text-xs text-gray-400">{n.date}</span>
              </div>

              <div className="flex flex-col items-end gap-2">
                {!n.read && (
                  <button
                    onClick={() => markAsRead(n.id)}
                    className="text-green-600 cursor-pointer hover:text-green-800 text-sm flex items-center gap-1"
                  >
                    <IoMdCheckmarkCircleOutline /> تم القراءة
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(n.id)}
                  className="text-red-600 cursor-pointer hover:text-red-800 text-sm flex items-center gap-1"
                >
                  <IoMdCloseCircleOutline /> حذف
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
