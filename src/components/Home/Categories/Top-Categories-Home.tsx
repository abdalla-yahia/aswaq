import SectionName from "@/utils/SectionName";
import Marquee from "react-fast-marquee";
import CategoryCard from "../../Categories/Category-Card/Category-Card";

export default function TopCategoriesHome() {
  return (
    <section  className="w-full h-fit">
        <SectionName text="أفضل التصنيفات" btn={true} btnText="المزيد..." href="/categories"/>
        <div dir="ltr" className="flex  justify-center w-full h-fit">
                <Marquee speed={30} autoFill={true} direction="right">
                    <CategoryCard img={'https://static.vecteezy.com/system/resources/previews/059/250/927/non_2x/stylish-orange-headphones-displayed-on-a-clean-transparent-background-for-modern-audio-enthusiasts-orange-headphone-product-photo-isolated-on-transparent-background-free-png.png'} title={'سماعات رأس'} color= {''}   className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
                    <CategoryCard img={'https://static.vecteezy.com/system/resources/previews/053/178/045/non_2x/clear-blue-bottles-with-pump-dispenser-for-liquid-products-free-png.png'} title={'دواني'} color= {''}   className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
                    <CategoryCard img={'https://static.vecteezy.com/system/resources/previews/059/250/927/non_2x/stylish-orange-headphones-displayed-on-a-clean-transparent-background-for-modern-audio-enthusiasts-orange-headphone-product-photo-isolated-on-transparent-background-free-png.png'} title={'تي شيرت رجالي'} color= {''}   className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
                    <CategoryCard img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'فأرة كمبيوتر'} color= {''}   className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
                    <CategoryCard img={'https://static.vecteezy.com/system/resources/previews/059/250/927/non_2x/stylish-orange-headphones-displayed-on-a-clean-transparent-background-for-modern-audio-enthusiasts-orange-headphone-product-photo-isolated-on-transparent-background-free-png.png'} title={'سماعات رأس'} color= {''}   className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
                    <CategoryCard img={'https://static.vecteezy.com/system/resources/previews/053/178/045/non_2x/clear-blue-bottles-with-pump-dispenser-for-liquid-products-free-png.png'} title={'دواني'} color= {''}   className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
                    <CategoryCard img={'https://static.vecteezy.com/system/resources/previews/059/250/927/non_2x/stylish-orange-headphones-displayed-on-a-clean-transparent-background-for-modern-audio-enthusiasts-orange-headphone-product-photo-isolated-on-transparent-background-free-png.png'} title={'سماعات رأس'} color= {''}   className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
                    <CategoryCard img={'https://static.vecteezy.com/system/resources/previews/059/250/927/non_2x/stylish-orange-headphones-displayed-on-a-clean-transparent-background-for-modern-audio-enthusiasts-orange-headphone-product-photo-isolated-on-transparent-background-free-png.png'} title={'تي شيرت رجالي'} color= {''}   className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
                    <CategoryCard img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'فأرة كمبيوتر'} color= {''}   className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
                    <CategoryCard img={'https://static.vecteezy.com/system/resources/previews/059/250/927/non_2x/stylish-orange-headphones-displayed-on-a-clean-transparent-background-for-modern-audio-enthusiasts-orange-headphone-product-photo-isolated-on-transparent-background-free-png.png'} title={'سماعات رأس'} color= {''}   className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
                    <CategoryCard img={'https://static.vecteezy.com/system/resources/previews/053/178/045/non_2x/clear-blue-bottles-with-pump-dispenser-for-liquid-products-free-png.png'} title={'دواني'} color= {''}   className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
                    <CategoryCard img={'https://static.vecteezy.com/system/resources/previews/059/250/927/non_2x/stylish-orange-headphones-displayed-on-a-clean-transparent-background-for-modern-audio-enthusiasts-orange-headphone-product-photo-isolated-on-transparent-background-free-png.png'} title={'تي شيرت رجالي'} color= {''}   className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
                    <CategoryCard img={'https://static.vecteezy.com/system/resources/previews/056/422/303/non_2x/plain-pink-t-shirt-free-png.png'} title={'فأرة كمبيوتر'} color= {''}   className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
                </Marquee>
            </div>
    </section>
  )
}
