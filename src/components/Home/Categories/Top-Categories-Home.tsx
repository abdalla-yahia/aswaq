'use client'
import SectionName from "@/utils/SectionName";
import Marquee from "react-fast-marquee";
import CategoryCard from "../../Categories/Category-Card/Category-Card";
import { useQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "@/Graphql/Schemas/CategoryQuery";
import { CreateCategory } from "@/types/types";

export default function TopCategoriesHome() {
  const { data } = useQuery(GET_ALL_CATEGORIES, {
    fetchPolicy: 'cache-and-network',
  })

  return (
    <section className="w-full h-fit">
      <SectionName text="أفضل التصنيفات" btn={true} btnText="المزيد..." href="/categories" />
      <div dir="ltr" className="flex  justify-center w-full h-fit">
        <Marquee speed={30} autoFill={true} direction="right">
          {
            data?.AllCategories?.category?.map((category: CreateCategory) =>
              <CategoryCard key={category?.id} img={category?.image as string} title={category?.name} category={category?.name} className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform" />
            )
          }

        </Marquee>
      </div>
    </section>
  )
}
