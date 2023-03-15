import React from 'react';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: "http://localhost:3000",
  cache: new InMemoryCache()
});

export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="navbar">
        <div className="navbar__title">Todo app</div>
        <div className="navbar__user">

        </div>
      </div>
    </ApolloProvider>
  );
}
