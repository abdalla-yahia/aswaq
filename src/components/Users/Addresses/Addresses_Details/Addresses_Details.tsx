import * as icon from '@/utils/Icons/Icons';

export default function Addresses_Details() {
  return (
    <div className="flex  bg-amber-50 rounded-2xl shadow justify-between  items-start w-1/3 p-2">
          {/**Card Details*/}
          <div className="card-content flex justify-start items-start flex-col gap-2">
             <div className="flex w-full gap-2">
              <h1 className="text-lg font-bold text-black"> اسم العنوان : </h1>
              <h2 className="text-lg font-bold text-muted">عنوان المنزل</h2>
            </div>
            <div className="flex w-full gap-2">
              <h1 className="text-lg font-bold text-black"> العنوان  : </h1>
              <h2 className="text-lg font-bold text-muted">القاهرة -  لتسعين - ش 16</h2>
            </div>
            <div className="flex w-full gap-2">
              <h1 className="text-lg font-bold text-black"> رقم الهاتف : </h1>
              <h2 className="text-lg font-bold text-muted">01234567890</h2>
            </div>
           
            {/* {address.isDefault && (
                <span className="inline-block text-xs mt-1 px-2 py-0.5 bg-green-100 text-green-700 rounded">
                  العنوان الافتراضي
                </span>
              )} */}
          </div>
          {/**Actions */}
          <div className="flex gap-2">
            <icon.HiPencilSquare title='تعديل العنوان' className='text-green-500 cursor-pointer' />
            <icon.CiTrash title='حذف العنوان' className='text-red-500 cursor-pointer'/>
          </div>
        </div>
  )
}
