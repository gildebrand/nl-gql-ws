import React, { useState } from 'react';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { TodoItemsList } from './components/TodoItemsList/TodoItemsList';
import { TodoFilters } from './components/TodoFilters/TodoFilters';
import { CreateTodo } from './components/CreateTodo/CreateTodo';
import { Navbar } from './components/Navbar/Navbar';

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
        <Navbar />
        <TodoFilters
          statusFilterValue={statusFilterValue}
          ownerFilterValue={ownerFilterValue}
          setOwnerFilterValue={setOwnerFilterValue}
          setStatusFilterValue={setStatusFilterValue}
        />
        <TodoItemsList
          statusFilterValue={statusFilterValue}
          ownerFilterValue={ownerFilterValue} />
        <div style={{position: "fixed", left: "10px", bottom: "10px", right: "10px"}}>
          <CreateTodo onCreate={() => {}} />
        </div>
      </div>
    </ApolloProvider>
  );
}
