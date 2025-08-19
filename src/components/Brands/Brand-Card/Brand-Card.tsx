import Image from "next/image";
import Link from "next/link";

export default function BrandCard({img,title,brand,className}:{img:string,title:string,brand:string,className:string}) {
  
return (
        <Link href={`/brands/${brand}`} className="cursor-pointer">
            <div className={` rounded-full Brand-card flex flex-col justify-center items-evenly gap-2`}>
                    <Image loading="lazy" src={img} alt={title} width={80} height={50} />
                <div className={`${className}  Brand-card-content h-fit w-full flex flex-col`}>
                    <h2 className="text-lg font-bold">{title}</h2>
                </div>
            </div>
        </Link>
  )
}
