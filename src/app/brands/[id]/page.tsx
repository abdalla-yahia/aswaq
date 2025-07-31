import Brand from "@/components/Brands/Brand";

export default async function BrandsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <section className="p-main">
      <Brand id={id} />
    </section>
  )
}
