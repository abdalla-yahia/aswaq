import Users_Dashboard from "@/components/Users/Users_Dashboard"

export default async function Users_Dashboard_Content({params}:{params:Promise<{users:string}>}) {
  const {users} = await params
    return (
      <section className="admin-page p-main">
           <Users_Dashboard url={users}/>
         </section>
  )
}
