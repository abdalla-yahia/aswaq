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