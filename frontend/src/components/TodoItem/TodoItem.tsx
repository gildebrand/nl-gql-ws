import { TodoItemFragment } from '../../generated/graphql';
import "./TodoItem.css";
import { useState } from 'react';
import { UpsertTodoItem } from '../UpsertTodoItem/UpsertTodoItem';

export const TodoItem = ({
  todo,
  onUpdate,
  onDelete,
} : {
  todo: TodoItemFragment;
  onUpdate?: (updatedData: TodoItemFragment) => Awaited<unknown>;
  onDelete?: () => Awaited<unknown>;
}) => {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return <UpsertTodoItem
      placeholder={"Enter a new title"}
      submitText={"Save"}
      initialTitle={todo.title}
      onSubmit={(newTitle) => {
        onUpdate?.({
          ...todo,
          title: newTitle
        });
        setIsEditing(false);
      }}
    />;
  }

  return (
    <div
      className="todo-item card"
      onClick={() => {
        // Should only go into edit mode if we have an update callback
        if (onUpdate) {
          setIsEditing(true);
        }
      }}>
      <div className="todo-item__status"
           onClick={(event) => {
             event.stopPropagation();
             onUpdate?.({...todo, done: !todo.done});
           }}>
        {todo.done ? "✓" : ""}
      </div>
      <span style={{flex: 1}}>{todo.title}</span>
      {onDelete && <span
          className="todo-item__delete"
          onClick={(event) =>  {
            event.stopPropagation();
            onDelete();
          }}>Delete️</span>}
      {/*
        TODO: Add avatars to the TodoItem
        <UserAvatar
          user={todo.author}
          size={UserAvatarSize.Small}
        />
      */}
    </div>
  );
}
