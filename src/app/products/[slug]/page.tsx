import ProductDetails from "@/components/Products/Product";

export default async function DetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } =await params;
  return (
    <section>
      <ProductDetails slug={slug} />
    </section>
  )
}
