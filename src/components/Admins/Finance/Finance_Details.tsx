'use client';

const summary = {
  balance: 12000,
  sales: 25000,
  purchases: 8000,
  expenses: 5000,
  returns: 2000,
};

const transactions = [
  {
    date: '2025-08-03',
    type: 'إضافة',
    amount: 5000,
    description: 'مبيعات اليوم',
    by: 'الأدمن',
  },
  {
    date: '2025-08-02',
    type: 'سحب',
    amount: 1200,
    description: 'دفع مصاريف شحن',
    by: 'الأدمن',
  },
];

export default function Finance_Details() {
  const netProfit = summary.sales - (summary.expenses + summary.purchases + summary.returns);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">المالية</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-sm text-gray-500 mb-1">الرصيد بالخزنة</h2>
          <p className="text-xl font-bold text-green-600">{summary.balance} ج.م</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-sm text-gray-500 mb-1">إجمالي المبيعات</h2>
          <p className="text-xl font-bold">{summary.sales} ج.م</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-sm text-gray-500 mb-1">إجمالي المصروفات</h2>
          <p className="text-xl font-bold text-red-600">{summary.expenses} ج.م</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-sm text-gray-500 mb-1">صافي الربح</h2>
          <p className={`text-xl font-bold ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {netProfit} ج.م
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">آخر حركات الخزينة</h2>
        <div className="overflow-auto">
          <table className="min-w-full text-right">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="p-3">التاريخ</th>
                <th className="p-3">النوع</th>
                <th className="p-3">القيمة</th>
                <th className="p-3">الوصف</th>
                <th className="p-3">بواسطة</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trx, idx) => (
                <tr key={idx} className="border-b dark:border-gray-700">
                  <td className="p-3">{trx.date}</td>
                  <td className="p-3">{trx.type}</td>
                  <td className="p-3">{trx.amount} ج.م</td>
                  <td className="p-3">{trx.description}</td>
                  <td className="p-3">{trx.by}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
