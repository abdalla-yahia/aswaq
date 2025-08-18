import {gql} from 'graphql-tag';

export const brandSchema = gql`
type Brand {
    id:ID
    name:String
    description:String
    logo:String
    products:[String]
}
type CreateStatus {
    message:String
    brand:Brand
}
type AllBrands {
    message:String!
    brand:[Brand]
}
type Query {
    # Fetch All Brands
    AllBrands:AllBrands!
}
type Mutation {
    # Create A New Brand
    createBrand(
        name:String!
        description:String
        logo:String
    ):CreateStatus!
    # Update Brand
    updateABrand(
        id:ID!
        name:String
        description:String
        logo:String
    ):CreateStatus!
    # Deletet Brand
    deleteABrand(id:ID!):CreateStatus
}
`
