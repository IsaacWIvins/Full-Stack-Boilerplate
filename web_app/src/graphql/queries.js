import gql from 'graphql-tag';

export const GET_USER_INFO = gql`
  query( $id: Int! ) {
    user(id: $id) {
      id
      first_name
      last_name
      email
      phone
      city
      state
      address
    }
  }
`
