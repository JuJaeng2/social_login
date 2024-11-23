import React from 'react';
import './SocialLoginButton.css'; // 스타일 파일 추가

const SocialLoginButton = ({ provider, backendUrl, label, color }) => {

  const onKakaoLogin = () => {
    window.location.href = `${backendUrl}/oauth2/authorization/${provider}`;
  }

  return (
    <button
      className="request-button"
      style={{ backgroundColor: color }}
      onClick={onKakaoLogin}
    >
      {label}
    </button>
  );
};

export default SocialLoginButton;
