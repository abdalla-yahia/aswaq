import Product_Info from "./Details/Product_Info";
import Comments_Product from "./Comments/Comments_Product";
import Add_Comment from "./Comments/Add_Comment";
import Suggested_Products from "./Suggested/Suggested_Products";
import Similar_Products from "./Similar/Similar_Products";
import products from '@/db/products_dataset.json';

export default function ProductDetails({ id }: { id: string }) {
    const productFound = products?.data?.find(ele=>ele.id === parseInt(id))
    const category = productFound?.category
    const brand = productFound?.brand
    const title = productFound?.title as string
    return (
        <div className="w-full flex my-5 p-main flex-col justify-center items-start">
            {/**Details Of Product */}
            <Product_Info id={id}/>
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
