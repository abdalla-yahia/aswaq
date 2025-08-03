import MainTitle from "@/utils/Main-Title";
import Aside_Dashboard from "@/utils/Menus/Aside-Dashboard/Aside-Dashboard";
import iconDashboard from '@/db/Icons-Dashboards.json';
import * as icons from '@/utils/Icons/Icons';

export default function Drivers_Dashboard({url}:{url:string}) {
    const name = 'رامي'
  return (
    <>
        {/**Title Page */}
        <MainTitle title={`لوحة تحكم السائق  ${name}`}/>
    <div className="w-full flex justify-start items-start gap-2 my-3">
        {/**Aside Menu */}
        <div className="w-1/8 md:w-1/6 ">
        {
          iconDashboard?.delivery?.map(delivery=>
            <Aside_Dashboard key={delivery?.id} icon={delivery?.icon as keyof typeof icons} title={delivery?.title} href={delivery?.href}/>
          )
        }
        </div>
        {/**Page Content*/}
        <div className="w-7/8 md:w-5/6 ">
        {url}
        </div>
    </div>
    </>
  )
}
