import axios from "axios";

const getNickName = async (email) => {
  const response = await axios.get(
    `${process.env.REACT_APP_JSON_URL}/nickname?id=${email}`
  );
  return response.data;
};

export { getNickName };
