import React, { useState } from 'react';
import './App.css';
import { TodoItemsList } from './components/TodoItemsList/TodoItemsList';
import { TodoFilters } from './components/TodoFilters/TodoFilters';
import { UpsertTodoItem } from './components/UpsertTodoItem/UpsertTodoItem';
import { Navbar } from './components/Navbar/Navbar';

export const App = () => {
  const [statusFilterValue, setStatusFilterValue] = useState<boolean | null>(null);
  const [ownerFilterValue, setOwnerFilterValue] = useState<number | null>(null);

  return (
    <div className="content">
      <Navbar/>
      <TodoFilters
        statusFilterValue={statusFilterValue}
        ownerFilterValue={ownerFilterValue}
        setOwnerFilterValue={setOwnerFilterValue}
        setStatusFilterValue={setStatusFilterValue}
      />
      <TodoItemsList
        statusFilterValue={statusFilterValue}
        ownerFilterValue={ownerFilterValue}/>
      <div style={{position: "fixed", left: "10px", bottom: "10px", right: "10px"}}>
        <UpsertTodoItem
          onSubmit={(title) => {
            // TODO: Make something happen when submitting
          }}
          placeholder={"Add a new to do..."}
          submitText={"Create"}
        />
      </div>
    </div>
  );
}
