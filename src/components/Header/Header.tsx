import Logo from "./Logo/Logo";
import Navlink from "./Navbar/Navlink";
import Search from "./Search/Search";
import SubNavBar from "./SubNavbar/SubNavBar";
import * as icon from '@/utils/Icons/Icons';

export default function Header() {
  return (
    <div className="w-full  flex flex-col justify-start items-start fixed top-0 left-0 z-50  shadow-soft rounded" >
        <div className="w-full flex-col md:flex-row flex-wrap md:flex-nowrap flex justify-center items-center bg-accent text-black p-1 px-3 rounded gap-0" >
          <Navlink />
          <Search />
          <Logo />
        </div>
        <SubNavBar />
        <p className="text-[10px] flex justify-center text-gray-900 absolute top-0 left-0 p-0 bg-yellow-500 w-full text-center">ملحوظه:- الموقع مازال تحت الإنشاء ولم يتم  اخراج النسخة النهائية وهذه النسخة تحدث يومياً
          <icon.IoWarning className="text-orange-600 text-lg absolute left-5" />
          <icon.IoWarning className="text-orange-600 text-lg animate-ping absolute left-5" />
        </p>
    </div>

  )

}
