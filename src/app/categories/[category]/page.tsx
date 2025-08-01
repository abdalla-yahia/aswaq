import Category from "@/components/Categories/Category";

export default async function CategoriesPage({ params }:  {params: Promise<{ category: string }>}) {
  const { category } = await params;
  
  return (
    <section className="p-main">
      <Category category={decodeURIComponent(category)} />
    </section>
  )
}
