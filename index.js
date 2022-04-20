const { ApolloServer, gql} = require('apollo-server');

// Toda request é POST
// Toda request bate no mesmo EndPoint (/graphql)
// Query -> obter Informações
// mutation -> manipular dados
// Scalar types -> String, Int, bool, float, ID
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// mapeamento de objeto 1:1
const resolvers = {
  Query: {
    hello: () => 'hello world'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`test ${url}`));