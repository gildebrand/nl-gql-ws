import {
  useTodoItemsListQuery,
  useDeleteTodoItemMutation,
  TodoItemsListQueryDocument,
  useUpdateTodoItemMutation
} from '../../generated/graphql';
import { TodoItem } from '../TodoItem/TodoItem';
import "./TodoItemsList.css";

export const TodoItemsList = ({
  statusFilterValue,
  ownerFilterValue,
}: {
  statusFilterValue: boolean | null;
  ownerFilterValue: number | null;
}) => {
  const {data} = useTodoItemsListQuery({
    variables: {
      filter: {
        done: statusFilterValue,
        authorId: ownerFilterValue
      }
    }
  });
  const [deleteTodoItem] = useDeleteTodoItemMutation();
  const [updateTodoItem] = useUpdateTodoItemMutation();

  if (!data) {
    return null;
  }

  const todos = data.getTodos;

  return <div className="todo-items-list">
    {todos.map(todo => <TodoItem
      key={todo.id}
      todo={todo}
      onUpdate={({title, done}) => updateTodoItem({
        variables: {
          todoId: todo.id,
          update: {
            title,
            done
          }
        }
      })}
      onDelete={() => deleteTodoItem({
        variables: {
          todoId: todo.id
        },
        refetchQueries: [TodoItemsListQueryDocument]
      })}
    />)}
  </div>
}
