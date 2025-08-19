'use client';
import ProductCard from "@/components/Products/Card/Product-Card";
import { GET_ALL_PRODUCTS } from "@/Graphql/Schemas/ProducrQuery";
import { CreateProductType } from "@/types/types";
import { useQuery } from "@apollo/client";

export default function Similar_Products({category,brand}:{category?:string,brand?:string}) {
      const {data: Allproducts} = useQuery(GET_ALL_PRODUCTS, {
        fetchPolicy: 'cache-and-network'})
      const Getproducts = Allproducts?.GetAllProducts
  const similarProducts = Getproducts?.products?.filter((product:CreateProductType) => product?.category?.name === category || product?.brand?.name === brand);
  return (
    <div className="w-full py-6 px-2">
      <h1 className="mb-5 text-3xl">منتجات مشابهة </h1>
      <div className="w-full min-h-[400px]  flex justify-between items-start gap-0 flex-wrap p main">
    {
          similarProducts?.slice(0,12)?.map((product:CreateProductType) => (
                <ProductCard slug={product?.slug as string} key={Number(product?.id)} id={product?.id as unknown as string} img={product?.image as string} title={product?.title} describtion={product?.description as string} price={product?.price} rate={product?.rating as number} category={product?.category?.name as string} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          ))
      }
      </div>
    </div>
  )
}
