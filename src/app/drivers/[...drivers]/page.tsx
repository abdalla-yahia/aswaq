import Drivers_Dashboard from "@/components/Drivers/Drivers_Dashboard"

export default async function Drivers_Dashboard_Content({params}:{params:Promise<{drivers:string}>}) {
  const {drivers} = await params
    return (
      <section className="admin-page p-main">
           <Drivers_Dashboard url={drivers}/>
         </section>
  )
}
