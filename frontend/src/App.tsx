import React, { useState } from 'react';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { CurrentUser } from './components/CurrentUser/CurrentUser';
import { TodoItemsList } from './components/TodoItemsList/TodoItemsList';
import { TodoFilters } from './components/TodoFilters/TodoFilters';

const apolloClient = new ApolloClient({
  uri: "http://localhost:5000",
  cache: new InMemoryCache()
});

export const App = () => {
  const [statusFilterValue, setStatusFilterValue] = useState<boolean | null>(null);
  const [ownerFilterValue, setOwnerFilterValue] = useState<number | null>(null);

  return (
    <ApolloProvider client={apolloClient}>
      <div className="content">
        <div className="navbar card">
          <div className="navbar__pseudo"/>
          <div className="navbar__title">To Do</div>
          <div className="navbar__user">
            <CurrentUser/>
          </div>
        </div>
        <TodoFilters
          statusFilterValue={statusFilterValue}
          ownerFilterValue={ownerFilterValue}
          setOwnerFilterValue={setOwnerFilterValue}
          setStatusFilterValue={setStatusFilterValue}
        />
        <TodoItemsList
          statusFilterValue={statusFilterValue}
          ownerFilterValue={ownerFilterValue} />
      </div>
    </ApolloProvider>
  );
}
