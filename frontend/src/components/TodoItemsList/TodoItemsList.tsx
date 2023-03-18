import { useTodoItemsListQuery } from '../../generated/graphql';
import { TodoItem } from '../TodoItem/TodoItem';
import "./TodoItemsList.css";

export const TodoItemsList = ({
  statusFilterValue,
  ownerFilterValue,
}: {
  statusFilterValue: boolean | null;
  ownerFilterValue: number | null;
}) => {
  // TODO: make use of filters in query
  const {data} = useTodoItemsListQuery();

  if (!data) {
    return null;
  }

  const todos = data.getTodos;

  return <div className="todo-items-list">
    {todos.map(todo => <TodoItem
      key={todo.id}
      todo={todo}
      onUpdate={() => {
        // TODO: Implement
      }}
      onDelete={() => {
        // TODO: Implement
      }}
    />)}
  </div>
}
