import ProductCard from "@/components/Products/Card/Product-Card";
import SectionName from "@/utils/SectionName";
import products from '@/db/products_dataset.json';

export default function TopProductsHome({count,title}:{count:number,title:string}) {
  
  return (
    <section className="w-full flex flex-col justify-center items-start">
      <SectionName text={title} btn={true} btnText="المزيد..." href="/products" />
      <div className="w-full relative  self-center scrollbar-none min-h-[300px] overflow-x-scroll  flex justify-between items-start gap-0 flex-nowrap ">
        {
                   products?.data?.slice(0,count).map((product) => (
                     <ProductCard id={product?.id as unknown as string} key={product.id} img={product?.image} title={product?.title} describtion={product?.description} price={product?.price} rate={product?.rating} className=" mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
                   ))
                 }
      </div>
    </section>
  )
}
