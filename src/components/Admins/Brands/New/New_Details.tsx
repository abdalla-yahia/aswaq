import Create_Anew_Brand from "@/utils/Forms/Brand/Create_Anew_Brand";


export default function New_Details() {
 return (
  <section className="w-full flex flex-col gap-4 justify-start items-center">
  <h1 className="text-3xl ml-auto">إضافة براند جديد</h1>
  <Create_Anew_Brand />
  </section>
 )
}
