'use client';

type Product = {
  id: string;
  name: string;
  quantity: number;
  minStock: number;
  unit: string;
};

const products: Product[] = [
  { id: '1', name: 'حديد 12 مم', quantity: 3, minStock: 5, unit: 'طن' },
  { id: '2', name: 'حديد 10 مم', quantity: 8, minStock: 5, unit: 'طن' },
  { id: '3', name: 'زوايا 4×4', quantity: 1, minStock: 3, unit: 'حزمة' },
];

export default function Low_Stock_Alerts_Details() {
  const lowStockProducts = products.filter((p) => p.quantity < p.minStock);

  return (
    <div className="py-6 space-y-6 w-full">
      <h1 className="text-2xl font-bold mb-2">🔔 تنبيهات نقص المخزون</h1>
      <p className="text-gray-600 dark:text-gray-400">هذه قائمة بالمنتجات التي تحتاج إلى إعادة التوريد.</p>

      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow overflow-auto w-full">
        {lowStockProducts.length > 0 ? (
          <table className="min-w-full text-right">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-2">المنتج</th>
                <th className="p-2">الكمية الحالية</th>
                <th className="p-2">الحد الأدنى</th>
                <th className="p-2">الوحدة</th>
                <th className="p-2">حالة</th>
              </tr>
            </thead>
            <tbody>
              {lowStockProducts.map((product) => (
                <tr key={product.id} className="border-b dark:border-gray-700 bg-red-50 dark:bg-red-900">
                  <td className="p-2 font-medium">{product.name}</td>
                  <td className="p-2">{product.quantity}</td>
                  <td className="p-2">{product.minStock}</td>
                  <td className="p-2">{product.unit}</td>
                  <td className="p-2 text-red-600 font-semibold">🚨 ناقص</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-green-600 font-bold">✅ كل المنتجات في مستوى آمن.</p>
        )}
      </div>
    </div>
  );
}
