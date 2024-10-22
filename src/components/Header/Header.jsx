import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../Images/logoPNG.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo do asilo" className="logo" />
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
