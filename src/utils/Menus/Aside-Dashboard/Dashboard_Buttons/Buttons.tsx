import * as icons from '@/utils/Icons/Icons';
import Link from 'next/link';

export default function Buttons({icon,title,href}:{icon:keyof typeof icons,title:string,href:string}) {
    const ButtonIcon = icons[icon];
  return (
    <Link href={href}>
    <div className="flex justify-between items-center flex-nowrap cursor-pointer">
        <h2 className="hidden md:block md:text-2xl lg:text-3xl">{title}</h2>
        <ButtonIcon size={44} className='text-lg text-primary' title={title}/>
    </div>
    </Link>
  )
}
