import React from 'react';
import './CardItem.css';

const CardItem = () => {
  return (
    <div className="card-container">
      <img className="profile-img" src="src\assets\dlfjffjjf.png" alt="" />
      <div>이윤재입니다.</div>
      <div>
        <span>받은 질문</span>
        <span>2개</span>
      </div>
    </div>
  );
};

export default CardItem;
