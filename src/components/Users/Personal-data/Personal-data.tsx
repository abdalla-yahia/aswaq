'use client';
import * as icon from '@/utils/Icons/Icons'

export default function Personal_Data() {
  return (
    <div className="max-w-5xl mx-auto text-foreground w-full border p-6 rounded-lg shadow">
      <div className="flex items-center gap-4">
        <icon.FaUserCircle className="text-6xl text-gray-400" />
        <div>
          <h2 className="text-xl font-bold">محمد عبد الله</h2>
          <p className="text-sm text-gray-500">انضم منذ: يناير 2024</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-500">البريد الإلكتروني</label>
            <p className="font-medium">user@example.com</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">رقم الهاتف</label>
            <p className="font-medium">01001234567</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">الجنس</label>
            <p className="font-medium">ذكر</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">تاريخ الميلاد</label>
            <p className="font-medium">1 يناير 1995</p>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            تعديل البيانات
          </button>
          <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200">
            تغيير كلمة المرور
          </button>
        </div>
      </div>
    </div>
  );
}
