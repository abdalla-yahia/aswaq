'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // 1. حذف بيانات الجلسة أو التوكن
    localStorage.removeItem('token'); // لو كنت بتستخدم localStorage
    document.cookie = 'authToken=; Max-Age=0; path=/'; // لو كنت بتستخدم cookie

    // 2. توجيه المستخدم للصفحة الرئيسية أو تسجيل الدخول
    router.replace('/login');
  }, [router]);

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <p className="text-gray-600 text-lg">جاري تسجيل الخروج...</p>
    </div>
  );
}
