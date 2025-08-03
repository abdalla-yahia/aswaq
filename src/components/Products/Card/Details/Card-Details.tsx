import * as icon from '@/utils/Icons/Icons';

export default function Card_Details({title,describtion,price,rate}:{title:string,describtion:string,price:number,rate:number}) {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-2 pb-2 px-3'>
            <h3 title={title} className='text-2xl text-center font-bold text-accent line-clamp-1'>{title}</h3>
            <p title={describtion} className='text-muted text-center line-clamp-2'>{describtion}</p>
            <span className='text-orange-500 font-bold'>{price} جنيه</span>
            <div className='w-full flex justify-between items-center px-2'>
            <span className='text-green-500 font-bold'>{rate}</span>
            <span className='text-yellow-300'>*****</span>
            </div>
            <div className='w-full flex justify-between items-center px-2'>
                <icon.FaOpencart  className='cursor-pointer hover:text-orange-600 transition-all'/>
                <icon.CiHeart className='cursor-pointer hover:text-orange-600 transition-all'/>
            </div>
    </div>
  )
}
