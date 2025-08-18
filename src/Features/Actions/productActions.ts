import { CREATE_PRODUCT, DELETE_PRODUCT } from "@/Graphql/Schemas/ProducrQuery";
import { client } from "@/libs/Apollo/ApolloClient";
import { CreateProductType } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";    
import { toast } from "react-toastify";

//Create A New Product
export const createProduct = createAsyncThunk('product/create', async (productData: CreateProductType) => {
    try {
        const {data} = await client.mutate({
            mutation: CREATE_PRODUCT,
            variables:  productData
        });
        if(data?.createProduct?.success === false) {
            toast.error(data.createProduct.message);
        }else {
            toast.success("تم إنشاء المنتج بنجاح");
        }
        return data?.createProduct;
    } catch (error) {
        toast.error("Failed to create product. Please try again.");
        console.error(error)
    }
})

// Delete Product
export const deleteProduct = createAsyncThunk('product/delete', async (productId: string)=> {
        try {
            const {data} = await client.mutate({
                mutation: DELETE_PRODUCT,
                variables: {id:productId }
            });
            if(data?.deleteProduct?.success === false) {
                toast.error(data.deleteProduct.message);
            }else {
                toast.success("تم حذف المنتج بنجاح");
            }
            return data?.deleteProduct;
        } catch (error) {
            toast.error("Failed to delete product. Please try again.");
            console.error(error)
        }
    }
)