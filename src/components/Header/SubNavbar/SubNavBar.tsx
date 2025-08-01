'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import categories from "@/utils/Get_All_Categories"


export default function SubNavBar() {
    const [count,setCount]=useState(5)
    const [toggle,setToggle]=useState(false)
    useEffect(()=>{
        if(toggle){
            setCount(categories?.length)
        }else setCount(5)
    },[toggle])
  return (
    <nav className="w-full bg-background">
        <ul className="w-full bg-background flex justify-start items-start pr-5 gap-5 overflow-scroll scrollbar-none">
            {
                categories?.slice(0,count).map(category=>{
                    return(
                        <li className="hover:text-blue-500" key={category?.id}>
                            <Link href={`/categories/${category.title}`}>{category?.title}</Link>
                        </li>
                    )
                }
                )
            }
            <li className="cursor-pointer" onClick={()=>setToggle(!toggle)}>
                {toggle?<span className="text-blue-500 cursor-pointer text-lg font-bold">أقل..</span>:<span className="text-orange-500 cursor-pointer text-lg font-bold">المزيد....</span>}
            </li>
        </ul>
    </nav>
  )
}
