import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addTodo } from "../api/todo";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const queryClient = useQueryClient();

  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handleTitleBtnClick = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyBtnClick = (e) => {
    setBody(e.target.value);
  };

  const handleAddTodoSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      body,
      isDone: false,
    };
    addMutation.mutate(newTodo);
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
