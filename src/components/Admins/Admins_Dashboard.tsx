import Aside_Dashboard from "@/utils/Menus/Aside-Dashboard/Aside-Dashboard";
import iconDashboard from '@/db/Icons-Dashboards.json';
import * as icons from '@/utils/Icons/Icons';

export default function Admins_Dashboard() {
  return (
        <div className="w-full ">
          {
            iconDashboard?.admins?.map(admin=>
              <Aside_Dashboard key={admin?.id} icon={admin?.icon as keyof typeof icons} title={admin?.title} href={admin?.href}/>
            )
          }
        </div>
  )
}
