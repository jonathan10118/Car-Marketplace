import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const checkUser = () => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (e) {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    checkUser();
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="header-logo" onClick={() => setIsMenuOpen(false)}>
          <Logo size="md" text="NEXUS AUTO" />
        </Link>
        
        <nav className={`header-nav ${isMenuOpen ? 'header-nav-open' : ''}`}>
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link 
                to="/" 
                className={`header-nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="header-nav-item">
              <Link 
                to="/vehicles" 
                className={`header-nav-link ${location.pathname === '/vehicles' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Comprar
              </Link>
            </li>
            <li className="header-nav-item">
              <Link 
                to="/favorites" 
                className={`header-nav-link ${location.pathname === '/favorites' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Favoritos 9999
              </Link>
            </li>
            <li className="header-nav-item">
              <a 
                href="https://wa.me/5541999999999" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="header-nav-link header-whatsapp"
                onClick={() => setIsMenuOpen(false)}
              >
                WhatsApp (41) 99999-9999
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/profile" className="header-profile-icon" title="Meu Perfil" aria-label="Perfil">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {user ? (
            <Link to="/profile">
              <Button variant="ghost" size="sm">
                Olá, {user.name ? user.name.split(' ')[0] : 'Cliente'}
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Entrar
              </Button>
            </Link>
          )}

          <Link to="/register">
            <Button variant="primary" size="sm">
              Cadastrar
            </Button>
          </Link>
        </div>

        <button className="header-menu-toggle" aria-label="Menu" onClick={toggleMenu}>
          <span className={`header-menu-icon ${isMenuOpen ? 'header-menu-icon-open' : ''}`}></span>
          <span className={`header-menu-icon ${isMenuOpen ? 'header-menu-icon-open' : ''}`}></span>
          <span className={`header-menu-icon ${isMenuOpen ? 'header-menu-icon-open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
