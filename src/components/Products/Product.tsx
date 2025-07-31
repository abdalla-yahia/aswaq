import Product_Info from "./Details/Product_Info";
import Comments_Product from "./Comments/Comments_Product";
import Add_Comment from "./Comments/Add_Comment";
import Suggested_Products from "./Suggested/Suggested_Products";
import Similar_Products from "./Similar/Similar_Products";

export default function ProductDetails({ id }: { id: string }) {
    return (
        <div className="w-full flex my-5 p-main flex-col justify-center items-start">
            {/**Details Of Product */}
            <Product_Info />
            {/**Add A New Comment From User*/}
            <Add_Comment />
            {/**Comments Of Product */}
            <Comments_Product />
            {/**Suggested Products */}
            <Suggested_Products />
            {/**Similar Products */}
            <Similar_Products />
        </div>
    )
}
