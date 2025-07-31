import ProductCard from "@/components/Products/Card/Product-Card";

export default function Suggested_Products() {
  return (
    <div className="w-full p-main">
      <h1 className="mb-5 text-3xl">منتجات قد تعجبك </h1>
      <div className="w-full min-h-[400px]  flex justify-between items-start gap-2 flex-wrap p main">
        <ProductCard img={'https://static.vecteezy.com/system/resources/previews/059/250/927/non_2x/stylish-orange-headphones-displayed-on-a-clean-transparent-background-for-modern-audio-enthusiasts-orange-headphone-product-photo-isolated-on-transparent-background-free-png.png'} title={'سماعات رأس'} describtion={'سماعات رأس عالية الجوده بخاصية عزل الصوت'} price={150.50} rate={4.5} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
        <ProductCard img={'https://static.vecteezy.com/system/resources/previews/053/178/045/non_2x/clear-blue-bottles-with-pump-dispenser-for-liquid-products-free-png.png'} title={'دواني'} describtion={'داوني طبيعي  من اعلي خامة ورائحة فوق الخيال'} price={4500.75} rate={3.9} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
        <ProductCard img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'تي شيرت رجالي'} describtion={'تي شيرت رجالي مصنوع من افخم انواع القطن المصري '} price={350.85} rate={4.2} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
        <ProductCard img={'https://static.vecteezy.com/system/resources/previews/055/183/983/non_2x/gaming-mouse-design-showcase-digital-space-product-image-free-png.png'} title={'فأرة كمبيوتر'} describtion={'ماوس ليزر بسرعة استجابة 3.7 جيجا هرتز'} price={85.99} rate={4.8} className="w-full md:w-1/3 lg:w-1/5 xl:w-1/6 mb-4 cursor-pointer text-center hover:-translate-y-2 transition-transform" />
      </div>
    </div>
  )
}
