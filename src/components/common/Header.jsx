import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getNickName } from "../../api/nickname";

const Header = () => {
  const navigate = useNavigate();
  // 로그인된 사용자의 정보를 담는 객체
  const [user, setUser] = useState(null);
  const activeUserEmail = localStorage.getItem("activeUserEmail");
  const { data } = useQuery("nickname", () => getNickName(activeUserEmail));

  useEffect(() => {
    // 로컬 스토리지에서 토큰을 가져와서 로그인 상태 확인
    const token = localStorage.getItem("token");
    if (token && data?.[0]?.nickName) {
      setUser({ nickName: data[0].nickName });
    } else {
      setUser(null);
    }
  }, [data]);

  const handleLogoutBtnClick = async () => {
    const isConfirmed = window.confirm("로그아웃하시겠습니까?");
    if (isConfirmed) {
      localStorage.removeItem("token");
      localStorage.removeItem("activeUserEmail");
    }
    setUser(null);
  };

  return (
    <header
      style={{
        borderBottom: "2px solid powderblue ",
        marginBottom: "30px",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h3>리액트로 만든 투두리스트</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {user ? (
          <>
            <h4>{user.nickName} 님</h4>
            <button onClick={handleLogoutBtnClick}>로그아웃</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("login")}>로그인</button>
            <button onClick={() => navigate("join")}>회원가입</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
