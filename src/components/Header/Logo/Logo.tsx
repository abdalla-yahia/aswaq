import Image from "next/image";
import Link from "next/link";
const governorates = [
  "أسوان",
  "أسيوط",
  "الإسكندرية",
  "الإسماعيلية",
  "الأقصر",
  "البحر الأحمر",
  "البحيرة",
  "الجيزة",
  "الدقهلية",
  "السويس",
  "الشرقية",
  "الغربية",
  "الفيوم",
  "القاهرة",
  "القليوبية",
  "المنوفية",
  "المنيا",
  "الوادي الجديد",
  "بني سويف",
  "بورسعيد",
  "جنوب سيناء",
  "دمياط",
  "سوهاج",
  "شمال سيناء",
  "قنا",
  "كفر الشيخ",
  "مطروح"
];
export default function Logo() {
  return (
    <ul className="flex order-1 md:order-3 justify-center items-center gap-0 md:gap-2">
      <Link href={'/about'} className="text-black">
          <li className=" hover:text-orange-400 font-bold">من نحن؟</li>
          {/* <icon.IoPersonCircleOutline /> */}
        </Link>
        <Link href={'/contact'} className="text-black">
          <li className="mx-2 hover:text-orange-400 font-bold text-center">تواصل معنا</li>
          {/* <icon.IoPersonCircleOutline /> */}
        </Link>
    <div className="text-black flex justify-center items-center">
          <li className=" hover:text-orange-400 font-bold text-center">توصيل إلى</li>
          <select defaultValue={'بني سويف'} name="" id="" className="outline-none border-none text-gray-800 rounded-xl scrollbar-none bg-transparent">
            {
              governorates?.map((el,index)=>
              <option className="text-accent" key={index} value={el}>{el}</option>
              ) 
            }
          </select>
    </div>
    <Link href={'/'}>
    <Image priority src={'/images/logo.png'} alt="Logo" className="w-fit md:w-[140px]  h-fit" width={50} height={20}/>
    </Link>
    </ul>
  )
}
