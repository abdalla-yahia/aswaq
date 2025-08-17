import {gql} from 'graphql-tag';

export const AddressSchemas = gql`
type Address {
    id: ID!
    name: String!
    address:String!
    phone:String
    userId:String!
}
type Status {
    success:Boolean
    message:String
}
type Query {
    addresses: [Address!]!
    }


type Mutation {
    createAddress(name: String!, address: String!, phone: String,userId:String!): Address!
    updateAddress(id: ID!, name: String!, address: String!, phone: String): Status!
    deleteAddress(id: ID!): Status!
    }
`