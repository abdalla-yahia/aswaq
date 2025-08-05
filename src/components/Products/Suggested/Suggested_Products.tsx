import ProductCard from "@/components/Products/Card/Product-Card";
import products from '@/db/products_dataset.json';

export default function Suggested_Products() {
    const RandomProduct = [];
  for(let i=0; i< 12 ;i++){
    const randomNum = Math.floor(Math.random() * products?.data?.length);
        if(randomNum !== (0 || 70)){
          RandomProduct.push(products.data[randomNum])
        }else RandomProduct.push(products.data[15])
  }
  return (
    <div className="w-full py-6 px-2">
      <h1 className="mb-5 text-3xl">منتجات قد تعجبك </h1>
      <div className="w-full min-h-[400px]  flex justify-between items-start gap-0 flex-wrap p main">
      {
            RandomProduct?.map((product) => (
              <ProductCard id={product?.id as unknown as string} key={product?.id} img={product?.image} title={product?.title} describtion={product?.description} price={product?.price} rate={product?.rating} category={product?.category} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            ))
        }
      </div>
    </div>
  )
}
