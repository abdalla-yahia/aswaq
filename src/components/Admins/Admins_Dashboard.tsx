import MainTitle from "@/utils/Main-Title";
import Aside_Dashboard from "@/utils/Menus/Aside-Dashboard/Aside-Dashboard";
import iconDashboard from '@/db/Icons-Dashboards.json';
import * as icons from '@/utils/Icons/Icons';

export default function Admins_Dashboard({url}:{url:string}) {
    const name = 'اسلام محمود'
  return (
    <>
        {/**Title Page */}
        <MainTitle title={`لوحة تحكم المسؤل  ${name}`}/>
    <div className="w-full flex justify-start items-start gap-2 my-3">
        {/**Aside Menu */}
        <div className="w-1/8 md:w-1/6 ">
        {
          iconDashboard?.admins?.map(admin=>
            <Aside_Dashboard key={admin?.id} icon={admin?.icon as keyof typeof icons} title={admin?.title} href={admin?.href}/>
          )
        }
        </div>
        {/**Page Content */}
        <div className="w-7/8 md:w-5/6 flex justify-start items-start">
          {url}
        </div>
    </div>
    </>
  )
}
