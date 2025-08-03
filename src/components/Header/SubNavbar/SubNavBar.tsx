'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import categories from "@/utils/Get_All_Categories"
import DropDown from "@/components/Header/DropDown/DropDown"


export default function SubNavBar() {
    const [count,setCount]=useState(5)
    const [toggle,setToggle]=useState(false)
    const [show,setShow]=useState(false)

    useEffect(()=>{
        if(toggle){
            setCount(categories?.length)
        }else setCount(5)
    },[toggle])

    const handleClicked =(e:React.MouseEvent<HTMLDivElement>)=>{
           const target = e.target as HTMLElement;
                if (target.closest('a')) {
                setShow(false);
                }

    }
  return (
    <nav className="w-full bg-background">
        <ul className="w-full bg-background flex justify-start items-start pr-5 gap-0 overflow-scroll scrollbar-none">
            {
                categories?.slice(0,count).map(category=>{
                    return(
                        <li onMouseEnter={() => setShow(true)}
                            onMouseLeave={() => setShow(false)}
                            className="hover:bg-accent hover:text-black transition-all group px-5" key={category?.id}>
                                <Link href={`/categories/${category.title}`}>{category?.title}</Link>
                            <div onClick={(e)=>handleClicked(e)} 
                            className={`menu_category transition-all hidden group-hover:block absolute z-50 top-[150px] right-0 min-h-[400px] bg-[#f1f9fd] min-w-full 
                            ${show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                            `}>
                                <DropDown  category={category}/>
                            </div>
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
