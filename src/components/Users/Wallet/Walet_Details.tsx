'use client';

import { useState } from 'react';
import { GiWallet } from 'react-icons/gi';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

interface Transaction {
  id: number;
  type: 'credit' | 'debit';
  description: string;
  date: string;
  amount: number;
}

const initialTransactions: Transaction[] = [
  {
    id: 1,
    type: 'credit',
    description: 'رد أموال لطلب ملغي ORD-789123',
    date: '2025-08-02',
    amount: 250,
  },
  {
    id: 2,
    type: 'debit',
    description: 'شراء من الطلب ORD-123456',
    date: '2025-08-01',
    amount: 450,
  },
  {
    id: 3,
    type: 'credit',
    description: 'كوبون ترحيبي',
    date: '2025-07-28',
    amount: 100,
  },
];

export default function Walet_Details() {
  const [transactions] = useState<Transaction[]>(initialTransactions);

  const balance = transactions.reduce(
    (total, t) => total + (t.type === 'credit' ? t.amount : -t.amount),
    0
  );

  return (
    <div className="space-y-6 text-foreground w-full">
      <h2 className="text-2xl font-bold flex  items-center gap-2">
        <GiWallet className="text-green-600" /> المحفظة أو الرصيد
      </h2>

      {/* الرصيد الحالي */}
      <div className="border shadow rounded-lg p-6 text-center">
        <p className="text-gray-600 mb-2">الرصيد الحالي</p>
        <h3 className="text-3xl font-bold text-green-700">{balance} ج.م</h3>
      </div>

      {/* سجل العمليات */}
      <div className="border shadow rounded-lg p-4">
        <h4 className="text-lg font-semibold mb-4">📋 سجل المعاملات</h4>

        {transactions.length === 0 ? (
          <p className="text-gray-500">لا توجد عمليات مسجلة بعد.</p>
        ) : (
          <div className="space-y-3">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between border-b pb-3 last:border-b-0"
              >
                <div>
                  <p className="font-medium">{tx.description}</p>
                  <p className="text-xs text-gray-400">{tx.date}</p>
                </div>
                <div
                  className={`font-bold text-sm flex items-center gap-1 ${
                    tx.type === 'credit' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {tx.type === 'credit' ? <FaArrowDown /> : <FaArrowUp />}
                  {tx.amount} ج.م
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
