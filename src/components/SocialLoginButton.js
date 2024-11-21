import React from 'react';
import axios from 'axios';
import './SocialLoginButton.css'; // 스타일 파일 추가

const SocialLoginButton = ({ provider, backendUrl, label, color }) => {
  const handleLogin = async () => {
    try {
      const response = await axios.get(`${backendUrl}/auth/${provider}`);
      console.log(response.data); // 백엔드에서 받은 응답 처리
    } catch (error) {
      console.error('Social login failed:', error);
    }
  };

  return (
    <button
      className="social-login-button"
      style={{ backgroundColor: color }}
      onClick={handleLogin}
    >
      {label}
    </button>
  );
};

export default SocialLoginButton;
