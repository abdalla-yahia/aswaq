'use client';
import FilterMenue from "@/utils/Menus/Filter-Menues/Filter-Menue"
import ProductCard from "../Products/Card/Product-Card"
import Suggested_Products from "../Products/Suggested/Suggested_Products"
import Similar_Products from "../Products/Similar/Similar_Products"
import Image from "next/image";
import images from '@/db/imagesbanner.json';
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "@/Graphql/Schemas/ProducrQuery";
import { CreateProductType } from "@/types/types";


export default function Category({ category }: { category: string }) {
  /** * Fetch all products from the GraphQL API
   * and filter them based on the selected category
   * * @param {string} category - The category to filter products by
   */

    const {data: Allproducts} = useQuery(GET_ALL_PRODUCTS, {
      fetchPolicy: 'cache-and-network'})
    const products = Allproducts?.GetAllProducts?.products
  
  const ProductsOfCategory = products?.data?.filter((product:CreateProductType) => product?.category?.name === category)
  const randomNumber = Math.floor(Math.random() * 13)

  return (
    <section className="category py-8 w-full flex flex-col justify-start items-start gap-5">
      {/**Page Title */}
      <h1 className="mb-5 text-3xl flex justify-center items-center">قائمة منتجات
        <h2 className="mb-5 text-3xl text-red-500 mx-5"> {category.toString()} </h2>
        <Image src={products?.[0]?.category?.image} alt={category} width={40} height={40} />
      </h1>
      {/**Page Container */}
      <div className="flex w-full justify-between items-start gap-5">
        {/**Asid Filter Menue */}
        <div className="flex w-2/6 md:w-1/6 justify-between items-start gap-2">
          <FilterMenue />
        </div>
        {/**Products Of Category */}
        <div className="flex flex-col justify-center items-start gap-2 w-4/6 md:w-5/6">
          {/**Banner Image*/}
            <div style={{backgroundImage:`url(${images?.data[randomNumber]?.image})`}} className="w-full bg-cover h-[100px] md:h-[200px] flex justify-center items-center mb-4 bg-white/70 rounded-lg shadow-md">
              <Image src={products?.[0]?.category?.image} alt={category} width={250} height={150} className="w-[120px] md:w-[250px]  h-fit md:h-[200px]"/>
            </div>
          {/**Products */}
            <div className="flex w-full justify-between items-start flex-wrap ">
              {
                ProductsOfCategory?.map((product:CreateProductType) =>

                  <ProductCard key={Number(product?.id)} id={product?.id as unknown as string} img={product?.image as string} title={product?.title} describtion={product?.description as string} price={product?.price} rate={product?.rating as number} category={product?.category?.name as string} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
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
