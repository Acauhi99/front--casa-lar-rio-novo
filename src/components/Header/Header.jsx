import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        {/* vou colocar a logo aqui, em breve*/}
        <h1>Logo</h1>
      </div>
      <nav className="header-right">
        <ul>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/donations">Doações</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/volunteers">Voluntários</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
