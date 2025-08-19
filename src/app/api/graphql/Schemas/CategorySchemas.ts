import {gql} from 'graphql-tag';

export const categorySchema = gql`
type Category {
    id:ID
    name:String
    description:String
    image:String
    parentId:String
    products:[String]
    parent:Category
}
type CreateStatus {
    message:String
    category:Category
}
type AllCategories {
    message:String!
    category:[Category]
}
type Query {
    # Fetch All Categories
    AllCategories:AllCategories!
    # Fetch Category By Id
    CategoryById(id:ID!):CreateStatus!
}
type Mutation {
    # Create A New Category
    createCategoey(
        name:String!
        description:String
        image:String
        parentId:String
    ):CreateStatus!
    # Update Category
    updateACategory(
        id:ID!
        name:String
        description:String
        image:String
        parentId:String
    ):CreateStatus!
    # Deletet Category
    deleteACategory(id:ID!):CreateStatus
}
`
