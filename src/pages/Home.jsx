import React from "react";
import Form from "../components/Form";
import List from "../components/List";
import Header from "../components/common/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Form />
      <List isDone={false} />
      <List isDone={true} />
    </>
  );
};

export default Home;
