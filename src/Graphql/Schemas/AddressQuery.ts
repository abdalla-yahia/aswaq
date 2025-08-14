import {gql} from '@apollo/client';

export const GET_ALL_ADDRESSES = gql`
query {
    addresses{
        id
        name
        address
    }
}
`