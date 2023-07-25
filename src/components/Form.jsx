import { nanoid } from "nanoid";
import React, { useState } from "react";

const Form = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleBtnClick = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyBtnClick = (e) => {
    setBody(e.target.value);
  };

  const handleAddTodoSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title,
      body,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleAddTodoSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleTitleBtnClick}
      />
      <input
        type="text"
        name="title"
        value={body}
        onChange={handleBodyBtnClick}
      />
      <button type="submit">추가하기</button>
    </form>
  );
};

export default Form;
