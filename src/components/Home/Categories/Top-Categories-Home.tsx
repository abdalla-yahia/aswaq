import SectionName from "@/utils/SectionName";
import Marquee from "react-fast-marquee";
import CategoryCard from "../../Categories/Category-Card/Category-Card";
import categories from '@/utils/Get_All_Categories';

export default function TopCategoriesHome() {


  return (
    <section className="w-full h-fit">
      <SectionName text="أفضل التصنيفات" btn={true} btnText="المزيد..." href="/categories" />
      <div dir="ltr" className="flex  justify-center w-full h-fit">
        <Marquee speed={30} autoFill={true} direction="right">
          {
            categories?.map((category) =>
              <CategoryCard key={category?.id} img={category?.image} title={category?.title} category={category?.title} className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform" />
            )
          }

        </Marquee>
      </div>
    </section>
  )
}
