import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_SLUG,
  GET_PRODUCTS_BY_BRAND_ID,
  GET_PRODUCTS_BY_CATEGORY_ID,
} from "@/Graphql/Schemas/ProducrQuery";
import { client } from "@/libs/Apollo/ApolloClient";
import { CreateProductType } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Create A New Product
export const createProduct = createAsyncThunk(
  "product/create",
  async (productData: CreateProductType) => {
    try {
      const { data } = await client.mutate({
        mutation: CREATE_PRODUCT,
        variables: productData,
      });
      if (data?.createProduct?.success === false) {
        toast.error(data.createProduct.message);
      } else {
        toast.success("تم إنشاء المنتج بنجاح");
      }
      return data?.createProduct;
    } catch (error) {
      toast.error("Failed to create product. Please try again.");
      console.error(error);
    }
  }
);

// Fetch All Products
export const fetchAllProducts = createAsyncThunk(
  "product/fetchAll",
  async () => {
    try {
      const { data } = await client.query({
        query: GET_ALL_PRODUCTS,
        fetchPolicy: 'network-only',
      });
      if (data?.GetAllProducts?.success === false) {
        toast.error(data.GetAllProducts.message);
        return [];
      } else {
        toast.success("تم جلب جميع المنتجات بنجاح");
      }
      // Return the products array from the response
      return data?.GetAllProducts;
    } catch (error) {
      toast.error("Failed to fetch products. Please try again.");
      console.error(error);
    }
  }
);

// Get Product By ID
export const getProductById = createAsyncThunk(
  "product/getById",
  async (productId: string) => {
    try {
      const { data } = await client.query({
        query: GET_PRODUCT_BY_ID,
        variables: { id: productId },
        fetchPolicy: 'network-only',
      });
      if (data?.product?.success === false) {
        toast.error(data.product.message);
      } else {
        toast.success("تم جلب المنتج بنجاح");
      }
      return data?.product;
    } catch (error) {
      toast.error("Failed to fetch product. Please try again.");
      console.error(error);
    }
  }
);

// Get Product By Slug
export const getProductBySlug = createAsyncThunk(
  "product/getBySlug",
  async (slug: string) => {
    try {
      const { data } = await client.query({
        query: GET_PRODUCT_BY_SLUG,
        variables: { slug },
        fetchPolicy: 'network-only',
      });
      if (data?.productBySlug?.success === false) {
        toast.error(data.productBySlug.message);
      } else {
        toast.success("تم جلب المنتج بنجاح");
      }
      return data?.productBySlug;
    } catch (error) {
      toast.error("Failed to fetch product by slug. Please try again.");
      console.error(error);
    }
  }
);

// Get Products By Category
export const getProductsByCategory = createAsyncThunk(
  "product/getByCategory",
  async (categoryId: string) => {
    try {
      const { data } = await client.query({
        query: GET_PRODUCTS_BY_CATEGORY_ID,
        variables: { categoryId },
        fetchPolicy: 'network-only',
      });
      if (data?.productsByCategory?.success === false) {
        toast.error(data.productsByCategory.message);
      } else {
        toast.success("تم جلب المنتجات حسب الفئة بنجاح");
      }
      return data?.productsByCategory;
    } catch (error) {
      toast.error("Failed to fetch products by category. Please try again.");
      console.error(error);
    }
  }
);

// Get Products By Brand
export const getProductsByBrand = createAsyncThunk(
  "product/getByBrand",
  async (brandId: string) => {
    try {
      const { data } = await client.query({
        query: GET_PRODUCTS_BY_BRAND_ID,
        variables: { brandId },
        fetchPolicy: 'network-only',
      });
      if (data?.productsByBrand?.success === false) {
        toast.error(data.productsByBrand.message);
      } else {
        toast.success("تم جلب المنتجات حسب العلامة التجارية بنجاح");
      }
      return data?.productsByBrand;
    } catch (error) {
      toast.error("Failed to fetch products by brand. Please try again.");
      console.error(error);
    }
  }
);

// Delete Product
export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (productId: string) => {
    try {
      const { data } = await client.mutate({
        mutation: DELETE_PRODUCT,
        variables: { id: productId },
      });
      if (data?.deleteProduct?.success === false) {
        toast.error(data.deleteProduct.message);
      } else {
        toast.success("تم حذف المنتج بنجاح");
      }
      return data?.deleteProduct;
    } catch (error) {
      toast.error("Failed to delete product. Please try again.");
      console.error(error);
    }
  }
);
