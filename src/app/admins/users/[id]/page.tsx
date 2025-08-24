import Full_Details_Page from "@/components/Admins/Users/Full_Details_Page"

export default async function Full_User_Details({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
  return (
    <Full_Details_Page id={id}/>
  )
}
