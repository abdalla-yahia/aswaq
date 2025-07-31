import Logo from "./Logo/Logo";
import Navlink from "./Navbar/Navlink";
import Search from "./Search/Search";

export default function Header() {
  return (
    <div className="w-full flex fixed top-0 left-0 z-50  shadow-soft justify-evenly items-center bg-accent text-forground p-1 rounded" >
        <Navlink />
        <Search />
        <Logo />
    </div>
  )

}
