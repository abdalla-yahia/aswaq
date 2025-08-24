'use client';
import * as icon from '@/utils/Icons/Icons'
import { useQuery } from "@apollo/client";
import { GET_ME } from "@/Graphql/Schemas/UserQuery";
import { useAppDispatch } from '@/libs/Store/Store';
import { deleteUser } from '@/Features/Actions/usersActions';
import { useState } from 'react';
import EditUserDataForm from '@/utils/Forms/User/Edit-User-Data-Form';
import Image from 'next/image';
import ChangePassword from '../../../utils/Forms/User/ChangePassword';
import swal from 'sweetalert';


export default function Personal_Data() {
  const [isEdit, setIsEdit] = useState(false)
  const [isChangePassword, setIsChangePassword] = useState(false)
  const { data } = useQuery(GET_ME, {
    fetchPolicy: "cache-and-network",
  });
  const dispatch = useAppDispatch()
  //Handller Delete User
  const DeleteUserHandller = (id: string) => {

    swal({
      title: "هل أنت متأكد من الحذف؟",
      text: "بمجرد حذف التصنيف سيتم مسحة نهائياً ولن تستطع إستعادة بياناته مرة أخرى!",
      icon: "warning",
      dangerMode: true,
      buttons: ["إلغاء", "حذف"]
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteUser(id))
          swal("تم حذف التصنيف", {
            icon: "success",
          });
          window.location.href = '/';
        } else {
          swal("أنت الأن في أمان لم يتم الحذف!");
        }
      });


  }
  return (
    <div className="max-w-5xl mx-auto text-foreground w-full border relative p-6 rounded-lg shadow">
      <div className="flex flex-col md:flex-row items-center gap-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className='flex flex-wrap gap-2'>
            <label className="text-sm text-gray-500">البريد الإلكتروني</label>
            <p className="font-medium">{data?.me?.email}</p>
          </div>
          <div className='flex flex-wrap gap-2'>
            <label className="text-sm text-gray-500">رقم الهاتف</label>
            <p className="font-medium">{data?.me?.phone}</p>
          </div>
          <div className='flex flex-wrap gap-2'>
            <label className="text-sm text-gray-500">الجنس</label>
            <p className="font-medium">{(data?.me?.gender) == 'MALE' ? 'ذكر' : (data?.me?.gender) == 'FEMALE' ? 'أنثى' : ''}</p>
          </div >
          <div className='flex flex-wrap gap-2'>
            <label className="text-sm text-gray-500">تاريخ الميلاد</label>
            <p className="font-medium">{data?.me?.birthDate ? (new Date(Number(data?.me?.birthDate)).toLocaleString('ar-EG', {
              year: 'numeric',
              month: 'short',
              day: '2-digit'
            })) : 'جارٍ التحميل .....'

            }</p>
          </div>
        </div>
        {/*Edit User Data Form*/}
        {
          isEdit
          && (
            <EditUserDataForm setIsEdit={setIsEdit} />
          )
        }
        {/*Change  Password*/}
        {
          isChangePassword && (
            <ChangePassword setIsChangePassword={setIsChangePassword} />
          )
        }
        <div className="flex gap-1 mt-6 w-full ">
          <button onClick={() => setIsEdit(!isEdit)} className="bg-blue-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-700">
            تعديل البيانات
          </button>
          <button onClick={() => setIsChangePassword(!isChangePassword)} className="bg-gray-100 text-gray-800 px-4 py-2 cursor-pointer rounded hover:bg-gray-200">
            تغيير كلمة المرور
          </button>
          {data?.me?.role !== 'ADMIN' && <button onClick={() => DeleteUserHandller(data?.me?.id)} className='text-white hover:bg-red-600 rounded  mr-auto  bg-sky-500 p-2  cursor-pointer'>
            حذف الحساب
          </button>}
        </div>
      </div>
    </div>
  );
}
