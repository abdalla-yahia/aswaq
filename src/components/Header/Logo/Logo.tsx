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
    <ul className="flex justify-center items-center gap-2">
      <Link href={'/about'} className="text-black">
          <li className=" hover:text-orange-400 font-bold">عنا</li>
          {/* <icon.IoPersonCircleOutline /> */}
        </Link>
        <Link href={'/contact'} className="text-black">
          <li className="mx-2 hover:text-orange-400 font-bold">تواصل معنا</li>
          {/* <icon.IoPersonCircleOutline /> */}
        </Link>
    <div className="text-black flex justify-center items-center">
          <li className=" hover:text-orange-400 font-bold">توصيل إلى</li>
          <select defaultValue={'بني سويف'} name="" id="" className="outline-none border-none scrollbar-none bg-transparent">
            {
              governorates?.map((el,index)=>
              <option className="text-accent" key={index} value={el}>{el}</option>
              ) 
            }
          </select>
    </div>
    <Link href={'/'}>
    <Image priority src={'/images/logo.png'} alt="Logo" width={120} height={120}/>
    </Link>
    </ul>
  )
}
