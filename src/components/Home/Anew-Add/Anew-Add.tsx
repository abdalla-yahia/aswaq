import ProductCard from "@/components/Products/Card/Product-Card";
import SectionName from "@/utils/SectionName";
import Image from "next/image";
import products from '@/db/products_dataset.json'
export default function AnewAddHome() {
  return (
    <section className="w-full">
      <SectionName text="المضاف حديثأ" btn={true} btnText="المزيد..." href="/products" />
      <div className="w-full flex justify-between items-start">
          <div className="w-1/4">
            <Image loading="lazy" src={'https://static.vecteezy.com/system/resources/previews/042/154/802/non_2x/ai-generated-beautiful-women-dress-isolated-on-transparent-background-free-png.png'} alt={'تي شيرت رجالي'} width={450} height={450} className="w-full mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
          </div>
          <div className="w-3/4 h-fit  flex justify-between items-start gap-2 flex-wrap p main">
            {/* <ProductCard img={'https://static.vecteezy.com/system/resources/previews/059/250/927/non_2x/stylish-orange-headphones-displayed-on-a-clean-transparent-background-for-modern-audio-enthusiasts-orange-headphone-product-photo-isolated-on-transparent-background-free-png.png'} title={'سماعات رأس'} describtion={'سماعات رأس عالية الجوده بخاصية عزل الصوت'} price={150.50} rate={4.5} className="w-full md:w-1/3 lg:w-1/5 max-h-[200px] overflow-hidden xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            <ProductCard img={'https://static.vecteezy.com/system/resources/previews/055/183/983/non_2x/gaming-mouse-design-showcase-digital-space-product-image-free-png.png'} title={'فأرة كمبيوتر'} describtion={'ماوس ليزر بسرعة استجابة 3.7 جيجا هرتز'} price={85.99} rate={4.8} className="w-full md:w-1/3 lg:w-1/5 max-h-[200px] overflow-hidden xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            <ProductCard img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 max-h-[200px] overflow-hidden xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            <ProductCard img={'https://static.vecteezy.com/system/resources/previews/059/250/927/non_2x/stylish-orange-headphones-displayed-on-a-clean-transparent-background-for-modern-audio-enthusiasts-orange-headphone-product-photo-isolated-on-transparent-background-free-png.png'} title={'سماعات رأس'} describtion={'سماعات رأس عالية الجوده بخاصية عزل الصوت'} price={150.50} rate={4.5} className="w-full md:w-1/3 lg:w-1/5 max-h-[200px] overflow-hidden xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            <ProductCard img={'https://static.vecteezy.com/system/resources/previews/042/154/802/non_2x/ai-generated-beautiful-women-dress-isolated-on-transparent-background-free-png.png'} title={'دواني'} describtion={'داوني طبيعي  من اعلي خامة ورائحة فوق الخيال'} price={4500.75} rate={3.9} className="w-full md:w-1/3 lg:w-1/5 max-h-[200px] overflow-hidden xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            <ProductCard img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 max-h-[200px] overflow-hidden xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            <ProductCard img={'https://static.vecteezy.com/system/resources/previews/053/178/045/non_2x/clear-blue-bottles-with-pump-dispenser-for-liquid-products-free-png.png'} title={'دواني'} describtion={'داوني طبيعي  من اعلي خامة ورائحة فوق الخيال'} price={4500.75} rate={3.9} className="w-full md:w-1/3 lg:w-1/5 max-h-[200px] overflow-hidden xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            <ProductCard img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 max-h-[200px] overflow-hidden xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            <ProductCard img={'https://static.vecteezy.com/system/resources/previews/055/183/983/non_2x/gaming-mouse-design-showcase-digital-space-product-image-free-png.png'} title={'فأرة كمبيوتر'} describtion={'ماوس ليزر بسرعة استجابة 3.7 جيجا هرتز'} price={85.99} rate={4.8} className="w-full md:w-1/3 lg:w-1/5 max-h-[200px] overflow-hidden xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            <ProductCard img={'https://static.vecteezy.com/system/resources/previews/053/178/045/non_2x/clear-blue-bottles-with-pump-dispenser-for-liquid-products-free-png.png'} title={'دواني'} describtion={'داوني طبيعي  من اعلي خامة ورائحة فوق الخيال'} price={4500.75} rate={3.9} className="w-full md:w-1/3 lg:w-1/5 max-h-[200px] overflow-hidden xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" /> */}
          {
            products.data.map((product) => (
              <ProductCard key={product.id} img={product.image} title={product.title} describtion={product.description} price={product.price} rate={product.rating} className="w-full md:w-1/3 lg:w-1/5 max-h-[200px] overflow-hidden xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
            ))
          }
          </div>
      </div>
    </section>
  )
}
