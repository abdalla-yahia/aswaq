import FilterMenue from "@/utils/Menus/Filter-Menues/Filter-Menue"
import ProductCard from "../Products/Card/Product-Card"
import Suggested_Products from "../Products/Suggested/Suggested_Products"
import Similar_Products from "../Products/Similar/Similar_Products"
import products from '@/db/products_dataset.json';
import Image from "next/image";


export default function Category({ category }: { category: string }) {
  const ProductsOfCategory = products?.data?.filter(product => product?.category === category)

  return (
    <section className="category w-full flex flex-col justify-start items-start gap-5">
      {/**Page Title */}
      <h1 className="mb-5 text-3xl flex justify-center items-center">قائمة منتجات
        <h2 className="mb-5 text-3xl text-red-500 mx-5"> {category.toString()} </h2>
        <Image src={ProductsOfCategory[0]?.image} alt={category} width={40} height={40} />
      </h1>
      {/**Page Container */}
      <div className="flex w-full justify-between items-start gap-5">
        {/**Asid Filter Menue */}
        <div className="flex w-1/6 md:2/6 justify-between items-start gap-2">
          <FilterMenue />
        </div>
        {/**Products Of Category */}
        <div className="flex flex-col justify-center items-start gap-2 w-5/6 md:4/6">
                  <div className="w-full h-[200px] flex justify-center items-center mb-4 bg-white/70 rounded-lg shadow-md">
                    <Image src={ProductsOfCategory[0]?.image} alt={category} width={50} height={50} className=" h-[200px]"/>
                  </div>
        <div className="flex w-full justify-between items-start flex-wrap ">
          {
            ProductsOfCategory?.map(product =>

              <ProductCard key={product?.id} id={product?.id as unknown as string} img={product?.image} title={product?.title} describtion={product?.description} price={product?.price} rate={product?.rating} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            )
          }
        </div>
        </div>
      </div>
      {/**Suggested Products */}
      <Suggested_Products />
      {/**Similar Products */}
      <Similar_Products category={category} />
    </section>
  )
}
