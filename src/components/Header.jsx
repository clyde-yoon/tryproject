import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="list-header">
      <Link to={'/'}>
        <img src="src\assets\logo.png" alt="" />
      </Link>

      <button>답변하러 가기</button>
    </div>
  );
};

export default Header;
