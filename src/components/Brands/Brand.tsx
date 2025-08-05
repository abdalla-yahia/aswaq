import FilterMenue from "@/utils/Menus/Filter-Menues/Filter-Menue"
import ProductCard from "../Products/Card/Product-Card"
import Suggested_Products from "../Products/Suggested/Suggested_Products"
import Similar_Products from "../Products/Similar/Similar_Products"
import products from '@/db/products_dataset.json';
import Image from "next/image";
import images from '@/db/imagesbanner.json';

export default function Brand({ brand }: { brand: string }) {
  const ProductsOfBrand = products?.data?.filter(product => product?.brand === brand)
  const randomNumber = Math.floor(Math.random() * 13)
  return (
    <section className="Brand w-full py-8 flex flex-col justify-start items-start gap-0">
      {/**Page Title */}
      <h1 className="mb-5 text-3xl flex justify-center items-center">قائمة منتجات
        <span className="mb-5  text-3xl mx-2 text-accent"> {brand} </span>
        <Image src={ProductsOfBrand[0]?.brandImage} alt={brand} width={40} height={40} />
      </h1>
      {/**Page Container */}
      <div className="flex w-full justify-between items-start gap-5">
        {/**Asid Filter Menue */}
        <div className="flex w-1/6 md:2/6 justify-between items-start gap-2">
          <FilterMenue />
        </div>
        {/**Products Of Brand */}
        <div className="flex flex-col justify-center items-start gap-2 w-5/6 md:4/6">
            {/**Banner Image*/}
          <div style={{backgroundImage:`url(${images?.data[randomNumber]?.image})`}} className="w-full bg-cover mix-blend-screen h-[100px] md:h-[200px] mb-4 bg-white/70 rounded-lg shadow-md">
            <Image src={ProductsOfBrand[0]?.brandImage} alt={brand} width={100} height={100} className="w-full  h-[100px] md:h-[200px]"/>
          </div>
          {/**Products */}
          <div className="flex w-full justify-between items-start flex-wrap gap-0">
            {
              ProductsOfBrand?.map(product =>
                <ProductCard key={product?.id} id={product?.id as unknown as string} img={product?.image} title={product?.title} describtion={product?.description} price={product?.price} rate={product?.rating} category={product?.category} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
              )
            }
          </div>
        </div>
      </div>
      {/**Suggested Products */}
      <Suggested_Products />
      {/**Similar Products */}
      <Similar_Products brand={brand} />
    </section>
  )
}
