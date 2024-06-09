import Header from '../components/Header';
import CardList from '../components/CardList';
import PageNatigion from '../components/PageNatigion';
import './List.css';
import { Link } from 'react-router-dom';

const List = () => {
  async function getData() {
    const response = await fetch(
      `https://openmind-api.vercel.app/7/subjects/?limit=1&offset=1`
    );
    const body = await response.json();
    return body;
  }

  const onClick = async () => {
    const test = await getData();
    console.log(test);
  };

  return (
    <div>
      <Header />
      <div className="list-title">
        <h1>누구에게 질문할까요?</h1>
        <select>
          <option value="">이름순</option>
          <option value="">최신순</option>
        </select>
      </div>
      <CardList />
      <PageNatigion />
      <button onClick={onClick}>데이터 성공적으로 왔나 확인해보기</button>
    </div>
  );
};

export default List;
