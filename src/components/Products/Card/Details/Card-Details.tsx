import * as icon from '@/utils/Icons/Icons';

export default function Card_Details({title,describtion,price,rate}:{title:string,describtion:string,price:number,rate:number}) {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-2 pb-2 px-3'>
            <h3 title={title} className='text-2xl text-center  text-accent line-clamp-1'>{title}</h3>
            <p title={describtion} className='text-muted text-center line-clamp-2'>{describtion}</p>
            <span>{price} جنيه</span>
            <div className='w-full flex justify-between items-center px-2'>
            <span>{rate}</span>
            <span className='text-yellow-300'>*****</span>
            </div>
            <div className='w-full flex justify-between items-center px-2'>
                <icon.FaOpencart  className='cursor-pointer'/>
                <icon.CiHeart className='cursor-pointer'/>
            </div>
    </div>
  )
}
