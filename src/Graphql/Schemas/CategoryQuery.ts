import {gql} from '@apollo/client';


export const CREATE_CATEGORY = gql`

mutation createCategory($name:String!,$description:String,$image:String,$parentId:String){
    createCategoey(name:$name,description:$description,image:$image,parentId:$parentId){
        message
        category{
            name
            description
            image
            parentId
        }
    }
}
`

export const GET_ALL_CATEGORIES = gql`
query {
    AllCategories{
    message
    category{
            id
            name
            description
            image
            parentId
            products
        }
    }
}
`

export const UPDATE_CATEGORY = gql`
mutation updateACategory($id:ID!,$name:String,$description:String,$image:String,$parentId:String){
    updateACategory(id:$id,name:$name,description:$description,image:$image,parentId:$parentId){
        message
    }
}
`