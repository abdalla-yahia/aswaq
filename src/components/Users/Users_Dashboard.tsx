import MainTitle from "@/utils/Main-Title";
import Aside_Dashboard from "@/utils/Menus/Aside-Dashboard/Aside-Dashboard";
import iconDashboard from '@/db/Icons-Dashboards.json';
import * as icons from '@/utils/Icons/Icons';

export default function Users_Dashboard({url}:{url?:string}) {
    const name = 'أحمد كمال'
  return (
    <>
        {/**Title Page */}
        <MainTitle title={`لوحة تحكم المستخدم  ${name}`}/>
    <div className="flex justify-start items-start gap-3 my-3">
        {/**Aside Menu */}
        <div className="w-1/8 md:w-1/6 ">
        {
          iconDashboard?.users?.map(user=>
            <Aside_Dashboard key={user?.id} icon={user?.icon as keyof typeof icons} title={user?.title} href={user?.href}/>
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
