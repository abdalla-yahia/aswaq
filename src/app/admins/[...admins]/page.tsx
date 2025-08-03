import Admins_Dashboard from "@/components/Admins/Admins_Dashboard"

export default async function Admins_Dashboard_Content({params}:{params:Promise<{admins:string}>}) {
  const {admins} = await params
    return (
      <section className="admin-page p-main">
           <Admins_Dashboard url={admins}/>
         </section>
  )
}
