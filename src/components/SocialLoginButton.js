import React, {useEffect, useState} from 'react';
import './SocialLoginButton.css'; // 스타일 파일 추가
import axios from 'axios';

const SocialLoginButton = ({ provider, backendUrl, label, color }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    console.log('isModalOpen : ', isModalOpen)
    // URL의 토큰 파라미터 확인
    const urlParams = new URLSearchParams(window.location.search);
    const tempToken = urlParams.get('token');

    // 토큰이 존재하면 콘솔에 출력
    console.log('Temporary Token:', tempToken);
  
    if (tempToken) {
      setToken(tempToken);
      setIsModalOpen(true);
    }
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  const onKakaoLogin = () => {
    const currentUrl = 'http://localhost:3000/my-scrap';
    window.location.href = `${backendUrl}/oauth2/authorization/${provider}?redirectUrl=${currentUrl}`;
  }

  const handleAgeConfirmation = async (isOver14) => {
    if (isOver14) {
      try{
        const response = await axios.post(`${backendUrl}/user/test/token`, {token}, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000' // 명시적 오리진 헤더 추가
          }
        });

        console.log('Token from backend server : ', response.data);
      }catch(error){
        console.error('Error >>>> ', error);
      }
      
    } else { // 14세 미만일 경우 unlink 요청
      
      try{
        const response = await axios.post(`${backendUrl}/user/test/unlink`, {token}, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000' // 명시적 오리진 헤더 추가
          }
        });

        console.log(response.data);
      }catch(error){
        console.error("Error >>> ", error);
      }
    }
    window.location.href = 'http://localhost:3000';
  }

  return (
    <>
    <button
      className="request-button"
      style={{ backgroundColor: color }}
      onClick={onKakaoLogin}
    >
      {label}
    </button>

    {isModalOpen && (
  <div className="modal-overlay">
    <div className="modal">
      <h2>연령 확인</h2>
      <p>귀하는 14세 이상입니까?</p>
      <div className="modal-buttons">
        <button 
          onClick={() => handleAgeConfirmation(true)}
          className="confirm-button"
        >
          예, 14세 이상입니다
        </button>
        <button 
          onClick={() => handleAgeConfirmation(false)}
          className="cancel-button"
        >
          아니오
        </button>
      </div>
    </div>
  </div>
)}
    </>
    


  );
};

export default SocialLoginButton;
