'use client';

import { useState } from 'react';

export default function Add_Product_Details() {
  const [form, setForm] = useState({
    name: '',
    quantity: '',
    unit: '',
    minStock: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // هنا ممكن تبعت البيانات لـ API
    console.log('🟢 Product Added:', form);
    alert('✅ تم إضافة المنتج بنجاح!');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">إضافة منتج جديد 📦</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded shadow">
        <div>
          <label className="block mb-1 font-medium">اسم المنتج</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded dark:bg-gray-800"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">الكمية الابتدائية</label>
            <input
              name="quantity"
              type="number"
              value={form.quantity}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded dark:bg-gray-800"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">الوحدة</label>
            <input
              name="unit"
              type="text"
              value={form.unit}
              onChange={handleChange}
              required
              placeholder="مثلاً: طن / حزمة / عدد"
              className="w-full p-2 border rounded dark:bg-gray-800"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">الحد الأدنى للمخزون</label>
          <input
            name="minStock"
            type="number"
            value={form.minStock}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded dark:bg-gray-800"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">الوصف (اختياري)</label>
          <textarea
            name="description"
            rows={3}
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-800"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ➕ إضافة المنتج
        </button>
      </form>
    </div>
  );
}
