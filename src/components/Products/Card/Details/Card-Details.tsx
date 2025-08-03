import * as icon from '@/utils/Icons/Icons';

export default function Card_Details({title,describtion,price,rate}:{title:string,describtion:string,price:number,rate:number}) {
  return (
    <div className='w-full flex flex-col justify-start items-start gap-1 pb-2 px-3'>
            <h3 title={title} className='text-xl font-semibold  mb-1 text-accent line-clamp-1'>{title}</h3>
            <p title={describtion} className='text-gray-600 text-sm mb-4 line-clamp-2'>الكترونيات</p>
              <div className="">
                    <p className="text-lg font-bold text-green-600">{price} جنيه</p>
                    <p className="text-sm text-gray-500 line-through">$159.99</p>
                </div>
           {/* <span className='text-orange-500 font-bold'>{price} جنيه</span> */}
            <p title={describtion} className='text-gray-600 text-sm mb-4 line-clamp-2'>{describtion} {describtion} {describtion}</p>
            <div className='w-full flex justify-between items-center px-2'>
            <span className='text-orange-600  font-bold'>({rate}/5)</span>
            <span className='text-yellow-300'>*****</span>
            </div>
          <div className="flex items-start w-full justify-start">
                    <icon.MdOutlineLocalShipping className="text-blue-500 mx-2 text-lg"/>
                    <span className="text-sm text-red-300">توصيل مجاني</span>
                </div>
            <div className='w-full flex justify-between items-center px-2'>
                <icon.FaShoppingCart title='أضف للعربة'  className='cursor-pointer text-2xl text-blue-500 hover:text-orange-600 transition-all'/>
                <icon.CiHeart title='أضف للمفضلة' className='cursor-pointer text-2xl text-blue-500 hover:text-orange-600 transition-all'/>
            </div>
    </div>


  )
}
