'use client';
import * as icon from '@/utils/Icons/Icons'
import { useQuery } from "@apollo/client";
import { GET_ME } from "@/Graphql/Schemas/UserQuery";
import { useAppDispatch } from '@/libs/Store/Store';
import { deleteUser } from '@/Features/Actions/users/usersActions';

export default function Personal_Data() {
  const { data, loading } = useQuery(GET_ME, {
    fetchPolicy: "network-only", 
  });
  const dispatch = useAppDispatch()
  //Handller Delete User
  const DeleteUserHandller =(id:string)=>{
    dispatch(deleteUser(id))
    window.location.href='/';
  }
  return (
    <div className="max-w-5xl mx-auto text-foreground w-full border relative p-6 rounded-lg shadow">
      <icon.CiTrash onClick={()=>DeleteUserHandller(data?.me?.id)} className='text-red-500 hover:text-red-600 absolute top-4 left-2 cursor-pointer' title='حذف الحساب'/>
      <div className="flex items-center gap-4">
        <icon.FaUserCircle className="text-6xl text-gray-400" />
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
            <p className="font-medium">{(data?.me?.gender)=='MALE'?'ذكر':(data?.me?.gender)=='FEMALE'?'أنثى':''}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">تاريخ الميلاد</label>
            <p className="font-medium">{new Date(Number(data?.me?.birthDate)).toLocaleString('ar-EG',{
              year:'numeric',
              month:'short',
              day:'2-digit'
            })}</p>
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
