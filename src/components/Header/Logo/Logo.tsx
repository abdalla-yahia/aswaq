import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={'/'}>
    <Image priority src={'/images/logo.png'} alt="Logo" width={120} height={120}/>
    </Link>
  )
}
