import Aside_Dashboard from "@/utils/Menus/Aside-Dashboard/Aside-Dashboard";
import iconDashboard from '@/db/Icons-Dashboards.json';
import * as icons from '@/utils/Icons/Icons';

export default function Users_Dashboard() {

  return (
        <div className="w-full ">
        {
          iconDashboard?.users?.map(user=>
            <Aside_Dashboard key={user?.id} icon={user?.icon as keyof typeof icons} title={user?.title} href={user?.href}/>
          )
        }
        </div>
  )
}
