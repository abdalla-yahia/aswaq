'use client';
import ProductCard from "@/components/Products/Card/Product-Card";
import SectionName from "@/utils/SectionName";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "@/Graphql/Schemas/ProducrQuery";
import { CreateProductType } from "@/types/types";

export default function TopProductsHome({count,title}:{count:number,title:string}) {
    const {data: Allproducts} = useQuery(GET_ALL_PRODUCTS, {
      fetchPolicy: 'cache-and-network'})
    const products = Allproducts?.GetAllProducts?.products
  
  return (
    <section className="w-full flex flex-col justify-center items-start">
      <SectionName text={title} btn={true} btnText="المزيد..." href="/products" />
      <div className="w-full relative  self-center scrollbar-none min-h-[300px] overflow-x-scroll  flex justify-between items-start gap-0 flex-nowrap ">
        {
                   products?.slice(0,count)?.map((product:CreateProductType) => (
                     <ProductCard  slug={product?.slug as string} id={product?.id as unknown as string} key={Number(product.id)} img={product?.image as string} title={product?.title} describtion={product?.description as string} price={product?.price} rate={product?.rating as number} category={product?.category?.name as string} className=" mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
                   ))
                 }
      </div>
    </section>
  )
}
