"use client";

import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient"; // Adjust path if necessary

export default function ApolloProviderWrapper({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
