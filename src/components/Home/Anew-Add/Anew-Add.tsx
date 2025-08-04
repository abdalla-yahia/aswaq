import ProductCard from "@/components/Products/Card/Product-Card";
import SectionName from "@/utils/SectionName";
import Image from "next/image";
import products from '@/db/products_dataset.json';

export default function AnewAddHome() {
  const RandomProduct = [];
  for(let i=0; i< 12 ;i++){
    const randomNum = Math.floor(Math.random() * products?.data?.length);
    if(randomNum !== (0 || 70)){
      RandomProduct.push(products.data[randomNum])
    }else RandomProduct.push(products.data[15])
  }
  return (
    <section className="w-full">
      <SectionName text="المضاف حديثأ" btn={true} btnText="المزيد..." href="/products" />
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
          {/**Aside Image*/}
          <div className="w-1/4">
            <Image loading="lazy" src={RandomProduct[5]?.image} alt={RandomProduct[5]?.title} width={450} height={450} className="w-full h-full mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          </div>
          {/**Products Container*/}
          <div className="w-3/4 h-fit  flex justify-between items-start gap-0 flex-wrap p main">
            
          {
            RandomProduct?.map((product) => (
              <ProductCard id={product?.id as unknown as string} key={product?.id} img={product?.image} title={product?.title} describtion={product?.description} price={product?.price} rate={product?.rating} category={product?.category} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            ))
          }
          </div>
      </div>
    </section>
  )
}
