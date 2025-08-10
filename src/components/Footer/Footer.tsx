'use client'
import Link from "next/link";
import * as icon from '@/utils/Icons/Icons'
import Image from "next/image";
import { SetStateAction, useState } from "react";
export default function Footer() {
    const [email,setEmail] = useState<SetStateAction<string>>('')
  return (
    <>
    
<footer className="bg-accent font-sans ">
    <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">كن على تواصل باخر الأخبار</h1>

                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input onChange={(e)=>setEmail(e.target.value)} id="email" type="email" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-100 dark:border-gray-200 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="البريد الإلكتروني" />
            
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-600 focus:ring-opacity-80">
                        إرسال
                    </button>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">روابط سريعه</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <p className="text-gray-800 transition-colors duration-300 dark:text-gray-600 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">الرئيسيه</p>
                    <p className="text-gray-800 transition-colors duration-300 dark:text-gray-600 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">من نحن ؟</p>
                    <p className="text-gray-800 transition-colors duration-300 dark:text-gray-600 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">تواصل معنا</p>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">اقسام الموقع</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <p className="text-gray-800 transition-colors duration-300 dark:text-gray-600 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">منتجات غذائية</p>
                    <p className="text-gray-800 transition-colors duration-300 dark:text-gray-600 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">ملابس</p>
                    <p className="text-gray-800 transition-colors duration-300 dark:text-gray-600 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">أجهزة الكترونية</p>
                </div>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />
        
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
                <Image src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="" />
                <Image src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="" />
            </div>
            
            <div className="flex gap-4 hover:cursor-pointer">
                <Image src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <Image src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <Image src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                <Image src="https://www.svgrepo.com/show/94698/github.svg" className="" width="30" height="30" alt="gt" />
                <Image src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                <Image src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                <Image src="https://www.svgrepo.com/show/22048/dribbble.svg" className="" width="30" height="30" alt="db" />
            </div>
        </div>
        {/**Site Owner */}
         <div className="w-full flex flex-col justify-center items-center  text-foreground p-1 rounded" >
            <div>
                    <span className="flex justify-center items-center md:block max-w-full text-sm text-text_color sm:text-center">جميع الحقوق محفوظة  ©  {new Date().getFullYear()} <Link href="mailto:abdalla_y2007@yahoo.com/" className="hover:underline text-orange-600 font-bold text-lg">متجر اسواق ™ </Link> </span>
                  </div><br></br>
                  {/**Site Owner */}
                          <div className=" max-w-full flex justify-center items-center md:block lg:block  text-sm text-muted text-center">تم تصميم وتطوير الموقع بواسطة  
                            <Link href="https://www.linkedin.com/in/abdalla-yahia/" target="_blank" className="hover:underline text-blue-700 font-bold text-lg flex justify-center items-center">م / عبدالله يحيى 
                              <span className="text-red-600">™</span>
                              <span className=" max-w-full text-sm text-muted sm:text-center">جميع الحقوق محفوظة  ©</span>
                                </Link><span> للتواصل: 
                                  <icon.FaWhatsapp className="text-green-700 inline-flex mx-2"/>
                                  <Link href="https://wa.me/201211100554?text=مرحباً%مهندس/%20!!%عبدالله%أرغب%في%20التواصل%20معكم%20لتطوير%20موقع" target="_blank" className="text-muted">01211100554</Link></span> 
                          </div>
                  <br></br>
        </div>
    </div>
</footer>
       
        </>
  )
}
