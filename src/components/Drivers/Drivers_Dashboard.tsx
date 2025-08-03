import Aside_Dashboard from "@/utils/Menus/Aside-Dashboard/Aside-Dashboard";
import iconDashboard from '@/db/Icons-Dashboards.json';
import * as icons from '@/utils/Icons/Icons';

export default function Drivers_Dashboard() {
  return (
        <div className="w-full ">
        {
          iconDashboard?.delivery?.map(delivery=>
            <Aside_Dashboard key={delivery?.id} icon={delivery?.icon as keyof typeof icons} title={delivery?.title} href={delivery?.href}/>
          )
        }
        </div>
        
  )
}
