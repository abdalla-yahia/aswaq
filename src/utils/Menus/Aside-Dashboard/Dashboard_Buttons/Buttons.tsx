import * as icons from '@/utils/Icons/Icons';
import Link from 'next/link';

export default function Buttons({icon,title,href}:{icon:keyof typeof icons,title:string,href:string}) {
    const ButtonsIcon = icons[icon];
  return (
    <Link href={href} className='w-full'>
    <div className="w-full group flex  justify-between px-2 py-1 items-center flex-nowrap hover:-translate-y-1.5 transition-transform  cursor-pointer gap-3">
        <h2 className="hidden md:block  text-sm md:text-lg lg:text-xl group-hover:text-orange-500">{title}</h2>
        <ButtonsIcon  className='text-sm md:text-lg  text-primary group-hover:text-orange-500' title={title}/>
    </div>
    </Link>
  )
}
