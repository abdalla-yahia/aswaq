import Brand from "@/components/Brands/Brand";

export default async function BrandsPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  return (
    <section className="p-2">
      <Brand brand={decodeURIComponent(brand)} />
    </section>
  )
}
