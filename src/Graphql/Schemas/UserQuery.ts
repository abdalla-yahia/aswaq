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
$name:String!
$email:String
$phone:String!
$password:String!
$address:String!
$gender:String
$birthDate:String
){
CreateUser(
name:$name
email:$email
phone:$phone
password:$password
address:$address
gender:$gender
birthDate:$birthDate
) {
message,
token,
user{
  id
  name
  role
  status
  image
}

}
}
`

export const LOGIN_USER = gql`
mutation LoginUser(
  $email:String
  $phone:String
  $password:String!
) {
loginUser (
  email:$email
  phone:$phone
  password:$password
) {
token,
message,
user{
id
email
role
name
image
}
}
}
`

export const GET_ME = gql`
  query Me {
    me {
      id
      name
      email
      role
      image
      alladdresses
      createdAt
      status
      phone
      gender
      birthDate
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation Logout {
    logout {
      success
      message
    }
  }
`;

export const DELETE_USER = gql`
mutation deleteUser($id:String!) {
  DeleteUser(id:$id){
    message
    success
  }
}
`