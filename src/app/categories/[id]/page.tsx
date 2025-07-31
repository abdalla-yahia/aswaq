import Category from "@/components/Categories/Category";

export default async function CategoriesPage({ params }:  {params: Promise<{ id: string }>}) {
  const { id } = await params;
  return (
    <section className="p-main">
      <Category id={id} />
    </section>
  )
}
