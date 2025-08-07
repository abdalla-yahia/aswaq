"use client";

import { useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin" | "delivery" | "storekeeper";
  status: "active" | "blocked";
};

export default function Users_Details({name}:{name?:string}) {
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "محمد أحمد",
      email: "mohamed@example.com",
      role: "user",
      status: "active",
    },
    {
      id: "2",
      name: "فاطمة علي",
      email: "fatma@example.com",
      role: "admin",
      status: "blocked",
    },
    {
      id: "3",
      name: "أحمد عبد الله",
      email: "ahmed@example.com",
      role: "delivery",
      status: "active",
    },
  ]);

  const handleToggleStatus = (id: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "active" ? "blocked" : "active",
            }
          : user
      )
    );
  };

  const handleDelete = (id: string) => {
    if (confirm("هل أنت متأكد من حذف المستخدم؟")) {
      setUsers((prev) => prev.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="py-6 space-y-6 text-foreground w-full">
      <h1 className="text-2xl font-bold ">إدارة المستخدمين {name?.toUpperCase()}</h1>

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
              <tr key={user.id} className="border-t">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">
                  {user.role === "user"
                    ? "مستخدم"
                    : user.role === "admin"
                    ? "أدمن"
                    : user.role === "delivery"
                    ? "مندوب توصيل"
                    : "أمين مخزن"}
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status === "active" ? "نشط" : "محظور"}
                  </span>
                </td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleToggleStatus(user.id)}
                    className="text-blue-600 hover:underline"
                  >
                    {user.status === "active" ? "حظر" : "تفعيل"}
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 hover:underline"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
