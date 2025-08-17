import {gql} from '@apollo/client';

export const GET_ALL_ADDRESSES = gql`
query {
    addresses{
        id
        name
        address
        phone
    }
}
`

export const CREATE_ADDRESS =gql`
mutation createAddress($name:String!,$address:String!,$phone:String,$userId:String!){
    createAddress(name: $name, address:$address,phone:$phone,userId:$userId){
        id
        name
        address
        phone
    }
}
`

export const UPDATE_ADDRESS = gql`
mutation updataAddress($id:ID!,$name:String!,$address:String!,$phone:String){
    updateAddress(id:$id,name:$name,address:$address,phone:$phone){
        success
        message
    }
}
`

export const DELETE_ADDRESS = gql`
mutation deleteAddress($id:ID!){
    deleteAddress(id:$id){
        success
        message
    }
    }
`