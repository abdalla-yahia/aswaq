import ProductCard from "@/components/Products/Card/Product-Card";
import SectionName from "@/utils/SectionName";
import products from '@/db/products_dataset.json';
import Image from "next/image";

export default function TopSalesHome() {
      const RandomProduct = [];
      for(let i=0; i< 12 ;i++){
        const randomNum = Math.floor(Math.random() * products?.data?.length);
            if(randomNum !== (0 || 70)){
              RandomProduct.push(products.data[randomNum])
            }else RandomProduct.push(products.data[15])
      }
    

  return (
    <section className="w-full">
      <SectionName text="الأكثر مبيعاً" btn={true} btnText="المزيد..." href="/products" />
      <div className="w-full flex justify-between items-start">
          {/**Products Container*/}
          <div className="w-3/4 h-fit  flex justify-between items-start gap-0 flex-wrap p main">
            
          {
            RandomProduct?.map((product) => (
              <ProductCard id={product?.id as unknown as string} key={product?.id} img={product?.image} title={product?.title} describtion={product?.description} price={product?.price} rate={product?.rating} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            ))
          }
          </div>
          {/**Aside Image*/}
          <div className="w-1/4">
            <Image loading="lazy" src={RandomProduct[5]?.image} alt={RandomProduct[5]?.title} width={450} height={450} className="w-full h-full mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          </div>
      </div>
    </section>
  )
}
