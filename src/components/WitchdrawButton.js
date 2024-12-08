import React from 'react';
import axios from 'axios';
import './SocialLoginButton.css'; // 스타일 파일 추가

const WitchdrawButton = ({ provider, backendUrl, label, color}) => {

  const requestWithdraw = async () => {
    try {
      const response = await axios.delete(`${backendUrl}/api/v1/users/withdraw`, {withCredentials:true});
      console.log(response.data);
    } catch (error) {
      console.error('Social login failed:', error.response.data);
    }
  };

  return (
    <button
      className="request-button"
      style={{ backgroundColor: color }}
      onClick={requestWithdraw}
    >
      {label}
    </button>
  );
};

export default WitchdrawButton;
