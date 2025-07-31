import WafesSvgHome from "@/utils/Wafes-Svg-Home";
import BrandCarousel from "./Brands/BrandsCarousel-Home";
import Slider from "./Landing/Slider";
import TopProductsHome from "./Top-Products/Top-Products-Home";
import TopSalesHome from "./Top-Sales/Top-Sales-Home";
import TopCategoriesHome from "./Categories/Top-Categories-Home";
import AnewAddHome from "./Anew-Add/Anew-Add";


export default function Home() {
  return (
    <div className="w-full flex flex-col justify-start items-start pb-20">
    <Slider />
    <TopProductsHome />
    <BrandCarousel />
    <AnewAddHome />
    <WafesSvgHome />
    <TopCategoriesHome />
    <TopSalesHome />
    </div>
  )
}
