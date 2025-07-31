import Link from "next/link";
import * as icon from '@/utils/Icons/Icons'
export default function Navlink() {
  return (
    <>
      <ul className="flex space-x-4 text-muted gap-4 text-xl">
        <Link href={'/cart'} className="text-muted relative">
          <li className="">العربة</li>
          <icon.FaOpencart />
          <span className="absolute top-5 left-0 p-0.5 text-xs bg-red-800 text-white">5</span>
        </Link>
        <Link href={'/login'} className="text-muted">
          <li className="">دخول</li>
          <icon.IoPersonCircleOutline />
        </Link>
      </ul>
    </>
  )
}
