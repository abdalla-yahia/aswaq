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