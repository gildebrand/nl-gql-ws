import { useTodoItemsListQuery } from '../../generated/graphql';
import { TodoItem } from '../TodoItem/TodoItem';
import "./TodoItemsList.css";

export const TodoItemsList = () => {
  const {data} = useTodoItemsListQuery();

  if (!data) {
    return null;
  }

  const todos = data.getTodos;

  return <div className="todo-items-list">
    {todos.map(todo => <TodoItem todo={todo} />)}
  </div>
}
