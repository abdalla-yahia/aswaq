import { gql } from 'graphql-tag';

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    GetAllUsers: [User!]!
    GetUserById(id:ID!):User
  }

  type Mutation {
    createUser(id:String!, name: String!, email: String!): User!
  }
`;
