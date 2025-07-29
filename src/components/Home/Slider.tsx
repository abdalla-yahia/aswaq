import SubmitButton from "@/utils/Bottons/Submit-button";
import Image from "next/image";

export default function Slider() {
  return (
     <div className="bg-primary w-full h-fit flex justify-between items-center">
        <Image src={'/products/slider-2.png'} alt="slider-person" width={450} height={550}/>
        <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-8xl font-extrabold text-orange-400">تخفيضات الموسم</h1>
          <p className="text-3xl font-extrabold text-highlight">موسم التخفيضات اشتغل عندنا ما تفوتش الفرصه</p>
          <span className="text-xl font-extrabold text-highlight">اكتر من  <span className="text-5xl font-extrabold text-orange-400">50%</span>خصم  على كل المنتجات</span>
        <SubmitButton text="تسوق الأن" bgcolor="bg-accent" textcolor="text-orange-500"/>
        </div>
        <Image className="pl-9" src={'/products/discount-50.png'} alt="slider-discount" width={350} height={350}/>
    </div>
  )
}
