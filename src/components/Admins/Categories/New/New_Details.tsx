import Create_Anew_Category from "@/utils/Forms/Create_Anew_Category";


export default function New_Details() {
 return (
  <section className="w-full flex flex-col gap-4 justify-start items-center">
  <h1 className="text-3xl ml-auto">إضافة تصنيف جديد</h1>
  <Create_Anew_Category />
  </section>
 )
}
