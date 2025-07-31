import ProductDetails from "@/components/Products/Product";

export default function DetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <section>
      <ProductDetails id={id} />
    </section>
  )
}
