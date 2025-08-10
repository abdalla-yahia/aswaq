'use client'
import SubmitButton from "@/utils/Bottons/Submit-button";
import Image from "next/image";
import Link from "next/link";

export default function Slider({ img1, img2, text, paragraph, paragraph2, bgcolor }: { img1: string, img2: string, text: string, paragraph: string, paragraph2: string, bgcolor: string }) {
  return (
    <div className={` ${bgcolor}  flex-shrink-0 p-main w-full h-fit flex flex-col md:flex-row justify-center md:justify-between items-center `}>
      <Image loading="lazy" src={img1} alt="slider-person" width={400} height={550} />
      <div className="w-1/2 md:1/3 flex flex-col justify-center items-center gap-5 mb-8">
        <h1 className="text-8xl font-extrabold text-orange-400 text-center">{text}</h1>
        <p className="text-3xl text-white  font-extrabold  text-center">{paragraph}</p>
        <span className="text-xl font-extrabold text-orange-500 text-center">{paragraph2}</span>
        <div className="hidden md:block w-[50%]">
          <Link href={'/products'}>
            <SubmitButton onclick={() => ''} text="تسوق الأن" bgcolor="bg-accent" textcolor="text-orange-500" />
          </Link>
        </div>
      </div>
      {/* <div className="flex flex-col justify-center items-center gap-0"> */}
      <Image loading="lazy" className="hidden lg:block animate-bounce" src={img2} alt="slider-discount" width={250} height={350} />
      {/* <p className="img-land-animat -mt-5 bg-black rounded-[50%] animate:h-[40px]"></p> */}
      {/* </div> */}
    </div>
  )
}
