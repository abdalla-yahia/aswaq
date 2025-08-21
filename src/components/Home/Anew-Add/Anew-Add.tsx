'use client'
import ProductCard from "@/components/Products/Card/Product-Card";
import SectionName from "@/utils/SectionName";
import Image from "next/image";
// import products from '@/db/products_dataset.json';
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "@/Graphql/Schemas/ProducrQuery";
import { CreateProductType } from "@/types/types";

export default function AnewAddHome() {
  /** 
   * Generate a random selection of products
   * to display on the home page.
   * Exclude the first and last product
   * to avoid displaying the same items repeatedly.
   */
  const {data: Allproducts,error,loading} = useQuery(GET_ALL_PRODUCTS, {
    fetchPolicy: 'cache-and-network'})
  const products = Allproducts?.GetAllProducts?.products
  if (loading) return <p>جاري تحميل المنتجات...</p>;
  if (error) return <p>حدث خطأ: {error.message}</p>;
  return (
    <section className="w-full px-2">
      <SectionName text="المضاف حديثأ" btn={true} btnText="المزيد..." href="/products" />
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
          {/**Aside Image*/}
          <div className="w-full md:w-1/4">
            <Image loading="lazy" src={products?.[5]?.image} alt={products?.[5]?.title} width={450} height={450} className="w-full h-full mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          </div>
          {/**Products Container*/}
          <div className="w-full md:w-3/4 h-fit  flex justify-between items-start gap-0 flex-wrap py-8 px-3">
            
          {
            products?.map((product:CreateProductType) => (
              <ProductCard  slug={product?.slug as string} id={product?.id as unknown as string} key={product?.id} img={product?.image as string} title={product?.title} describtion={product?.description as string} price={product?.price} rate={product?.rating as number} category={product?.category?.name as string} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            ))
          }
          </div>
      </div>
    </section>
  )
}
