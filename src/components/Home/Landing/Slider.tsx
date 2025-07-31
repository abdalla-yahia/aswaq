import SubmitButton from "@/utils/Bottons/Submit-button";
import Image from "next/image";

export default function Slider() {
  return (
     <div className="bg-primary p-main w-full h-fit flex flex-col md:flex-row justify-center md:justify-between items-center ">
        <Image src={'https://static.vecteezy.com/system/resources/previews/024/658/870/large_2x/3d-male-character-engaged-in-productive-work-on-a-laptop-free-png.png'} alt="slider-person" width={400} height={550}/>
        <div className="w-1/2 md:1/3 flex flex-col justify-center items-center gap-5 mb-8">
        <h1 className="text-8xl font-extrabold text-orange-400 text-center">تخفيضات الموسم</h1>
          <p className="text-3xl font-extrabold text-highlight text-center">موسم التخفيضات اشتغل عندنا ما تفوتش الفرصه</p>
          <span className="text-xl font-extrabold text-highlight text-center">خصم أكتر من <span className="text-5xl font-extrabold text-orange-400 line-through">50%</span>  على كل المنتجات</span>
        <div className="hidden md:block w-[50%]">
          <SubmitButton text="تسوق الأن" bgcolor="bg-accent" textcolor="text-orange-500"/>
        </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center gap-0"> */}
        <Image className="hidden lg:block animate-bounce" src={'https://static.vecteezy.com/system/resources/previews/010/793/849/large_2x/50-percent-discount-for-bakery-pastry-or-cake-product-3d-style-free-png.png'} alt="slider-discount" width={250} height={350}/>
        {/* <p className="img-land-animat -mt-5 bg-black rounded-[50%] animate:h-[40px]"></p> */}
        {/* </div> */}
    </div>
  )
}
