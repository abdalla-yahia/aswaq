'use client'

import { GET_USER_BY_ID } from "@/Graphql/Schemas/UserQuery"
import { CreateAddress } from "@/interfaces/addressInterface"
import { useQuery } from "@apollo/client"
import Image from "next/image"

export default function Full_Details_Page({id}:{id:string}) {
const {data} = useQuery(GET_USER_BY_ID,{
    variables:{id:id},
    fetchPolicy:'cache-and-network'
})
  const user = data?.GetUserById;

  return (
    <div className="p-4 md:p-8 lg:p-12 w-full">
      <div className="max-w-4xl mx-auto border shadow-lg rounded-2xl p-6">
        {/* User Header */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src={user?.image || "/default-avatar.png"}
            alt={user?.name}
            className="w-32 h-32 rounded-full object-cover shadow-md"
            width={100}
            height={100}
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <p className="text-gray-500">{user?.email}</p>
            <p className="text-sm text-gray-400">الرقم التعريفي: {user?.id}</p>
          </div>
        </div>

        {/* User Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p><span className="font-semibold">رقم الهاتف:</span> {user?.phone}</p>
            <p><span className="font-semibold">العنوان:</span> {user?.address}</p>
            <p><span className="font-semibold">الجنس:</span> {user?.gender ? (user?.gender ==='FEMALE'?'أنثى':'ذكر') :'جارٍ التحميل  ...'}</p>
            <p><span className="font-semibold">تاريخ الميلاد:</span> {user?.birthDate ?(new Date(Number(user?.birthDate)).toLocaleString('ar-EG',{year:'numeric',month:'long',day:'numeric'})):'جارٍ التحميل ...'}</p>
          </div>
          <div className="space-y-3">
            <p><span className="font-semibold">الوظيفة:</span> {user?.role === 'ADMIN'?'مسؤول' : user?.role === 'DRIVER' ? 'سائق' : user?.role === 'STOCKKEEPER'?'أمين مخزن': user?.role === 'ACCOUNTANT'?'محاسب':'مستخدم'}</p>
            <p><span className="font-semibold">الحالة:</span> {user?.status === 'ACTIVE' ? 'نشط' : user?.status === 'INACTIVE' ? 'غير نشط' : "تحت التفعيل"}</p>
            <p><span className="font-semibold">موظف فى الموقع:</span> {user?.userEmployee ? "نعم" : "لا"}</p>
            <p><span className="font-semibold">تم إنشاء الحساب:</span> {user?.createdAt ? (new Date(Number(user?.createdAt)).toLocaleString('ar-EG',{year:'2-digit',month:'long',day:'numeric'})):'جارٍ التحميل ...'}</p>
            <p><span className="font-semibold">تم تحديثه:</span> {user?.updatedAt ? (new Date(Number(user?.updatedAt)).toLocaleString('ar-EG',{year:'2-digit',month:'long',day:'numeric'})):'جارٍ التحميل ...'}</p>
          </div>
        </div>

        {/* Addresses */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">كل العناوين</h2>
          {user?.alladdresses && user?.alladdresses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user?.alladdresses.map((addr: CreateAddress) => (
                <div key={addr.id} className="border p-4 rounded-lg shadow-sm bg-gray-50">
                  <p><span className="font-semibold">اسم العنوان:</span> {addr.name}</p>
                  <p><span className="font-semibold">رقم الهاتف:</span> {addr.phone}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">لا توجد عناوين متاحة حالياً</p>
          )}
        </div>

        {/* Future Sections */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">الطلبات</h2>
          <p className="text-gray-500">Coming soon...</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">المراجعات</h2>
          <p className="text-gray-500">Coming soon...</p>
        </div>
      </div>
    </div>
  );

}
