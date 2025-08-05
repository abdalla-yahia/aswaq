'use client'
import { useState } from "react";
import InputButton from "../../../Bottons/Input-button";
import categories from "@/utils/Get_All_Categories"

export default function Filter_By_Category() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="filter-by-category border-b pb-2 flex w-full flex-col justify-center items-start">
            <h2 className="text-[8px] md:text-xl font-bold my-4 hidden md:block">تصنيف بالنوع</h2>
            <div className="flex justify-between items-center w-1/2">
                <label className="cursor-pointer " htmlFor="all-categories">الكل</label>
                <div onClick={() => setToggle(!toggle)}>
                    <InputButton type='checkbox' placeholder="" name="" id="all-categories" />
                </div>
            </div>
            {/**************@to-do map categories*************/}
            {
                categories?.slice(0, !toggle ? 3 : categories?.length)?.map((category) => (
                    <div key={category?.id} className="flex justify-between items-center w-1/2">
                        <label className="cursor-pointer " htmlFor={category?.id as unknown as string}>{category?.title}</label>
                        <div>
                            {/****************** @To-Do filter Products by Category *****************/}
                            <InputButton type='checkbox' placeholder="" name="" id={category?.id as unknown as string} />
                        </div>
                    </div>
                ))
            }

            {/* Reload More Categories */}
            <span onClick={() => setToggle(!toggle)} className="cursor-pointer text-lg text-orange-600">{toggle ? 'أقل..' : 'المزيد....'}</span>
        </div>
    )
}
