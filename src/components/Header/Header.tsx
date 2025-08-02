import Logo from "./Logo/Logo";
import Navlink from "./Navbar/Navlink";
import Search from "./Search/Search";
import SubNavBar from "./SubNavbar/SubNavBar";

export default function Header() {
  return (
    <div className="w-full flex flex-col justify-start items-start fixed top-0 left-0 z-50  shadow-soft  rounded" >
        <div className="w-full flex justify-evenly items-center bg-accent text-forground p-1 rounded" >
          <Navlink />
          <Search />
          <Logo />
        </div>
        <SubNavBar />
    </div>

  )

}
