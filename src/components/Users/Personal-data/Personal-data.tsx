'use client';
import * as icon from '@/utils/Icons/Icons'
import { useQuery } from "@apollo/client";
import { GET_ME } from "@/Graphql/Schemas/UserQuery";
import { useAppDispatch } from '@/libs/Store/Store';
import { deleteUser } from '@/Features/Actions/usersActions';
import { useState } from 'react';
import EditUserDataForm from '@/utils/Forms/Edit-User-Data-Form';
import Image from 'next/image';


export default function Personal_Data() {
  const [isEdit, setIsEdit] = useState(false)
  const { data, loading } = useQuery(GET_ME, {
    fetchPolicy: "network-only",
  });
  // console.log(data?.me)
  const dispatch = useAppDispatch()
  //Handller Delete User
  const DeleteUserHandller = (id: string) => {
    dispatch(deleteUser(id))
    window.location.href = '/';
  }
  return (
    <div className="max-w-5xl mx-auto text-foreground w-full border relative p-6 rounded-lg shadow">
      <button onClick={() => DeleteUserHandller(data?.me?.id)} className='text-white hover:bg-red-600 rounded absolute bottom-4 bg-sky-500 p-2 left-4 cursor-pointer'>حذف الحساب</button>
      <div className="flex items-center gap-4">
        {data?.me?.image ?
          (<Image src={data?.me?.image} alt={`${data?.me?.name}-صورة`} width={80} height={80} className="rounded-full" />) :
          (<icon.FaUserCircle className="text-6xl text-gray-400" />)
        }
        <div>
          <h2 className="text-xl font-bold">{data?.me?.name}</h2>
          <p className="text-sm text-gray-500">انضم منذ:
            {data?.me?.createdAt
              ? new Date(Number(data.me.createdAt)).toLocaleString('ar-EG', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
              })
              : '...جارٍ التحميل'}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-500">البريد الإلكتروني</label>
            <p className="font-medium">{data?.me?.email}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">رقم الهاتف</label>
            <p className="font-medium">{data?.me?.phone}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">الجنس</label>
            <p className="font-medium">{(data?.me?.gender) == 'MALE' ? 'ذكر' : (data?.me?.gender) == 'FEMALE' ? 'أنثى' : ''}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">تاريخ الميلاد</label>
            <p className="font-medium">{new Date(Number(data?.me?.birthDate)).toLocaleString('ar-EG', {
              year: 'numeric',
              month: 'short',
              day: '2-digit'
            })}</p>
          </div>
        </div>
        {/*Edit User Data Form*/}
        {
          isEdit && (
            <EditUserDataForm setIsEdit={setIsEdit} />
          )
        }
        <div className="flex gap-4 mt-6">
          <button onClick={() => setIsEdit(!isEdit)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
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
