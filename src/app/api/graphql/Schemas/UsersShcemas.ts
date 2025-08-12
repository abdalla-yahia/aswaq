import { gql } from 'graphql-tag';

export const userSchemas = gql`
  type User {
  id:              ID
  email:           String
  name:            String
  password:        String
  phone:           String
  address:         String
  image:           String
  gender:          String
  birthDate:       String
  alladdresses:    [String]
  role:            String
  status:          String
  orders:          [String]
  deliveryOrders:  [String]
  comments:        [String]
  reviews:         [String]
  userEmployee:    String
  treasury:        [String]
  customerRating:  [String]
  deliveryReview:  [String]
  createdAt:       String
  updatedAt:       String
  }
  
  type AuthResponse {
  message: String
  token: String
  user: User!
}
 type LogoutResponse {
    success: Boolean!
    message: String!
  }

  type Query {
    GetAllUsers: [User!]!
    GetUserById(id:ID!):User!
     me: User
  }

  type Mutation {
    # Create A New User
    CreateUser(
    name: String!
    email: String
    phone:String!
    password:String!
    gender:String
    birthDate:String
    address:String!
    
    ): AuthResponse
    # Login A Token User
    loginUser (
      email:String
      phone:String
      password:String!
    ):AuthResponse
    # Logout User
    logout: LogoutResponse!
    # Delete User
    DeleteUser (
      id:String!
    ):LogoutResponse
  }
`;
