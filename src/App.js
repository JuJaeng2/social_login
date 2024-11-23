import React, {useState } from 'react';
import SocialLoginButton from './components/SocialLoginButton';
import DataRequestButton from './components/DataRequestButton';
import UserProfileCard from './components/UserProfileCard';

const App = () => {
  const backendUrl = "http://localhost:8080"; // 백엔드 서버 URL
  const [userData, setUserData] = useState(null);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>카카오 소셜 로그인 테스트</h1>
      <div>
      <SocialLoginButton
        provider="kakao"
        backendUrl={backendUrl}
        label="카카오 로그인"
        color="#FEE500"
      />
      <DataRequestButton
        provider="kakao"
        backendUrl={backendUrl}
        label="유저 데이터 요청"
        color="FEE500"
        setUserData = {setUserData}
      />
      </div>

      {userData && (
        <UserProfileCard
        userData={userData}
        />
      )}
    </div>
  );
};

export default App;
