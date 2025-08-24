"use client";

import { User } from "@/types/types";
import Link from "next/link";

export default function Users_Details({users}:{users:User[]}) {
  
  return (
    <div className="py-6 space-y-6 text-foreground w-full">
      <h1 className="text-2xl font-bold ">إدارة المستخدمين </h1>

      <div className="overflow-x-auto  rounded-lg shadow border border-gray-200">
        <table className="min-w-full text-sm text-right">
          <thead className="bg-accent">
            <tr>
              <th className="p-3">الاسم</th>
              <th className="p-3">البريد الإلكتروني</th>
              <th className="p-3">النوع</th>
              <th className="p-3">الحالة</th>
              <th className="p-3">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user?.id} className="border-t">
                <td className="p-3">
                  <Link href={`/admins/users/${user?.id}`}>
                  {user?.name}
                  </Link>
                  </td>
                <td className="p-3">{user?.email}</td>
                <td className="p-3">
                  {user?.role === "USER"
                    ? "مستخدم"
                    : user?.role === "ADMIN"
                    ? "أدمن"
                    : user?.role === "DRIVER"
                    ? "مندوب توصيل"
                    : "أمين مخزن"}
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      user?.status === "ACTIVE"
                        ? "bg-green-100 text-green-700"
                        :user?.status === "INACTIVE"
                        ? "bg-red-100 text-red-700"
                        :"bg-red-100 text-yellow-700"
                    }`}
                  >
                    {user?.status === "ACTIVE" ? "نشط" : "محظور"}
                  </span>
                </td>
                <td className="p-3 space-x-2">
                    {user?.role !== 'ADMIN'?
                  (<>
                  <button
                    // onClick={() => handleToggleStatus(user.id)}
                    className="text-blue-600 hover:underline"
                  >
                    {user?.status === "ACTIVE" ? "حظر" : "تفعيل"}
                  </button>
                  <button
                    // onClick={() => handleDelete(user.id)}
                    className="text-red-600 hover:underline"
                  >
                    حذف
                  </button>
                  </> )
                  :''}
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
