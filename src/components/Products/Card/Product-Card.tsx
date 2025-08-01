import Image from 'next/image';
import Link from 'next/link';
import Card_Details from './Details/Card-Details';

export default function ProductCard({className,id,img,title,key,describtion,price,rate}:{className:string,key?:number,id:string,img:string,title:string,describtion:string,price:number,rate:number}) {
  return (
    <div className={className}>
          <div className="flex flex-col rounded-xl shadow-soft justify-between items-center min-h-[350px]">
              {/**Card Image */}
              <Link href={`/products/${id}`}>
                  <Image key={key} loading='lazy' src={img} alt={title} width={150} height={150}  className='object-cover'/>
                </Link>
              {/**Card Details */}
              <Card_Details title={title} describtion={describtion} price={price} rate={rate}/>
          </div>
      </div>
  )
}
