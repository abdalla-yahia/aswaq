import {createProduct,deleteProduct} from "@/Features/Actions/productActions";
import { CreateProductType } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [] as CreateProductType[],
    loading: false,
    error: null as string | null,
    success: false,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.products = action.payload;
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.products = state.products.filter(product => product?.id !== action.payload.id);
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });

    },
});

export default productSlice.reducer;