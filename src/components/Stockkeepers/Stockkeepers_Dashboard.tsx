import Aside_Dashboard from "@/utils/Menus/Aside-Dashboard/Aside-Dashboard";
import iconDashboard from '@/db/Icons-Dashboards.json';
import * as icons from '@/utils/Icons/Icons';

export default function Stockkeepers_Dashboard() {
   
  return (
        <div className="w-full ">
        {
          iconDashboard?.stockkeepers?.map(stockkeeper=>
            <Aside_Dashboard key={stockkeeper?.id} icon={stockkeeper?.icon as keyof typeof icons} title={stockkeeper?.title} href={stockkeeper?.href}/>
          )
        }
        </div>
    
  )
}
