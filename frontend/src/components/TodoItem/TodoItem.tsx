import { TodoItemFragment } from '../../generated/graphql';
import "./TodoItem.css";

export const TodoItem = ({
  todo,
  onUpdate,
} : {
  todo: TodoItemFragment;
  onUpdate?: (updatedData: TodoItemFragment) => Awaited<unknown>
}) => {
  return <div className="todo-item card">
    <div className="todo-item__done"
         onClick={() => onUpdate?.({...todo, done: !todo.done})}>{todo.done ? "✓" : ""}</div>
    <span>{todo.title}</span>
  </div>
}
