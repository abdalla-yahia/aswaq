import Category from "@/components/Categories/Category";

export default async function CategoriesPage({ params }:  {params: Promise<{ category: string }>}) {
  const { category } = await params;
  
  return (
    <section className="px-2">
      <Category category={decodeURIComponent(category)} />
    </section>
  )
}
