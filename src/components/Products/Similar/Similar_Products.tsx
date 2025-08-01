import ProductCard from "@/components/Products/Card/Product-Card";
import products from '@/db/products_dataset.json';

export default async function Similar_Products({category,brand}:{category?:string,brand?:string}) {

  const similarProducts = products?.data?.filter((product) => product?.category === category || product?.brand === brand);
  return (
    <div className="w-full p-main">
      <h1 className="mb-5 text-3xl">منتجات مشابهة </h1>
      <div className="w-full min-h-[400px]  flex justify-between items-start gap-2 flex-wrap p main">
    {
          similarProducts?.map((product) => (
            <ProductCard id={product?.id as unknown as string} key={product?.id} img={product?.image} title={product?.title} describtion={product?.description} price={product?.price} rate={product?.rating} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          ))
      }
      </div>
    </div>
  )
}
