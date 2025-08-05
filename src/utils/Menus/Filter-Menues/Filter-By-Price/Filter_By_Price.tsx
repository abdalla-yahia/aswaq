
export default function Filter_By_Price() {
  return (
    <div className=" pb-2 flex flex-col w-full gap-1 ">
        <h2 className="text-[8px] md:text-xl font-bold my-4 hidden md:block">تصنيف بالسعر</h2>
        {/**Price From */}
        <div className="flex justify-between flex-wrap items-center w-full ">
            <h4 className="w-1/3 "> من </h4>
            <div className="flex items-center justify-between w-full md:w-2/4 ">
                <input  type="number" min={0} className="border rounded w-full pr-2"/>
            </div>
            <span className="font-bold">ج.م</span>
        </div>
        {/**Price To */}
        <div className="flex justify-between flex-wrap  items-center w-full ">
            <h4 className="w-1/3 ">إلى </h4>
            <div className="flex items-center justify-between w-full md:w-2/4 ">
                <input  type="number" min={0} className="border rounded w-full pr-2"/>
            </div>
            <span className="font-bold">ج.م</span>
        </div>
    </div>
  )
}
