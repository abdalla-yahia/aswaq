'use client';
import Product_Info from "./Details/Product_Info";
import Comments_Product from "./Comments/Comments_Product";
import Add_Comment from "./Comments/Add_Comment";
import Suggested_Products from "./Suggested/Suggested_Products";
import Similar_Products from "./Similar/Similar_Products";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "@/Graphql/Schemas/ProducrQuery";

export default function ProductDetails({ id }: { id: string }) {
    // Find the product by ID from the products dataset
      const { data:products, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
    fetchPolicy: "network-only",
  });

  if (loading) return <p>جاري تحميل المنتج...</p>;
  if (error) return <p>حدث خطأ: {error.message}</p>;
    const productFound = products?.product;
    const category = productFound?.category?.name as string;
    const brand = productFound?.brand?.name as string;
    const title = productFound?.title as string
    return (
        <div className="w-full flex my-5 py-8 px-3 flex-col justify-center items-start">
            {/**Details Of Product */}
            <Product_Info product={productFound}/>
            {/**Add A New Comment From User*/}
            <Add_Comment />
            {/**Comments Of Product */}
            <Comments_Product title={title}/>
            {/**Suggested Products */}
            <Suggested_Products />
            {/**Similar Products */}
            <Similar_Products category={category as unknown as string} brand={brand as unknown as string} />
        </div>
    )
}
