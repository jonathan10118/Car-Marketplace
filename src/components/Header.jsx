import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="header-logo">
          <Logo size="md" />
        </Link>
        
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link to="/" className="header-nav-link">
                Início
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/vehicles" className="header-nav-link">
                Veículos
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/about" className="header-nav-link">
                Sobre
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/contact" className="header-nav-link">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <Button variant="ghost" size="sm">
            Entrar
          </Button>
          <Button variant="primary" size="sm">
            Cadastrar
          </Button>
        </div>

        <button className="header-menu-toggle" aria-label="Menu">
          <span className="header-menu-icon"></span>
          <span className="header-menu-icon"></span>
          <span className="header-menu-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
