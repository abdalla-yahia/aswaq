import Brand from "@/components/Brands/Brand";

export default async function BrandsPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  return (
    <section className="p-main">
      <Brand brand={brand} />
    </section>
  )
}
