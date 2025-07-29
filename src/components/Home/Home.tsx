import BrandCarousel from "./BrandsCarousel-Home";
import Slider from "./Slider";
import TopProductsHome from "./Top-Products-Home";
import TopSalesHome from "./Top-Sales-Home";


export default function Home() {
  return (
    <div className="w-full flex flex-col justify-start items-start pb-20">
    <Slider />
    <TopProductsHome />
    <BrandCarousel />
    <TopSalesHome />
    </div>
  )
}
