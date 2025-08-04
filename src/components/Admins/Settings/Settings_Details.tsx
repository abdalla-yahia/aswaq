'use client';

import { useState } from 'react';

export default function Settings_Details() {
  const [form, setForm] = useState({
    storeName: '',
    phone: '',
    email: '',
    currency: 'EGP',
    language: 'ar',
    status: 'active',
    logo: null as File | null,
    maintenanceMessage: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    // 🔜 رفع الشعار إلى Cloudinary + إرسال القيم إلى API
    console.log('الإعدادات العامة:', form);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto w-full">
      <h1 className="text-2xl font-bold mb-6">الإعدادات العامة</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded shadow">
        <div>
          <label className="block mb-1 font-semibold">اسم المتجر</label>
          <input
            type="text"
            name="storeName"
            value={form.storeName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">رقم التواصل</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">العملة</label>
          <select name="currency" value={form.currency} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="EGP">جنيه مصري</option>
            <option value="SAR">ريال سعودي</option>
            <option value="USD">دولار أمريكي</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">اللغة الافتراضية</label>
          <select name="language" value={form.language} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="ar">العربية</option>
            <option value="en">الإنجليزية</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">الحالة</label>
          <select name="status" value={form.status} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="active">مفعل</option>
            <option value="maintenance">إغلاق للصيانة</option>
          </select>
        </div>

        {form.status === 'maintenance' && (
          <div>
            <label className="block mb-1 font-semibold">رسالة الصيانة</label>
            <textarea
              name="maintenanceMessage"
              value={form.maintenanceMessage}
              onChange={handleChange}
              className="w-full border p-2 rounded h-24"
            />
          </div>
        )}

        <div>
          <label className="block mb-1 font-semibold">شعار المتجر</label>
          <input type="file" accept="image/*" onChange={handleLogoChange} />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          حفظ التعديلات
        </button>
      </form>
    </div>
  );
}
