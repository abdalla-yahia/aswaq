import Image from "next/image";
import Link from "next/link";

export default function BrandCard({img,title,color,className}:{img:string,title:string,color:string,className:string}) {
  const id = 50
  return (
        <Link href={`/brands/${id}`} className="cursor-pointer">
            <div className={` bg-${color} rounded-full Brand-card flex flex-col justify-center items-center mx-8 w-40 h-40 `}>
                    <Image src={img} alt={title} width={100} height={100} />
                <div className={`${className}  Brand-card-content flex flex-col`}>
                    <h2 className="text-lg font-bold">{title}</h2>
                </div>
            </div>
        </Link>
  )
}
