import BrandCard from "@/components/Brands/Brand-Card/Brand-Card";
import products from '@/db/products_dataset.json';

export default function Brands() {
  return (
    <section className="flex flex-col justify-start items-start p-main">
        <h1 className="mb-5 text-3xl ">كل الماركات</h1>
        {/**All Brands */}
        <div className="flex flex-wrap justify-between items-start p-main">
            {
                products?.data?.map((product) => (
                  <BrandCard key={product?.id} img={product?.image} title={product?.title} color= {''}   className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform" />
                ))
              }
        </div>
    </section>
  )
}
