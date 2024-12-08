import React from 'react';
import './SocialLoginButton.css'; // 스타일 파일 추가

const UserProfileCard = ({ userData }) => {
  if (!userData) return null;

  return (
    <div className="max-w-2xl mx-auto mt-6 p-6 bg-white rounded-lg shadow">
      <div className="flex items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold">{userData.name || "사용자"}</h2>
        </div>
      </div>

      <div className="space-y-4">
        {userData.email && (
          <div className="flex items-center gap-3">
            <span className="font-semibold">이메일:</span>
            <span>{userData.email}</span>
          </div>
        )}
        {userData.role && (
          <div className="flex items-center gap-3">
            <span className="font-semibold">ROLE:</span>
            <span>{userData.role}</span>
          </div>
        )}
        {userData.nickname && (
          <div className="flex items-center gap-3">
            <span className="font-semibold">닉네임:</span>
            <span>{userData.nickname}</span>
          </div>
        )}
        {userData.createdAt && (
          <div className="flex items-center gap-3">
            <span className="font-semibold">가입일:</span>
            <span>{userData.createdAt}</span>
          </div>
        )}
        {userData.updatedAt && (
          <div className="flex items-center gap-3">
            <span className="font-semibold">수정일:</span>
            <span>{userData.updatedAt}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;
