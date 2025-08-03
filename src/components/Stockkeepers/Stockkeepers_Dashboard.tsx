import MainTitle from "@/utils/Main-Title";
import Aside_Dashboard from "@/utils/Menus/Aside-Dashboard/Aside-Dashboard";
import iconDashboard from '@/db/Icons-Dashboards.json';
import * as icons from '@/utils/Icons/Icons';

export default function Stockkeepers_Dashboard({url}:{url?:string}) {
    const name = 'علي سعيد'
  return (
    <>
        {/**Title Page */}
        <MainTitle title={`لوحة تحكم أمين المخزن  ${name}`}/>
    <div className="w-full flex justify-start items-start gap-2 my-3">
        {/**Aside Menu */}
        <div className="w-1/8 md:w-1/6 ">
        {
          iconDashboard?.stockkeepers?.map(stockkeeper=>
            <Aside_Dashboard key={stockkeeper?.id} icon={stockkeeper?.icon as keyof typeof icons} title={stockkeeper?.title} href={stockkeeper?.href}/>
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
