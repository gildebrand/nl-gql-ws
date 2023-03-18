import { useState, useCallback } from 'react';
import "./UpsertTodoItem.css";

export const UpsertTodoItem = ({
  initialTitle = "",
  placeholder,
  submitText,
  onSubmit,
}: {
  initialTitle?: string;
  placeholder: string;
  submitText: string;
  onSubmit: (title: string) => Awaited<unknown>;
}) => {
  const [title, setTitle] = useState(initialTitle);

  const doSubmit = useCallback(() => {
    onSubmit(title);
    setTitle("");
  }, [onSubmit, title]);

  return <div className="upsert-todo card">
    <input
      className="upsert-todo__input"
      value={title}
      onChange={evt => setTitle(evt.target.value)}
      onKeyDown={evt => {
        if (evt.code === "Enter") {
          doSubmit();
        }
      }}
      autoFocus
      placeholder={placeholder}/>
    <button
      className={"upsert-todo__button"}
      disabled={!title}
      onClick={doSubmit}>{submitText}</button>
  </div>
};
