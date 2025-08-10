import {gql} from '@apollo/client';


export const GET_All_USERS = gql`
  query {
    GetAllUsers {
      id
      name
      email
    }
  }
`;

export const GET_USER_BY_ID = gql`
query GetuserById($id:ID!){
  GetUserById(id:$id) {
    id
    name
    email
  }
}
`

export const CREATE_USER = gql`
mutation CreateUser(
$id:ID
$name:String!
$email:String
$phone:String
$password:String!
$address:String
$role:String
){
CreateUser(
id:$id
name:$name
email:$email
phone:$phone
password:$password
address:$address
role:$role
) {
message,
token,
user{
  id
  name
  role
}
}
}
`