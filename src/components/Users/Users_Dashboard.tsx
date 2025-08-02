import MainTitle from "@/utils/Main-Title";
import Aside_Dashboard from "@/utils/Menus/Aside-Dashboard/Aside-Dashboard";

export default function Users_Dashboard() {
    const name = 'أحمد كمال'
  return (
    <>
        {/**Title Page */}
        <MainTitle title={`لوحة تحكم المستخدم ${name}`}/>
    <div className="flex justify-start items-start gap-3">
        {/**Aside Menu */}
        <Aside_Dashboard />
    </div>
    </>
  )
}
