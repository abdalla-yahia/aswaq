import Logo from "./Logo";
import Navlink from "./Navlink";
import Search from "./Search";

export default function Header() {
  return (
    <div className="w-full flex justify-evenly items-center bg-accent text-forground p-1 rounded" >
        <Navlink />
        <Search />
        <Logo />
    </div>
  )

}
