import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SocialLoginButton from "./components/SocialLoginButton";
import DataRequestButton from "./components/DataRequestButton";
import UserProfileCard from "./components/UserProfileCard";
import LogoutButton from "./components/LogoutButton";
import WitchdrawButton from "./components/WitchdrawButton";

const App = () => {
  const backendUrl = "http://localhost:8080"; // 백엔드 localhost URL
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>Mamin 페이지</h1>
            </div>
          }
        />

        {/* 로그인 페이지 */}
        <Route
          path="/login"
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>로그인 페이지</h1>
              <SocialLoginButton
                provider="kakao"
                backendUrl={backendUrl}
                label="카카오 로그인"
                color="#FEE500"
              />
            </div>
          }
        />

        <Route
         path="/my-scrap"
         element={
          <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>마이 스크랩</h1>
            </div>
         }
        />

        {/* 메인 페이지 */}
        <Route
          path="/data"
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>데이터 요청 페이지</h1>
              <DataRequestButton
                provider="kakao"
                backendUrl={backendUrl}
                label="유저 데이터 요청"
                color="#FEE500"
                setUserData={setUserData}
              />
              
              {userData && <UserProfileCard userData={userData} />}
            </div>
          }
        />
        
        <Route
        path="/logout"
        element={
          <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>로그아웃 페이지</h1>
              <LogoutButton
                provider="kakao"
                backendUrl={backendUrl}
                color="#FEE500"
                label="로그아웃"
              />
              <WitchdrawButton
                provider="kakao"
                backendUrl={backendUrl}
                label="회원 탈퇴"
                color="#A3F000"
              />
              </div>
        }
        />
        {/* 잘못된 경로 처리 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
