import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __getTodos,
  __removeTodo,
  __switchTodo,
} from "../redux/modules/todosSlice";
import { Link } from "react-router-dom";

const List = ({ isDone }) => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((state) => state.todos);

  useEffect(() => {
    const fetchTodos = async () => {
      await dispatch(__getTodos());
    };
    fetchTodos();
  }, [dispatch]);

  if (isLoading) {
    return <h1>아직 로딩중이에요..!</h1>;
  }

  if (isError) {
    return <h1>오류가 발생했어요!</h1>;
  }

  const handleRemoveTodoBtnClick = (id) => {
    dispatch(__removeTodo(id));
  };

  const handleSwitchTodoBtnClick = (id) => {
    dispatch(__switchTodo(id));
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
              <button onClick={() => handleSwitchTodoBtnClick(todo.id)}>
                {todo.isDone ? "취소" : "완료"}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default List;
