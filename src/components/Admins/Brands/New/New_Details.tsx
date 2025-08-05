'use client';

import { useState } from 'react';

export default function New_Details() {
  const [form, setForm] = useState({
    name: '',
    logo: null as File | null,
    status: 'active',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm((prev) => ({ ...prev, logo: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🔜 لاحقًا: رفع الصورة لـ Cloudinary ثم إرسال البيانات للـ API
    console.log('بيانات البراند:', form);
  };

  return (
    <div className="py-6 max-w-xl mx-auto w-full">
      <h1 className="text-2xl font-bold mb-6">إضافة براند جديد</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded shadow"
      >
        <div>
          <label className="block mb-1 font-semibold">اسم البراند</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">الحالة</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="active">نشط</option>
            <option value="inactive">غير نشط</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">شعار البراند</label>
          <input type="file" accept="image/*" onChange={handleLogoChange} />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          إضافة البراند
        </button>
      </form>
    </div>
  );
}
