import Image from 'next/image';
import Link from 'next/link';
import Card_Details from './Details/Card-Details';

export default function ProductCard({className,id,img,title,key,describtion,price,rate,category}:{className:string,key?:number,id:string,img:string,title:string,describtion:string,price:number,rate:number,category:string}) {
  return (
    <div className={`${className} relative`}>
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">شراء</span>
          <div className="flex flex-col border border-gray-300 rounded-xl shadow-soft justify-between items-center min-h-[350px]">
              {/**Card Image */}
              <Link href={`/products/${id}`}>
                  <Image key={key} loading='lazy' src={img} alt={title} width={100} height={50}  className='object-cover'/>
                </Link>
              {/**Card Details */}
              <Card_Details title={title} describtion={describtion} price={price} rate={rate} category={category}/>
          </div>
      </div>
  )
}
