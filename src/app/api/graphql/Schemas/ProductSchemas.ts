import {gql} from 'graphql-tag'

export const productSchemas = gql`
    enum ProductStatus {
        ACTIVE
        INACTIVE
        ARCHIVED
    }
    enum DiscountType {
        FIXED
        PERCENTAGE
    }
    type SuccessCreateProduct {
        success: Boolean!
        message: String!
        product: Product!
    }
    type SuccessFetchProducts {
        success: Boolean!
        message: String!
        products: [Product!]!
    }
    type Product {
        id: ID!
        slug: String
        title: String!
        description: String
        price: Float!
        oldPrice: Float
        discountType: DiscountType
        discountValue: Float
        quantity: Int!
        image: String
        categoryId: String
        brandId: String
        isFeatured: Boolean
        status: ProductStatus
        metaTitle: String
        metaDesc: String
        category: Category
        brand: Brand
    }

    type Query {
        GetAllProducts: SuccessFetchProducts!
        product(id: ID!): Product!
        productBySlug(slug: String!): Product!
        productsByCategoryId(categoryId: String!): [Product!]!
        productsByBrandId(brandId: String!): [Product!]!
        productsByCategoryRecursive(categoryId: String!): [Product!]!
    }
    
    type Mutation {
        createProduct(
        title: String!
        description: String
        price: Float!
        oldPrice: Float
        discountType: DiscountType
        discountValue: Float
        quantity: Int!
        image: String
        categoryId: String
        brandId: String
        isFeatured: Boolean
        status: ProductStatus
        metaTitle: String
        metaDesc: String): SuccessCreateProduct!

        updateProduct(
            id: ID!
            title: String
            description: String
            price: Float
            oldPrice: Float
            discountType: String
            discountValue: Float
            quantity: Int
            image: String
            categoryId: String
            brandId: String
            isFeatured: Boolean
            status: ProductStatus
            metaTitle: String
            metaDesc: String
        ): Product!

        deleteProduct(id: ID!): Boolean!
    }
`;