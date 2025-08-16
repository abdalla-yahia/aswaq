'use client'
import { deleteAddress } from '@/Features/Actions/addressesActions';
import { RootState, useAppDispatch } from '@/libs/Store/Store';
import * as icon from '@/utils/Icons/Icons';
import { useSelector } from 'react-redux';

export default function Addresses_Details({id,name,Address,phone}:{id:string,name:string,Address:string,phone?:string}) {
  const {status,error,loading} = useSelector((state:RootState)=>state.address)
  const dispatch= useAppDispatch()

  const DeleteAddressHandller = ()=>{
    // Delete Address Logic
    dispatch(deleteAddress(id))
  }
  console.log(status)
  if(status?.success){
    window.location.reload()
  }
  return (
    <div className="flex rounded-2xl shadow shadow-accent/50 justify-between text-foreground w-full  items-start  p-2">
          {/**Card Details*/}
          <div className="card-content flex justify-start items-start flex-col gap-2">
             <div className="flex w-full gap-2">
              <h1 className="text-lg font-bold "> اسم العنوان : </h1>
              <h2 className="text-lg font-bold text-muted">{name}</h2>
            </div>
            <div className="flex w-full gap-2">
              <h1 className="text-lg font-bold "> العنوان  : </h1>
              <h2 className="text-lg font-bold text-muted">{Address}</h2>
            </div>
             <div className="flex w-full gap-2">
              <h1 className="text-lg font-bold "> رقم الهاتف : </h1>
              <h2 className="text-lg font-bold text-muted">{phone}</h2>
            </div>
          </div>
          {/**Actions */}
          <div className="flex gap-2">
            <icon.HiPencilSquare title='تعديل العنوان' className='text-green-500 cursor-pointer' />
            <icon.CiTrash onClick={()=>DeleteAddressHandller()} title='حذف العنوان' className='text-red-500 cursor-pointer'/>
          </div>
          {
            loading && <p className='text-yellow-500'>جارٍ حذف العنوان</p>
          }
        </div>
  )
}
