'use client';

import { useState } from 'react';
import { RiCoupon3Fill } from 'react-icons/ri';
import { FaCopy, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface Coupon {
  id: number;
  code: string;
  discountType: 'percent' | 'amount';
  discountValue: number;
  expiresAt: string;
  status: 'active' | 'used' | 'expired';
}

const initialCoupons: Coupon[] = [
  {
    id: 1,
    code: 'WELCOME20',
    discountType: 'percent',
    discountValue: 20,
    expiresAt: '2025-08-31',
    status: 'active',
  },
  {
    id: 2,
    code: 'SAVE50',
    discountType: 'amount',
    discountValue: 50,
    expiresAt: '2025-07-30',
    status: 'used',
  },
  {
    id: 3,
    code: 'EXPIRED10',
    discountType: 'amount',
    discountValue: 10,
    expiresAt: '2025-06-30',
    status: 'expired',
  },
];

export default function Coupons_Details() {
  const [coupons] = useState<Coupon[]>(initialCoupons);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`تم نسخ الكود: ${code}`);
  };

  const getStatusStyle = (status: Coupon['status']) => {
    switch (status) {
      case 'active':
        return 'border-green-600 bg-green-50';
      case 'used':
        return 'border-yellow-500 bg-yellow-50';
      case 'expired':
        return 'border-red-500 bg-red-50';
    }
  };

  const getStatusLabel = (status: Coupon['status']) => {
    switch (status) {
      case 'active':
        return 'نشط';
      case 'used':
        return 'تم استخدامه';
      case 'expired':
        return 'منتهي';
    }
  };

  const getDiscountLabel = (coupon: Coupon) =>
    coupon.discountType === 'percent'
      ? `% خصم ${coupon.discountValue}`
      : `خصم ${coupon.discountValue} ج.م`;

  return (
    <div className="space-y-6 w-full">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <RiCoupon3Fill className="text-purple-600" /> الكوبونات
      </h2>

      {coupons.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">لا توجد كوبونات حالياً.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className={`rounded-lg border-l-4 shadow-sm p-4 ${getStatusStyle(
                coupon.status
              )}`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg text-purple-700">{coupon.code}</h3>
                <button
                  onClick={() => copyToClipboard(coupon.code)}
                  className="text-sm text-gray-600 hover:text-black flex items-center gap-1"
                >
                  <FaCopy /> نسخ
                </button>
              </div>

              <p className="text-sm text-gray-700 mb-1">{getDiscountLabel(coupon)}</p>
              <p className="text-xs text-gray-500">ينتهي في: {coupon.expiresAt}</p>

              <div className="mt-2 flex items-center gap-1 text-sm font-medium">
                {coupon.status === 'active' && (
                  <FaCheckCircle className="text-green-600" />
                )}
                {coupon.status === 'used' && (
                  <FaCheckCircle className="text-yellow-600" />
                )}
                {coupon.status === 'expired' && (
                  <FaTimesCircle className="text-red-600" />
                )}
                <span
                  className={`${
                    coupon.status === 'active'
                      ? 'text-green-600'
                      : coupon.status === 'used'
                      ? 'text-yellow-600'
                      : 'text-red-600'
                  }`}
                >
                  {getStatusLabel(coupon.status)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
