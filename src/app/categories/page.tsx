import CategoryCard from "@/components/Categories/Category-Card/Category-Card";
import categories from '@/utils/Get_All_Categories';

export default function Categories() {

  return (
    <section className="flex flex-col justify-start items-start p-main">
      <h1 className="mb-5 text-3xl ">كل التصنيفات</h1>
      {/**All Categories */}
      <div className="flex flex-wrap justify-between items-start p-main">

        {
          categories?.map((category) => (
            <CategoryCard key={category?.id} img={category?.image} title={category?.title} category={category?.title} className="w-full text-center rounded-full mb-4 cursor-pointer hover:-translate-y-2 transition-transform" />
          ))
        }
      </div>
    </section>
  )
}
