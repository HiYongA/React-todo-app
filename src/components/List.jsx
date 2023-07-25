import React from "react";

const List = ({ todos, setTodos, isDone }) => {
  const handleRemoveTodoBtnClick = (id) => {
    const removeTodo = todos.filter((todo) => todo.id !== id);
    setTodos(removeTodo);
  };

  const handleSwitchTodoBtnClick = (id) => {
    const switchTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(switchTodo);
  };

  return (
    <div>
      <h2>{isDone ? "Done" : "Todo"}</h2>
      {todos
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
