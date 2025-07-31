import Brand from "@/components/Brands/Brand";

export default function BrandsPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <section className="p-main">
      <Brand id={id} />
    </section>
  )
}
