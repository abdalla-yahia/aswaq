import SubmitButton from "@/utils/Bottons/Submit-button";
import Image from "next/image";
import Link from "next/link";
import products from '@/db/products_dataset.json';

export default function Product_Info({id}:{id:string}) {
    const item= products.data.find(ele=>ele.id === parseInt(id))
  return (
    <>
        <h1 className="mb-5 text-3xl">تفاصيل {item?.title}</h1>
        <div className="flex justif-start items-start w-full gap-3">
            {/*Product Images */}
            <Image loading="lazy" className="shadow-accent" src={item?.image as string} alt={`منتج ${item?.title}`} width={350} height={250} />
      <div className="flex flex-col jusify-start items-start gap-3">
        {/**Product Name */}
            <div className="flex justify-between items-center gap-2">
                <h3 className="text-xl text-foreground">الاسم : </h3>
                <p className="text-lg text-muted">{item?.title}</p>
            </div>
            {/**Product Description */}
            <div className="flex justify-between items-center gap-2">
                <h3 className="text-xl text-foreground">تفاصيل : </h3>
                <p className="text-lg text-muted">{item?.description}</p>
            </div>
            {/**Product Price */}
            <div className="flex justify-between items-center gap-2">
                <h3 className="text-xl text-foreground">السعر : </h3>
                <span className="line-through text-gray-600">350</span>
                <p className="text-lg text-muted">{item?.price} جنيه</p>
            </div>
             {/**Product Colors */}
            <div className="flex justify-between items-center gap-2">
                <h3 className="text-xl text-foreground">الألوان : </h3>
                <p className="text-lg text-muted flex ">
                    {
                        item?.colors.map((color,index)=>
                            <p key={index} style={{background:color}} className={`w-5 h-5 rounded-full mx-2 cursor-pointer  `}></p>
                        )
                    }
                </p>
            </div>
             {/**Product Price */}
            <div className="flex justify-between items-center gap-2">
                <h3 className="text-xl text-foreground">المتاح : </h3>
                <p className="text-lg text-muted">{item?.stock} قطعه</p>
            </div>
             {/**Product Rate */}
            <div className="flex justify-between items-center gap-2">
                <h3 className="text-xl text-foreground">التقييم : </h3>
                <p className="text-xl text-muted text-center">{item?.rating}</p>
                <p className="text-2xl text-yellow-400 text-center">*****</p>
            </div>
             {/**Product Reviews */}
            <div className="flex justify-between items-center gap-2">
                <h3 className="text-xl text-foreground">عدد المقيمين : </h3>
                <p className="text-lg text-muted">{item?.reviews} شخص</p>
            </div>
             {/**Add To Cart */}
            <div className="flex justify-between items-center gap-2">
                <Link href="/cart">
                    <SubmitButton text="أضف للعربة" bgcolor="bg-green-500" textcolor="" />
                </Link>
            </div>
            </div>
    </div>
    </>
  )
}
