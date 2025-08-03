import Image from "next/image";
import Link from "next/link";

export default function BrandCard({img,title,brand,className}:{img:string,title:string,brand:string,className:string}) {
  
return (
        <Link href={`/brands/${brand}`} className="cursor-pointer">
            <div className={` bg-${brand} rounded-full Brand-card flex flex-col justify-center items-center  `}>
                    <Image loading="lazy" src={img} alt={title} width={100} height={100} />
                <div className={`${className}  Brand-card-content flex flex-col`}>
                    <h2 className="text-lg font-bold">{title}</h2>
                </div>
            </div>
        </Link>
  )
}
