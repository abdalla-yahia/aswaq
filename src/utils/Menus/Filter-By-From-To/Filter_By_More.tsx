
export default function Filter_By_More() {
  return (
        <div className=" border-b pb-2 filter-by-category flex w-full flex-col justify-center items-start">
            <h2 className="text-2xl font-bold my-4 text-shadow-2xs shadow text-shadow-amber-500 ">تصنيف مختلف</h2>
        <h3 className="cursor-pointer hover:text-orange-300 font-bold text-xl">الأكثر مبيعاً</h3>
        <h3 className="cursor-pointer hover:text-orange-300 font-bold text-xl">الأحدث قدوماً</h3>
        <h3 className="cursor-pointer hover:text-orange-300 font-bold text-xl">من الأقل  سعراً</h3>
        <h3 className="cursor-pointer hover:text-orange-300 font-bold text-xl">من الأكثر سعراً </h3>
        </div>
  )
}
