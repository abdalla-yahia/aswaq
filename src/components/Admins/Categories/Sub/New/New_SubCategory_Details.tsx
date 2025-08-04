'use client';

import { useState } from 'react';

const mainCategories = [
  { id: '1', name: 'أحذية' },
  { id: '2', name: 'ملابس' },
  { id: '3', name: 'إكسسوارات' },
];

export default function New_SubCategory_Details() {
  const [form, setForm] = useState({
    name: '',
    image: null as File | null,
    parentId: '',
    status: 'active',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🔜 لاحقًا: رفع الصورة إلى Cloudinary + إرسال البيانات للـ API
    console.log('بيانات التصنيف الفرعي:', form);
  };

  return (
    <div className="p-6 max-w-xl mx-auto w-full">
      <h1 className="text-2xl font-bold mb-6">إضافة تصنيف فرعي جديد</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded shadow">
        <div>
          <label className="block mb-1 font-semibold">اسم التصنيف الفرعي</label>
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
          <label className="block mb-1 font-semibold">التصنيف الرئيسي</label>
          <select
            name="parentId"
            value={form.parentId}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">اختر تصنيف رئيسي</option>
            {mainCategories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
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
          <label className="block mb-1 font-semibold">صورة التصنيف</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          إضافة التصنيف الفرعي
        </button>
      </form>
    </div>
  );
}
