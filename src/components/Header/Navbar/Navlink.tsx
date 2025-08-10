import Link from "next/link";
import * as icon from '@/utils/Icons/Icons';
import { useQuery } from "@apollo/client";
import { GET_ME } from "@/Graphql/Schemas/UserQuery";
import Image from "next/image";

export default  function Navlink() {
const { data, loading } = useQuery(GET_ME, {
    fetchPolicy: "network-only", // عشان يجيب آخر بيانات من السيرفر
  });
console.log(data?.me?.image)
  return (
    <>
      <ul className="flex w-full md:w-1/4 order-3 md:order-1 mb-2 md:mb-0 justify-center items-center gap-3 md:gap-0 text-xl">
        <Link href={'/cart'} className=" relative">
          <li >العربة</li>
          <icon.FaOpencart />
          <span className="absolute top-5 -right-6 p-1 text-xs rounded-2xl bg-red-800 text-white">5</span>
        </Link>
        <span className="text-[10px] text-orange-600 font-bold">2500 ج.م</span>
        <Link href={'/login'} >
          <li >{data ? (`مرحباً ${(data?.me?.name).split(' ')[0]}`):'دخول'}</li>
          {
            (data?.me?.image) ? 
            (<Image src={data?.me?.image} alt={`Image - ${data?.me?.name}`} width={50} height={50} className="rounded-full"/>) :
            (<icon.IoPersonCircleOutline />)
          }
        </Link>
      </ul>
    </>
  )
}
