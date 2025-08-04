import Link from "next/link";
import * as icon from '@/utils/Icons/Icons';


export default function Navlink() {
  return (
    <>
      <ul className="flex w-full md:w-1/4 order-3 md:order-1 mb-2 md:mb-0 justify-center items-center gap-3 md:gap-0 text-xl">
        <Link href={'/cart'} className=" relative">
          <li >العربة</li>
          <icon.FaOpencart />
          <span className="absolute top-5 left-0 p-0.5 text-xs rounded-2xl bg-red-800 text-white">5</span>
        </Link>
        <span className="text-[10px] text-orange-700 font-bold">2500 جنيه</span>
        <Link href={'/login'} >
          <li >دخول</li>
          <icon.IoPersonCircleOutline />
        </Link>
      </ul>
    </>
  )
}
