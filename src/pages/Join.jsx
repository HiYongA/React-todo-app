import React from "react";
import useInput from "../api/useInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Join = () => {
  const navigate = useNavigate();
  const [nickName, handleNickNameChange] = useInput();
  const [email, handleEmailChange] = useInput();
  const [password, handlePasswordChange] = useInput();
  const [confirmPassword, handleConfirmPasswordChange] = useInput();

  const handleJoinBtnSubmit = async (e) => {
    e.preventDefault();
    if (!nickName || !email || !password || !confirmPassword) {
      return alert("필수값이 입력되지 않았습니다. 확인해주세요.");
    }

    if (password !== confirmPassword) {
      return alert("비밀번호가 다릅니다. 확인해주세요.");
    }

    try {
      // (1) 스파르타 서버에 저장
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/register`, {
        id: email,
        password,
      });
      // (2) JSON-SERVER에 저장
      await axios.post(`${process.env.REACT_APP_JSON_URL}/nickname`, {
        id: email,
        nickName,
      });
      alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
      navigate("/login");
    } catch (error) {
      console.log("error with signUp", error);
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
        onSubmit={handleJoinBtnSubmit}
      >
        <input
          style={{
            border: "1px solid #cccccc",
            padding: "12px",
            borderRadius: "10px",
          }}
          type="text"
          placeholder="닉네임을 입력해주세요."
          name="nickName"
          value={nickName}
          onChange={handleNickNameChange}
        />
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
        <input
          style={{
            border: "1px solid #cccccc",
            padding: "12px",
            borderRadius: "10px",
          }}
          type="password"
          placeholder="비밀번호를 확인해주세요."
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
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
          회원가입
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
          onClick={() => navigate("/login")}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Join;
