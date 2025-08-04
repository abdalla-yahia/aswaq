'use client';

import { useState } from 'react';

export default function New_Product_Details() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    oldPrice: '',
    category: '',
    quantity: '',
    status: 'active',
    images: [] as File[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm((prev) => ({ ...prev, images: Array.from(e?.target?.files as Iterable<File> | ArrayLike<File>) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // هنا ممكن ترفع الصور لـ Cloudinary أولًا ثم ترسل البيانات كلها للـ API

    console.log('Form submitted:', form);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">إضافة منتج جديد</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded shadow">
        <div>
          <label className="block mb-1 font-semibold">اسم المنتج</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>

        <div>
          <label className="block mb-1 font-semibold">الوصف</label>
          <textarea name="description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded h-24" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">السعر</label>
            <input type="number" name="price" value={form.price} onChange={handleChange} className="w-full border p-2 rounded" required />
          </div>
          <div>
            <label className="block mb-1 font-semibold">السعر قبل الخصم</label>
            <input type="number" name="oldPrice" value={form.oldPrice} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-semibold">التصنيف</label>
          <select name="category" value={form.category} onChange={handleChange} className="w-full bg-accent border p-2 rounded">
            <option value="">اختر تصنيف</option>
            <option value="ملابس">ملابس</option>
            <option value="أحذية">أحذية</option>
            <option value="إكسسوارات">إكسسوارات</option>
            {/* لاحقًا نجيبهم من API */}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">الكمية في المخزون</label>
          <input type="number" name="quantity" value={form.quantity} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">الحالة</label>
          <select name="status" value={form.status} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="active">نشط</option>
            <option value="inactive">غير نشط</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">صور المنتج</label>
          <input type="file" multiple accept="image/*" onChange={handleImages} />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          إضافة المنتج
        </button>
      </form>
    </div>
  );
}
