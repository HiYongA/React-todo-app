import React from "react";
import useInput from "../api/useInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, handleEmailChange] = useInput();
  const [password, handlePasswordChange] = useInput();

  const handleLoginBtnSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("이메일 또는 패스워드가 입력되지 않았습니다. 확인해주세요.");
    }

    try {
      // 스파르타 서버에 저장
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/login`,
        {
          id: email,
          password,
        }
      );
      // 로그인 성공 시, 서버로부터 받은 토큰과 이메일을 로컬 스토리지에 저장
      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("activeUserEmail", email);
      navigate("/");
    } catch (error) {
      console.log("error with login", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "40px",
          width: "300px",
          border: "2px solid powderblue",
          borderRadius: "15px",
          gap: "20px",
        }}
        onSubmit={handleLoginBtnSubmit}
      >
        <input
          style={{
            border: "1px solid #cccccc",
            padding: "12px",
            borderRadius: "10px",
          }}
          type="email"
          placeholder="이메일을 입력해주세요."
          name="id"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          style={{
            border: "1px solid #cccccc",
            padding: "12px",
            borderRadius: "10px",
          }}
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          style={{
            color: "gray",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          type="submit"
        >
          로그인
        </button>
        <button
          style={{
            color: "gray",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          onClick={() => navigate("/join")}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Login;
