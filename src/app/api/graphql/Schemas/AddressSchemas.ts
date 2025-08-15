import {gql} from 'graphql-tag';

export const AddressSchemas = gql`
type Address {
    id: ID!
    name: String!
    address:String!
    phone:String
    userId:String!
}

type Query {
    addresses: [Address!]!
    }


type Mutation {
    createAddress(name: String!, address: String!, phone: String,userId:String!): Address!
    updateAddress(id: ID!, name: String!, address: String!, phone: String): Address
    deleteAddress(id: ID!): Boolean!
    }
`