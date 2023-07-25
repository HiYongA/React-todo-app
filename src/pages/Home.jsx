import React from "react";
import Form from "../components/Form";
import List from "../components/List";

const Home = () => {
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
      <Form />
      <List isDone={false} />
      <List isDone={true} />
    </div>
  );
};

export default Home;
