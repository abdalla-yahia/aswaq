import SubmitButton from "@/utils/Bottons/Submit-button";
import Image from "next/image";
import Link from "next/link";

export default function Product_Info() {
    const title= "تي شيرت"
  return (
    <>
        <h1 className="mb-5 text-3xl">تفاصيل {title}</h1>
        <div className="flex justif-start items-start w-full gap-3">
            {/*Product Images */}
            <Image loading="lazy" className="shadow-accent" src={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} alt={`منتج ${title}`} width={350} height={250} />
      <div className="flex flex-col jusify-start items-start gap-3">
        {/**Product Name */}
            <div className="flex justify-between items-center gap-2">
                <h3 className="text-xl text-foreground">الاسم : </h3>
                <p className="text-lg text-muted">{title}</p>
            </div>
            {/**Product Description */}
            <div className="flex justify-between items-center gap-2">
                <h3 className="text-xl text-foreground">تفاصيل : </h3>
                <p className="text-lg text-muted">{title}</p>
            </div>
            {/**Product Price */}
            <div className="flex justify-between items-center gap-2">
                <h3 className="text-xl text-foreground">السعر : </h3>
                <span className="line-through text-gray-600">350</span>
                <p className="text-lg text-muted">{250} جنيه</p>
            </div>
             {/**Product Colors */}
            <div className="flex justify-between items-center gap-2">
                <h3 className="text-xl text-foreground">الألوان : </h3>
                <p className="text-lg text-muted flex ">
                    <p className="w-5 h-5 rounded-full mx-2 cursor-pointer bg-red-500"></p>
                    <p className="w-5 h-5 rounded-full mx-2 cursor-pointer bg-green-500"></p>
                    <p className="w-5 h-5 rounded-full mx-2 cursor-pointer bg-orange-500"></p>
                    <p className="w-5 h-5 rounded-full mx-2 cursor-pointer bg-blue-600"></p>
                </p>
            </div>
             {/**Product Price */}
            <div className="flex justify-between items-center gap-2">
                <h3 className="text-xl text-foreground">المتاح : </h3>
                <p className="text-lg text-muted">{25} قطعه</p>
            </div>
             {/**Product Rate */}
            <div className="flex justify-between items-center gap-2">
                <h3 className="text-xl text-foreground">التقييم : </h3>
                <p className="text-xl text-muted text-center">4.5</p>
                <p className="text-2xl text-yellow-400 text-center">*****</p>
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
