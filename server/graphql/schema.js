const schema =
`
type User {
  id: Int
  first_name: String
  last_name: String
  email: String
  phone: String
  city: String
  state: String
  address: String
}

input createUserInput {
  id: Int
  first_name: String
  last_name: String
  email: String
  phone: String
  city: String
  state: String
  address: String
}

type Query {
  user(id: Int!): User
  users: [User]
}

type Mutation {
  createUser(
    input: createUserInput
  ): User
}

schema {
  query: Query
  mutation: Mutation
}
`;

export default schema;
