const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    info: String!
  }
`;

const resolvers = {
  Query: {
    info: () => "HOckerNewsクローン",
  },
};
