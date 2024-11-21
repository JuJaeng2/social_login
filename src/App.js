import React from 'react';
import SocialLoginButton from './components/SocialLoginButton';

const App = () => {
  const backendUrl = "http://localhost:5000"; // 백엔드 서버 URL

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>카카오 소셜 로그인 테스트</h1>
      <SocialLoginButton
        provider="kakao"
        backendUrl={backendUrl}
        label="카카오 로그인"
        color="#FEE500"
      />
    </div>
  );
};

export default App;
