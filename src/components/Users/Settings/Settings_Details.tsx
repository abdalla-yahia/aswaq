'use client';

import { useState } from 'react';
import { CiSettings } from 'react-icons/ci';

export default function AccountSettings_Details() {
  const [formData, setFormData] = useState({
    name: 'أحمد علي',
    email: 'ahmed@example.com',
    phone: '01012345678',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: التحقق من كلمة المرور وتحديث البيانات
    alert('تم حفظ التغييرات بنجاح ✅');
  };

  return (
    <div className="space-y-6 text-foreground w-full">
      <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
        <CiSettings className="text-blue-600" /> إعدادات الحساب
      </h2>

      <form
        onSubmit={handleSubmit}
        className=" shadow rounded-lg p-6 space-y-5 max-w-xl"
      >
        {/* بيانات الحساب */}
        <div>
          <label className="block mb-1 font-medium">الاسم</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">البريد الإلكتروني</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">رقم الهاتف</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <hr className="my-4" />

        {/* تغيير كلمة المرور */}
        <div>
          <label className="block mb-1 font-medium">كلمة المرور الحالية</label>
          <input
            name="currentPassword"
            type="password"
            value={formData.currentPassword}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">كلمة المرور الجديدة</label>
          <input
            name="newPassword"
            type="password"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">تأكيد كلمة المرور</label>
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          حفظ التغييرات
        </button>
      </form>
    </div>
  );
}
