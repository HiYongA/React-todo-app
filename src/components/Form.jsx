import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { addTodo } from "../api/todo";
import useInput from "../api/useInput";

const Form = () => {
  const [title, handleTitleBtnClick, resetTitle] = useInput();
  const [body, handleBodyBtnClick, resetBody] = useInput();

  const queryClient = useQueryClient();

  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handleAddTodoSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      body,
      isDone: false,
    };
    addMutation.mutate(newTodo);
    resetTitle("");
    resetBody("");
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
