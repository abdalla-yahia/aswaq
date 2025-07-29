import SubmitButton from "@/utils/Bottons/Submit-button";
import Image from "next/image";

export default function Slider() {
  return (
     <div className="bg-primary w-full h-fit flex justify-between items-center">
        <Image src={'https://static.vecteezy.com/system/resources/previews/024/658/870/large_2x/3d-male-character-engaged-in-productive-work-on-a-laptop-free-png.png'} alt="slider-person" width={450} height={550}/>
        <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-8xl font-extrabold text-orange-400">تخفيضات الموسم</h1>
          <p className="text-3xl font-extrabold text-highlight">موسم التخفيضات اشتغل عندنا ما تفوتش الفرصه</p>
          <span className="text-xl font-extrabold text-highlight">اكتر من  <span className="text-5xl font-extrabold text-orange-400">50%</span>خصم  على كل المنتجات</span>
        <SubmitButton text="تسوق الأن" bgcolor="bg-accent" textcolor="text-orange-500"/>
        </div>
        <Image className="pl-9 animate-bounce" src={'https://static.vecteezy.com/system/resources/previews/010/793/849/large_2x/50-percent-discount-for-bakery-pastry-or-cake-product-3d-style-free-png.png'} alt="slider-discount" width={350} height={350}/>
    </div>
  )
}
