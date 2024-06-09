import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nav = useNavigate();
  const onClickButton = () => {
    nav('/list');
  };
  return (
    <div>
      <div>
        <button onClick={onClickButton}>질문하러 가기</button>
      </div>
      <img src="src\assets\Big.logo.png" alt="" />
      <div>
        <input type="text" placeholder="이름을 입력하세요" />
        <button>질문 받기</button>
      </div>
      <img src="src\assets\v872batch5-nunny-04 1.png" alt="" />
    </div>
  );
};

export default Home;
