import Stockkeepers_Dashboard from "@/components/Stockkeepers/Stockkeepers_Dashboard"

export default async function Stockkeepers_Dashboard_Content({params}:{params:Promise<{stockkeeper:string}>}) {
  const {stockkeeper} = await params
    return (
      <section className="admin-page p-main">
           <Stockkeepers_Dashboard url={stockkeeper}/>
         </section>
  )
}
