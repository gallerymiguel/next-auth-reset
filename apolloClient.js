// apolloClient.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, // Use your backend GraphQL URL
  }),
  cache: new InMemoryCache(),
});

export default client;
