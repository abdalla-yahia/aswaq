import FilterMenue from "@/utils/Menus/Filter-Menue"
import ProductCard from "../Products/Card/Product-Card"
import Suggested_Products from "../Products/Suggested/Suggested_Products"
import Similar_Products from "../Products/Similar/Similar_Products"


export default function Category({category}:{category:string}) {

  const title=category
  return (
    <section className="category w-full flex flex-col justify-start items-start gap-5">
      <h1 className="mb-5 text-3xl ">قائمة منتجات 
        <h2 className="mb-5 text-3xl text-red-500 mx-5"> {title} </h2>
        </h1>
      <div className="flex w-full justify-between items-start gap-5">
        {/**Asid Filter Menue */}
        <div className="flex w-1/6 md:2/6 justify-between items-start gap-2">
          <FilterMenue />
        </div>
        {/**Products Of Category */}
        <div className="flex w-5/6 md:4/6 justify-between items-start flex-wrap gap-2">
          <ProductCard id={'15'} img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          <ProductCard id={'25'} img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          <ProductCard id={'18'} img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          <ProductCard id={'13'} img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          <ProductCard id={'2'} img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          <ProductCard id={'65'} img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          <ProductCard id={'20'} img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          
        </div>
      </div>
        {/**Suggested Products */}
        <Suggested_Products />
        {/**Similar Products */}
        <Similar_Products category={category}/>
    </section>
  )
}
