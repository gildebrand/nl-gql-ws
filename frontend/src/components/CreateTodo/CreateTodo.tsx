import { useState } from 'react';
import "./CreateTodo.css";

export const CreateTodo = ({onCreate}: {onCreate: (title: string) => Awaited<unknown>}) => {
  const [title, setTitle] = useState("");

  return <div className="create-todo card">
    <input
      className="create-todo__input"
      value={title}
      onChange={evt => setTitle(evt.target.value)}
      onKeyDown={evt => {
        
      }}
      placeholder="Add a new to do here..."/>
    <button
      className={"create-todo__button"}
      disabled={!title}
      onClick={() => onCreate(title)}>Create</button>
  </div>
};
