import Image from 'next/image';
import * as icon from '@/utils/Icons/Icons';

export default function ProductCard({className,img,title,describtion,price,rate}:{className:string,img:string,title:string,describtion:string,price:number,rate:number}) {
  return (
    <div className={className}>
        <div className="flex flex-col rounded-xl shadow-soft justify-between items-center min-h-[350px]">
            {/**Card Image */}
            <Image src={img} alt={'idn'} width={150} height={150} loading='lazy' className='object-cover'/>
            {/**Card Details */}
            <div className='w-full flex flex-col justify-center items-center gap-2 pb-2 px-3'>
                <h3 className='text-3xl text-center text-accent'>{title}</h3>
                <p className='text-forground text-center'>{describtion}</p>
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
        </div>
    </div>
  )
}
