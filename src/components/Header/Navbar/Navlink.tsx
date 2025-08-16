import Link from "next/link";
import * as icon from '@/utils/Icons/Icons';
import { useQuery } from "@apollo/client";
import { GET_ME } from "@/Graphql/Schemas/UserQuery";
import Image from "next/image";

export default  function Navlink() {
const { data, loading } = useQuery(GET_ME, {
    fetchPolicy: "network-only", // عشان يجيب آخر بيانات من السيرفر
  });

  return (
    <>
      <ul className="flex w-full md:w-1/3 order-3 md:order-1 mb-2 md:mb-0 justify-center items-start gap-3 md:gap-2 text-lg">
        <Link href={'/cart'} className=" relative flex flex-col justify-center items-center text-center">
          <li >العربة</li>
          <icon.FaOpencart />
          <span className="absolute top-[50%] -right-3 flex size-5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex size-5 rounded-full bg-sky-500 justify-center items-center text-white text-[12px]">15</span>
          </span>
          {/* <span className="absolute top-0 -right-6 p-1 text-xs animate-ping rounded-2xl bg-red-800 text-white">5</span> */}
        </Link>
        {/* <span className="text-[10px] text-orange-600 font-bold">2500 ج.م</span> */}
        <Link href={'/login'} className="flex flex-col justify-center items-center text-center">
          <li >{data?.me?.name ? (`مرحباً ${(data?.me?.name).split(' ')[0]}`):'دخول'}</li>
          {/*Personal Image*/}
          {
            (data?.me?.image) ? 
            (<Image src={data?.me?.image} alt={`Image - ${data?.me?.name}`} width={40} height={40} className="rounded-full"/>) :
            (<icon.IoPersonCircleOutline />)
          }
          {/*Logout Icon*/}
          {
            (data?.me?.name) ? 
            (<Link href={'/logout'}><icon.BiLogOutCircle title="تسجيل الخروج"/></Link>):
            ('')
          }
        </Link>
        {/*Dashboard Icon*/}
        {
          data?.me?.role &&
          <Link href={`/${(data?.me?.role).toLowerCase()}s`} className="flex flex-col justify-center items-center text-center">
          <p>لوحة التحكم</p>
          <icon.IoSettingsOutline className=" animate-[spin_3s_ease-in-out_infinite]"/>
        </Link>
        }
      </ul>
    </>
  )
}
