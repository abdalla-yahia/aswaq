'use client'
import Link from "next/link"
import { useEffect, useState } from "react"

const uls = [
    {id:1,name:'رجالي',href:'#'},
    {id:2,name:'حريمي',href:'#'},
    {id:3,name:'أطفالي',href:'#'},
    {id:4,name:'بناتي',href:'#'},
    {id:5,name:'ساعات',href:'#'},
    {id:6,name:'أحذية',href:'#'},
    {id:7,name:'كمبيوتر',href:'#'},
    {id:8,name:'شاشات',href:'#'},
    {id:9,name:'مطبخ',href:'#'},
    {id:10,name:'مفروشات',href:'#'},
    {id:11,name:'كريمات',href:'#'},
    
]
export default function SubNavBar() {
    const [count,setCount]=useState(5)
    const [toggle,setToggle]=useState(false)
    useEffect(()=>{
        if(toggle){
            setCount(uls.length)
        }else setCount(5)
    },[toggle])
  return (
    <nav className="w-full bg-highlight">
        <ul className="w-full flex justify-start items-start pr-5 gap-5">
            {
                uls.slice(0,count).map(ele=>{
                    return(
                        <li className="hover:text-blue-500" key={ele.id}>
                            <Link href={ele.href}>{ele.name}</Link>
                        </li>
                    )
                }
                )
            }
            <li className="cursor-pointer" onClick={()=>setToggle(!toggle)}>
                {toggle?<span className="text-blue-500 cursor-pointer text-lg font-bold">أقل..</span>:<span className="text-orange-500 cursor-pointer text-lg font-bold">أكثر....</span>}
            </li>
        </ul>
    </nav>
  )
}
