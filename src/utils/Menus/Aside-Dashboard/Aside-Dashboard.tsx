import * as icons from '@/utils/Icons/Icons';
import Buttons from "./Dashboard_Buttons/Buttons";

export default function Aside_Dashboard({icon,title,href}:{icon:keyof typeof icons, title:string,href:string}) {

  return (
    <div className="w-full flex flex-col justify-center items-start gap-8">
        <Buttons icon={icon} title={title} href={href}/> 
    </div>
  )
}
