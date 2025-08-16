import { gql } from 'graphql-tag';

export const userSchemas = gql`
 
 enum Gender {
  MALE
  FEMALE
}

type AuthResponse {
  message: String
  token: String
  user: User!
}

input UserInput {
  email: String
  name: String
  phone: String
  image: String
  gender: Gender
  birthDate: String
}

type LogoutResponse {
  success: Boolean!
  message: String!
} 

 type User {
  id: ID
  email: String
  name: String
  password: String
  phone: String
  address: String
  image: String
  gender: Gender
  birthDate: String
  alladdresses: [Address]
  role: String
  status: String
  orders: [String]
  deliveryOrders: [String]
  comments: [String]
  reviews: [String]
  userEmployee: String
  treasury: [String]
  customerRating: [String]
  deliveryReview: [String]
  createdAt: String
  updatedAt: String
}


type Query {
  GetAllUsers: [User!]!
  GetUserById(id: ID!): User!
  me: User!
  
}


type Mutation {
  # Register a new user
  CreateUser(
    name: String!
    email: String
    phone: String!
    password: String!
    gender: Gender
    birthDate: String
    address: String!
  ): AuthResponse
  # Login a user
  loginUser(
    email: String
    phone: String
    password: String!
  ): AuthResponse
  # Logout User
  logout: LogoutResponse!
  # Delete User
  DeleteUser(
    id: ID!
  ): LogoutResponse
  # Update User
  updateUser(
    id: String!
    data: UserInput
  ): AuthResponse
  # Change Password
  changePassword(
    id: String!
    oldPassword: String!
    newPassword:String!
  ):LogoutResponse!
  
}

  
`
