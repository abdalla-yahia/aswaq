'use client'
import { useState } from "react";
import InputButton from "../../Bottons/Input-button";
const categories = [
    { id: "_1", title: "أطفالي" },
    { id: "_2", title: "رجالي" },
    { id: "_3", title: "حريمي" },
    { id: "_4", title: "بناتي" },
    { id: "_5", title: "مقاسات خاصة" },
]
export default function Filter_By_Category() {
    const [toggle,setToggle]=useState(false)
  return (
    <div className="filter-by-category border-b pb-2 flex w-full flex-col justify-center items-start">
    <h2 className="text-2xl font-bold my-4 text-shadow-2xs shadow text-shadow-amber-500 ">تصنيف بالنوع</h2>
        <div  className="flex justify-between items-center w-1/2">
            <label  className="cursor-pointer " htmlFor="all-categories">الكل</label>
            <div onClick={()=>setToggle(!toggle)}>
                    <InputButton  type='checkbox' placeholder="" name="" id="all-categories" />
            </div>
        </div>
        {/**************@to-do map categories*************/}
        {
            categories.slice(0,!toggle?3:categories.length).map((category) => (
        <div key={category.id} className="flex justify-between items-center w-1/2">
            <label className="cursor-pointer " htmlFor={category.id}>{category.title}</label>
            <div>
                <InputButton type='checkbox' placeholder="" name="" id={category.id} />
            </div>
        </div>
            ))
        }

        {/* Reload More Categories */}
        <span onClick={()=>setToggle(!toggle)} className="cursor-pointer text-lg text-orange-600">{toggle?'أقل..':'المزيد....'}</span>
    </div>
  )
}
