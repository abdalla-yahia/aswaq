import Buttons from "./Dashboard_Buttons/Buttons";

export default function Aside_Dashboard() {
    const icon= 'MdDeliveryDining';
    const title = 'قائمة المنتجات'
    const href = '/users/'
  return (
    <div className="flex flex-col justify-center items-start gap-3">
        <Buttons icon={icon} title={title} href={href}/> 
    </div>
  )
}
