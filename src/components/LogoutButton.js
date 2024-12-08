import React from 'react';
import axios from 'axios';
import './SocialLoginButton.css'; // 스타일 파일 추가

const LogoutButton = ({ provider, backendUrl, label, color }) => {

  const handleUserData = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/v1/users/logout`,{} ,{withCredentials:true});
      console.log(response.data);
      alert('로그아웃 성공!!!');
    } catch (error) {
      console.error('Social login failed:', error.response.data);
    }
  };

  return (
    <button
      className="request-button"
      style={{ backgroundColor: color }}
      onClick={handleUserData}
    >
      {label}
    </button>
  );
};

export default LogoutButton;
