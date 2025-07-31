import Category from "@/components/Categories/Category";

export default async function CategoriesPage({ params }:  {params: { id: string }}) {

  return (
    <section className="p-main">
      <Category id={params.id} />
    </section>
  )
}
