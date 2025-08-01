import ProductCard from "@/components/Products/Card/Product-Card";
import SectionName from "@/utils/SectionName";
import products from '@/db/products_dataset.json';

export default function TopSalesHome() {
      const RandomProduct = [];
      for(let i=0; i< 10 ;i++){
        const randomNum = Math.floor(Math.random() * products?.data?.length - 8);
        RandomProduct.push(products.data[randomNum])
      }
  
  return (
    <section className="w-full">
      <SectionName text="الأكثر مبيعاً" btn={true} btnText="المزيد..." href="/products" />
      <div className="w-full min-h-[400px]  flex justify-between items-start gap-2 flex-wrap p main">
        {
            RandomProduct?.map((product) => (
              <ProductCard id={product?.id as unknown as string} key={product?.id} img={product?.image} title={product?.title} describtion={product?.description} price={product?.price} rate={product?.rating} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            ))
          }
      </div>
    </section>
  )
}
