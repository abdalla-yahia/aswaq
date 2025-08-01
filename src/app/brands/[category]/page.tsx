import Brand from "@/components/Brands/Brand";

export default async function BrandsPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  return (
    <section className="p-main">
      <Brand category={category} />
    </section>
  )
}
