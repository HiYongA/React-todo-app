import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __addTodo } from "../redux/modules/todosSlice";

const Form = () => {
  const dispatch = useDispatch();
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
    dispatch(__addTodo(newTodo));
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
