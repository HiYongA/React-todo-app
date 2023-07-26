import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.todos);
  const todo = data.find((todo) => todo.id === id);

  return (
    <div
      style={{
        border: "1px solid powderblue",
        padding: "10px",
        margin: "10px",
      }}
    >
      <button onClick={() => navigate("/")}>이전으로</button>
      <p>{todo.id}</p>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
    </div>
  );
};

export default Detail;
