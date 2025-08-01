import Image from "next/image";
import Link from "next/link";

export default function BrandCard({img,title,category,className}:{img:string,title:string,category:string,className:string}) {
  
return (
        <Link href={`/brands/${category}`} className="cursor-pointer">
            <div className={` bg-${category} rounded-full Brand-card flex flex-col justify-center items-center mx-8 w-40 h-40 `}>
                    <Image loading="lazy" src={img} alt={title} width={100} height={100} />
                <div className={`${className}  Brand-card-content flex flex-col`}>
                    <h2 className="text-lg font-bold">{title}</h2>
                </div>
            </div>
        </Link>
  )
}
