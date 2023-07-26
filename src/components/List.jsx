import React from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTodos, removeTodo, switchTodo } from "../api/todo";

const List = ({ isDone }) => {
  const { isLoading, isError, data } = useQuery("todos", getTodos);

  const queryClient = useQueryClient();

  const removeMutation = useMutation(removeTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const switchMutation = useMutation(switchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  if (isLoading) {
    return <h1>아직 로딩중이에요..!</h1>;
  }

  if (isError) {
    return <h1>오류가 발생했어요!</h1>;
  }

  const handleRemoveTodoBtnClick = (id) => {
    removeMutation.mutate(id);
  };

  const handleSwitchTodoBtnClick = (todo) => {
    const updateTodo = {
      ...todo,
      isDone: !todo.isDone,
    };
    switchMutation.mutate(updateTodo);
  };

  return (
    <div>
      <h2>{isDone ? "Done" : "Todo"}</h2>
      {data
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                border: "1px solid powderblue",
                padding: "10px",
                margin: "10px",
              }}
            >
              <Link to={`/${todo.id}`}>상세보기</Link>
              <p>{todo.id}</p>
              <h3>{todo.title}</h3>
              <p>{todo.body}</p>
              <p>{todo.isDone.toString()}</p>
              <button onClick={() => handleRemoveTodoBtnClick(todo.id)}>
                삭제
              </button>
              <button onClick={() => handleSwitchTodoBtnClick(todo)}>
                {todo.isDone ? "취소" : "완료"}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default List;
