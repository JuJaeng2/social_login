import React from 'react';
import axios from 'axios';
import './SocialLoginButton.css'; // 스타일 파일 추가

const DataRequestButton = ({ provider, backendUrl, label, color, setUserData }) => {

  const handleUserData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/user/test`, {withCredentials:true});
      setUserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Social login failed:', error);
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

export default DataRequestButton;
