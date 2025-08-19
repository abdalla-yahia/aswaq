import {gql} from '@apollo/client';

// GraphQl query To Create a new product
export const CREATE_PRODUCT = gql`
    mutation createProduct(
        $title: String!
        $description: String
        $price: Float!
        $oldPrice: Float
        $discountType: DiscountType
        $discountValue: Float
        $quantity: Int!
        $image: String
        $categoryId: String
        $brandId: String
        $isFeatured: Boolean
        $status: ProductStatus
        $metaTitle: String
        $metaDesc: String) {
        createProduct(
            title: $title
            description: $description
            price: $price
            oldPrice: $oldPrice
            discountType: $discountType
            discountValue: $discountValue
            quantity: $quantity
            image: $image
            categoryId: $categoryId
            brandId: $brandId
            isFeatured: $isFeatured
            status: $status
            metaTitle: $metaTitle
            metaDesc: $metaDesc
        ) {
            success
            message
            product {
                id
                title
                description
                price
                oldPrice
                discountType
                discountValue
                quantity
                image
                categoryId
                brandId
                isFeatured
                status
                metaTitle
                metaDesc
            }
        }
    }
`;

// GraphQL query to fetch all products
export const GET_ALL_PRODUCTS = gql`
    query GetAllProducts{
  GetAllProducts{
  message
    success
    products{
        id
        slug
        title
        description
        price
        oldPrice
        discountType
        discountValue
        quantity
        image
        categoryId
        brandId
        isFeatured
        status
        metaTitle
        metaDesc
        category{
            id
            name
            image
        }
        brand{
            id
            name
            logo
        }
        }
        }
    }
    `;

// GraphQL query to fetch a product by ID
export const GET_PRODUCT_BY_ID = gql`
    query GetProductById($id: ID!) {
        product(id: $id) {  
            id
            title
            description
            price
            oldPrice
            discountType
            discountValue
            quantity
            image
            categoryId
            brandId
            isFeatured
            status
            metaTitle
            metaDesc
            category {
                id
                name
                image
            }
            brand {
                id
                name
                logo
            }

            # reviews {
            #     id
            #     rating
            #     comment
            #     user {
            #         id
            #         name
            #     }
            # }
            # createdAt
            # updatedAt
        }
    }
`;

// GraphQL query to fetch a product by slug
export const GET_PRODUCT_BY_SLUG = gql`
    query GetProductBySlug($slug: String!) {
        productBySlug(slug: $slug) {
                id
                title
                description
                price
                oldPrice
                discountType
                discountValue
                quantity
                image
                categoryId
                brandId
                isFeatured
                status
                metaTitle
                metaDesc
                category {
                    id
                    name
                    image
                }
                brand {
                    id
                    name
                    logo
                }
            }
        }
    
`;
// GraphQL query to fetch products by category ID
export const GET_PRODUCTS_BY_CATEGORY_ID = gql`
    query GetProductsByCategoryId($categoryId: String!) {
        productsByCategoryId(categoryId: $categoryId) {
            id
            title
            description
            price
            oldPrice
            discountType
            discountValue
            quantity
            image
            categoryId
            category{
                id
                name
                image
            }
            brand{
                id
                name
                logo
            }
            brandId
            isFeatured
            status
            metaTitle
            metaDesc
        }
    }
`;

// GraphQL query to fetch products by brand ID
export const GET_PRODUCTS_BY_BRAND_ID = gql`
    query GetProductsByBrandId($brandId: String!) {
        productsByBrandId(brandId: $brandId) {
            id
            title
            description
            price
            oldPrice
            discountType
            discountValue
            quantity
            image
            categoryId
            brandId
            isFeatured
            status
            metaTitle
            metaDesc
        }
    }
`;

// GraphQL mutation to delete a product
export const DELETE_PRODUCT = gql`
    mutation deleteProduct($id: ID!) {
        deleteProduct(id: $id)
    }
`;