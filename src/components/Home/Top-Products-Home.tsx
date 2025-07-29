import ProductCard  from "@/utils/Card/Product-Card";
import SectionName from "@/utils/SectionName";

export default function TopProductsHome() {
  return (
    <>
    <SectionName text="أفضل المنتجات" btn={true} btnText="المزيد..." />
    <div className="w-full min-h-[400px] flex justify-between items-start gap-2 flex-wrap p main">
        <ProductCard img={'/products/black-headphone.png'} title={'سماعات رأس'} describtion={'سماعات رأس عالية الجوده بخاصية عزل الصوت'} price={150.50} rate={4.5}  className="w-full md:w-1/2 lg:w-1/6 xl:w-1/5 mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
        <ProductCard img={'/products/dawny.png'} title={'دواني'} describtion={'داوني طبيعي  من اعلي خامة ورائحة فوق الخيال'} price={4500.75} rate={3.9}  className="w-full md:w-1/2 lg:w-1/6 xl:w-1/5 mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
        <ProductCard img={'/products/haresa.png'} title={'هريسة للأكل'} describtion={'هريسة مصنوعه من أجود الانواع وبأفضل التوابل والبهارات '} price={350.85} rate={4.2}  className="w-full md:w-1/2 lg:w-1/6 xl:w-1/5 mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
        <ProductCard img={'/products/mouse.png'} title={'فأرة كمبيوتر'} describtion={'ماوس ليزر بسرعة استجابة 3.7 جيجا هرتز'} price={85.99} rate={4.8}  className="w-full md:w-1/2 lg:w-1/6 xl:w-1/5 mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
    </div>
    </>
  )
}
