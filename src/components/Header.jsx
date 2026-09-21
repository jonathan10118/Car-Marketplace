import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    // Carregar contador de favoritos
    const loadFavoritesCount = () => {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        try {
          const favorites = JSON.parse(savedFavorites);
          setFavoritesCount(favorites.length);
        } catch (e) {
          setFavoritesCount(0);
        }
      } else {
        setFavoritesCount(0);
      }
    };

    loadFavoritesCount();
    
    const handleStorageChange = () => {
      loadFavoritesCount();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAccountDropdown = (e) => {
    e.stopPropagation();
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const handleAccountOption = (action) => {
    setIsAccountDropdownOpen(false);
    
    switch (action) {
      case 'profile':
        navigate('/profile');
        break;
      case 'settings':
        navigate('/settings');
        break;
      case 'business':
        navigate('/business');
        break;
      case 'logout':
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isAccountDropdownOpen && !event.target.closest('.header-account-dropdown-container')) {
        setIsAccountDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isAccountDropdownOpen]);

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
                Estoque
              </Link>
            </li>
            <li className="header-nav-item">
              <Link 
                to="/favorites" 
                className={`header-nav-link ${location.pathname === '/favorites' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Favoritos{favoritesCount > 0 && ` ${favoritesCount}`}
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
          {!user ? (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Entrar
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" size="sm">
                  Cadastrar
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/register">
                <Button variant="primary" size="sm">
                  Cadastrar
                </Button>
              </Link>
              <div className="header-account-dropdown-container">
                <button 
                  className="header-account-icon"
                  onClick={toggleAccountDropdown}
                  aria-label="Menu da conta"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {isAccountDropdownOpen && (
                  <div className="header-account-dropdown">
                    <div className="account-header">
                      <span className="account-header-title">Contas</span>
                    </div>
                    
                    <div className="account-current">
                      <div className="account-avatar">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="account-info">
                        <span className="account-name">{user.name || 'Usuário'}</span>
                        <span className="account-email">{user.email || ''}</span>
                      </div>
                    </div>

                    <div className="account-divider"></div>

                    <div className="account-option" onClick={() => handleAccountOption('profile')}>
                      <span className="option-icon">👤</span>
                      <span>Sua conta</span>
                    </div>
                    <div className="account-option" onClick={() => handleAccountOption('settings')}>
                      <span className="option-icon">⚙</span>
                      <span>Configurações</span>
                    </div>
                    <div className="account-option" onClick={() => handleAccountOption('business')}>
                      <span className="option-icon">▣</span>
                      <span>Meus negócios</span>
                    </div>
                    <div className="account-divider"></div>
                    <div className="account-option account-option-danger" onClick={() => handleAccountOption('logout')}>
                      <span className="option-icon">⇥</span>
                      <span>Fazer logout</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
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