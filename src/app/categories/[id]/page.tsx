import Category from "@/components/Categories/Category";

export default function CategoriesPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <section className="p-main">
      <Category id={id} />
    </section>
  )
}
