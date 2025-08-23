import {gql} from '@apollo/client';

//Create Anew Brand
export const CREATE_BRAND = gql`

mutation createBrand($name:String!,$description:String,$logo:String){
    createBrand(name:$name,description:$description,logo:$logo){
        message
        brand{
            name
            description
            logo
        }
    }
}
`
//Fetch All Brands
export const GET_ALL_BRANDS = gql`
query {
    AllBrands{
    message
    brand{
            id
            name
            description
            logo
            products{
                id
                title
                
            }
        }
    }
}
`
//Update Brand
export const UPDATE_BRAND = gql`
mutation updateABrand($id:ID!,$name:String,$description:String,$logo:String){
    updateABrand(id:$id,name:$name,description:$description,logo:$logo){
        message
    }
}
`
//Delete Brand
export const DELETE_BRAND = gql`
mutation deleteABrand($id:ID!){
    deleteABrand(id:$id){
        message
    }
}
`