import ProductCard from "@/components/Products/Card/Product-Card";
import products from '@/db/products_dataset.json';

export default function ProductsHomePage() {
  return (
    <section className="flex flex-col justify-start items-start p-main">
            <h1 className="mb-5 text-3xl ">كل المنتجات</h1>
            {/**All Products */}
            <div className="flex flex-wrap justify-between items-start p-main gap-2">
            {
                  products?.data?.map((product) => (
                    <ProductCard id={product?.id as unknown as string} key={product?.id} img={product?.image} title={product?.title} describtion={product?.description} price={product?.price} rate={product?.rating} category={product?.category} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4  cursor-pointer text-center hover:-translate-y-2 transition-transform" />
                  ))
                }
            </div>
        </section>
  )
}
