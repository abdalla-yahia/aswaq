import ProductDetails from "@/components/Products/Product";

export default async function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } =await params;

  return (
    <section>
      <ProductDetails id={id} />
    </section>
  )
}
