import { gql } from 'graphql-tag';

export const userSchemas = gql`
  type User {
    id: ID
    name: String
    email: String
    phone:String
    address:String
    role: String
    status: String
    createdAt: String
    updatedAt: String
  }
  type CreateUserResponse {
  message: String
  token: String
  user: User!
}
  type Query {
    GetAllUsers: [User!]!
    GetUserById(id:ID!):User!
  }

  type Mutation {
    CreateUser(
    id:ID
    name: String!
    email: String
    phone:String
    password:String!
    address:String
    role:String
    ): CreateUserResponse
  }
`;
