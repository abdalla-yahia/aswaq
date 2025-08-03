'use client';

import { useState } from 'react';
import {
  FaEye,
  FaTruck,
  FaStar,
  FaTimesCircle,
  FaFilePdf,
} from 'react-icons/fa';

interface Order {
  id: number;
  number: string;
  date: string;
  status: 'قيد التجهيز' | 'قيد الشحن' | 'تم التسليم' | 'ملغي';
  total: string;
  items: number;
}

const orders: Order[] = [
  {
    id: 1,
    number: 'ORD-123456',
    date: '2025-08-01',
    status: 'قيد الشحن',
    total: '450 ج.م',
    items: 3,
  },
  {
    id: 2,
    number: 'ORD-654321',
    date: '2025-07-25',
    status: 'تم التسليم',
    total: '1200 ج.م',
    items: 5,
  },
  {
    id: 3,
    number: 'ORD-111111',
    date: '2025-07-30',
    status: 'قيد التجهيز',
    total: '300 ج.م',
    items: 2,
  },
];

export default function OrdersDetails() {
  const handleCancel = (id: number) => {
    alert(`تم طلب إلغاء الطلب رقم ${id}`);
  };

  const handleRate = (id: number) => {
    alert(`تم فتح تقييم الطلب رقم ${id}`);
  };

  const handleTrack = (id: number) => {
    alert(`تتبع الشحنة للطلب رقم ${id}`);
  };

  const handleInvoice = (id: number) => {
    alert(`تحميل الفاتورة للطلب رقم ${id}`);
  };

  const handleDetails = (id: number) => {
    alert(`عرض تفاصيل الطلب رقم ${id}`);
  };

  return (
    <div className="space-y-6 text-black">
      <h2 className="text-2xl font-bold text-foreground">📦 طلباتي</h2>

      <div className="grid gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between"
          >
            {/* تفاصيل الطلب */}
            <div>
              <p className="font-semibold">رقم الطلب: {order.number}</p>
              <p className="text-sm text-gray-500">📅 {order.date}</p>
              <p className="text-sm text-gray-500">🧾 المنتجات: {order.items}</p>
              <p className="text-sm text-gray-500">💵 الإجمالي: {order.total}</p>
            </div>

            {/* الأدوات */}
            <div className="flex flex-col gap-2 mt-4 md:mt-0 text-right">
              <span
                className={`inline-block px-2 py-1 text-sm rounded ${
                  order.status === 'قيد الشحن'
                    ? 'bg-yellow-100 text-yellow-700'
                    : order.status === 'تم التسليم'
                    ? 'bg-green-100 text-green-700'
                    : order.status === 'ملغي'
                    ? 'bg-red-100 text-red-600'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {order.status}
              </span>

              <div className="flex flex-wrap gap-2 justify-end text-sm">
                <button
                  onClick={() => handleDetails(order.id)}
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <FaEye /> التفاصيل
                </button>

                <button
                  onClick={() => handleInvoice(order.id)}
                  className="flex items-center gap-1 text-gray-700 hover:underline"
                >
                  <FaFilePdf /> طباعة الفاتورة
                </button>

                {order.status === 'قيد الشحن' && (
                  <button
                    onClick={() => handleTrack(order.id)}
                    className="flex items-center gap-1 text-indigo-600 hover:underline"
                  >
                    <FaTruck /> تتبع الشحنة
                  </button>
                )}

                {order.status === 'تم التسليم' && (
                  <button
                    onClick={() => handleRate(order.id)}
                    className="flex items-center gap-1 text-yellow-600 hover:underline"
                  >
                    <FaStar /> تقييم الطلب
                  </button>
                )}

                {order.status === 'قيد التجهيز' && (
                  <button
                    onClick={() => handleCancel(order.id)}
                    className="flex items-center gap-1 text-red-600 hover:underline"
                  >
                    <FaTimesCircle /> إلغاء الطلب
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
