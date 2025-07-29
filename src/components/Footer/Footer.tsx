import Link from "next/link";
import * as icon from '@/utils/Icons/Icons'
export default function Footer() {
  return (
        <div className="w-full flex justify-evenly items-center bg-accent text-foreground p-1 rounded" >
            <div>
            <hr className="my-0 border-white  sm:mx-auto z-0 lg:my-8" />
                    <span className="flex justify-center items-center md:block max-w-full text-sm text-text_color sm:text-center">جميع الحقوق محفوظة  ©  {new Date().getFullYear()} <Link href="mailto:abdalla_y2007@yahoo.com/" className="hover:underline text-orange-600 font-bold text-lg">موقع طالب علم™ </Link> </span>
                  </div><br></br>
                  {/**Site Owner */}
                          <div className=" max-w-full flex justify-center items-center md:block lg:block  text-sm text-gray-200 text-center">تم تصميم وتطوير الموقع بواسطة  
                            <Link href="https://www.linkedin.com/in/abdalla-yahia/" target="_blank" className="hover:underline text-blue-700 font-bold text-lg flex justify-center items-center">م / عبدالله يحيى 
                              <span className="text-red-600">™</span>
                              <span className=" max-w-full text-sm text-gray-200 sm:text-center">جميع الحقوق محفوظة  ©</span>
                                </Link><span> للتواصل: 
                                  <icon.FaWhatsapp className="text-green-700 inline-flex mx-2"/>
                                  <Link href="https://wa.me/201211100554?text=مرحباً%مهندس/%20!!%عبدالله%أرغب%في%20التواصل%20معكم%20لتطوير%20موقع" target="_blank">01211100554</Link></span> 
                          </div>
                  <br></br>
        </div>
  )
}
