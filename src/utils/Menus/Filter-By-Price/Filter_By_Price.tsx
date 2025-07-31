
export default function Filter_By_Price() {
  return (
    <div className=" pb-2 flex flex-col w-full gap-2 ">
        <h2 className="text-2xl font-bold my-4 text-shadow-2xs shadow text-shadow-amber-500 ">تصنيف بالسعر</h2>
        {/**Price From */}
        <div className="flex justify-between items-center w-full ">
            <h4 className="w-1/3 ">السعر من : </h4>
            <div className="flex items-center justify-between w-2/4 ">
                <input value={0} type="number" min={0} className="border rounded w-full pr-2"/>
            </div>
            <span className="font-bold">جنيه</span>
        </div>
        {/**Price To */}
        <div className="flex justify-between items-center w-full ">
            <h4 className="w-1/3 ">السعر إلى : </h4>
            <div className="flex items-center justify-between w-2/4 ">
                <input value={0} type="number" min={0} className="border rounded w-full pr-2"/>
            </div>
            <span className="font-bold">جنيه</span>
        </div>
    </div>
  )
}
