import * as icons from '@/utils/Icons/Icons';
import Link from 'next/link';

export default function Buttons({icon,title,href}:{icon:keyof typeof icons,title:string,href:string}) {
    const ButtonsIcon = icons[icon];
  return (
    <Link href={href} className='w-full'>
    <div className="w-full group flex justify-between px-2 py-1 items-center flex-nowrap hover:-translate-y-1.5 transition-transform  cursor-pointer gap-3">
        <h2 className="hidden md:block md:text-xl lg:text-2xl group-hover:text-orange-500">{title}</h2>
        <ButtonsIcon size={24} className='text-sm text-primary group-hover:text-muted' title={title}/>
    </div>
    </Link>
  )
}
