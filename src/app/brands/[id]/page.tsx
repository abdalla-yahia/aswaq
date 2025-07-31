import Brand from "@/components/Brands/Brand";

export default function BrandsPage({ params }: { params: { id: string } }) {

  return (
    <section className="p-main">
      <Brand id={params.id} />
    </section>
  )
}
