import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { nanoid } from "nanoid";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      title: "할일",
      body: "내용",
      isDone: false,
    },
    {
      id: nanoid(),
      title: "할일2",
      body: "내용2",
      isDone: true,
    },
  ]);
  return (
    <div>
      <h1
        style={{
          borderBottom: "2px solid powderblue ",
          padding: "10px",
          textAlign: "center",
        }}
      >
        리액트로 만든 투두리스트
      </h1>
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} isDone={false} />
      <List todos={todos} setTodos={setTodos} isDone={true} />
    </div>
  );
};

export default App;
