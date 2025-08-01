import FilterMenue from "@/utils/Menus/Filter-Menue"
import ProductCard from "../Products/Card/Product-Card"
import Suggested_Products from "../Products/Suggested/Suggested_Products"
import Similar_Products from "../Products/Similar/Similar_Products"

export default function Brand({category}:{category:string}) {

  const title=category
  return (
    <section className="Brand w-full flex flex-col justify-start items-start gap-5">
      <h1 className="mb-5 text-3xl ">قائمة منتجات
        <span className="mb-5 text-3xl mx-2 text-accent"> {title} </span>
        </h1>
      <div className="flex w-full justify-between items-start gap-5">
        {/**Asid Filter Menue */}
        <div className="flex w-1/6 md:2/6 justify-between items-start gap-2">
          <FilterMenue />
        </div>
        {/**Products Of Brand */}
        <div className="flex w-5/6 md:4/6 justify-between items-start flex-wrap gap-2">
          <ProductCard id={'36'} img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          <ProductCard id={'46'} img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          <ProductCard id={'56'} img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          <ProductCard id={'7'} img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          <ProductCard id={'3'} img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          <ProductCard id={'60'} img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          <ProductCard id={'1'} img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          
        </div>
      </div>
        {/**Suggested Products */}
        <Suggested_Products />
        {/**Similar Products */}
        <Similar_Products category={category}/>
    </section>
  )
}
