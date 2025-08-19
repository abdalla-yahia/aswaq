'use client'
import FilterMenue from "@/utils/Menus/Filter-Menues/Filter-Menue"
import ProductCard from "../Products/Card/Product-Card"
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "@/Graphql/Schemas/ProducrQuery";
import { CreateProductType } from "@/types/types";


export default function All_Products() {
const {data: Allproducts} = useQuery(GET_ALL_PRODUCTS, {
        fetchPolicy: 'cache-and-network'})
      const products = Allproducts?.GetAllProducts?.products

  return (
    <section className="category py-8 w-full flex flex-col justify-start items-start gap-5">
      {/**Page Title */}
      <h1 className="mb-5 text-3xl flex justify-center items-center">كل المنتجات
 
      </h1>
      {/**Page Container */}
      <div className="flex w-full justify-between items-start gap-5">
        {/**Asid Filter Menue */}
        <div className="flex w-2/6 md:w-1/6 justify-between items-start gap-2">
          <FilterMenue />
        </div>
        {/**Products Of Category */}
        <div className="flex flex-col justify-center items-start gap-2 w-4/6 md:w-5/6">

          {/**Products */}
            <div className="flex w-full justify-between items-start flex-wrap ">
              {
                products?.data?.map((product:CreateProductType) =>

                <ProductCard  slug={product?.slug as string} key={Number(product?.id)} id={product?.id as unknown as string} img={product?.image as string} title={product?.title} describtion={product?.description as string} price={product?.price} rate={product?.rating as number} category={product?.category?.name as string} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
                )
              }
            </div>
        </div>
      </div>

    </section>
  )
}
