import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';
import './Header.css';

const Header = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

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
                {t.header.home}
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/vehicles" className="header-nav-link">
                {t.header.buy}
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/sell" className="header-nav-link">
                {t.header.sell}
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/about" className="header-nav-link">
                {t.header.about}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-controls">
          <ThemeToggle />
          <LanguageSelector />
        </div>

        <div className="header-actions">
          <Button variant="ghost" size="sm">
            {t.header.login}
          </Button>
          <Button variant="primary" size="sm">
            {t.header.register}
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
