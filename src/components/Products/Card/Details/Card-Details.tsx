import * as icon from '@/utils/Icons/Icons';

export default function Card_Details({title,describtion,price,rate,category}:{title:string,describtion:string,price:number,rate:number,category:string}) {
  return (
    <div className='w-full flex flex-col justify-start items-start gap-1 pb-2 px-3'>
            <h3 title={title} className='text-xl text-center w-full font-semibold  mb-1 text-accent line-clamp-1'>{title}</h3>
            <p title={describtion} className='text-gray-500 text-center w-full text-sm  line-clamp-2'>{category}</p>
              <div className="text-start">
                    <p className="text-lg font-bold text-green-600">{price} جنيه</p>
                    <p className="text-sm text-gray-500 line-through">$159.99</p>
                </div>
           {/* <span className='text-orange-500 font-bold'>{price} جنيه</span> */}
            <p title={describtion} className='text-gray-500 text-start text-sm mb-4 line-clamp-2'>{describtion} {describtion} {describtion}</p>
            <div className='w-full text-start flex justify-between items-center'>
            <span className='text-orange-600 '>({rate}/5)</span>
            <icon.FaStarHalf className='text-yellow-300 text-xs'/>
            <icon.FaStar className='text-yellow-300 text-xs'/>
            <icon.FaStar className='text-yellow-300 text-xs'/>
            <icon.FaStar className='text-yellow-300 text-xs'/>
            <icon.FaStar className='text-yellow-300 text-xs'/>
            </div>
          <div className="flex items-start w-full justify-start text-start">
                    <icon.MdOutlineLocalShipping className="text-amber-700 text-lg"/>
                    <span className="text-sm text-gray-300 mx-1">توصيل مجاني</span>
                </div>
            <div className='w-full flex justify-between items-center text-start'>
                <icon.FaCartPlus title='أضف للعربة'  className='cursor-pointer text-2xl text-blue-500 hover:text-orange-600 transition-all'/>
                <icon.CiHeart title='أضف للمفضلة' className='cursor-pointer text-2xl text-blue-500 hover:text-orange-600 transition-all'/>
            </div>
    </div>


  )
}
