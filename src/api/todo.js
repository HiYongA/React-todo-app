import axios from "axios";

// 조회
const getTodos = async () => {
  const response = await axios.get(`${process.env.REACT_APP_JSON_URL}/todos`);
  return response.data;
};

// 추가
const addTodo = async (newTodo) => {
  await axios.post(`${process.env.REACT_APP_JSON_URL}/todos`, newTodo);
};

// 삭제
const removeTodo = async (id) => {
  await axios.delete(`${process.env.REACT_APP_JSON_URL}/todos/${id}`, id);
};

// 완료여부
const switchTodo = async (todo) => {
  await axios.patch(`${process.env.REACT_APP_JSON_URL}/todos/${todo.id}`, todo);
};

export { getTodos, addTodo, removeTodo, switchTodo };
