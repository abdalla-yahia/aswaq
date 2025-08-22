import {gql} from '@apollo/client';

//Create Anew Category
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
//Fetch All Categories
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
            products{
                id
                title
                brand{
                    id
                    name
                    logo
                }
            }
            parent{
                id
                name
            }
        }
    }
}
`
//Fetch Category By Id
export const GET_CATEGORY_BY_ID = gql`
query getCategoryById($id:ID!){
    CategoryById(id:$id){
        id
        name
        description
        image
        parentId
        products{
                id
                title
                brand{
                    id
                    name
                    logo
                }
            }
        parent{
            id
            name
        }
    }
}
`
//Update Category
export const UPDATE_CATEGORY = gql`
mutation updateACategory($id:ID!,$name:String,$description:String,$image:String,$parentId:String){
    updateACategory(id:$id,name:$name,description:$description,image:$image,parentId:$parentId){
        message
    }
}
`
//Delete Category
export const DELETE_CATEGORY = gql`
mutation deleteACategory($id:ID!){
    deleteACategory(id:$id){
        message
    }
}
`