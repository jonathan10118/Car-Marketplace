import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('storage'));
    navigate('/');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-header">
          <h1>Meu Perfil</h1>
        </div>

        <div className="profile-content">
          <Card variant="default" padding="xl">
            <div className="profile-info">
              <div className="profile-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div className="profile-details">
                <h2>{user.name || 'Cliente Nexus'}</h2>
                <p>{user.email}</p>
                {user.phone && <p className="profile-subdetail">📱 {user.phone}</p>}
                {user.cpf && <p className="profile-subdetail">📄 CPF: {user.cpf}</p>}
              </div>
            </div>

            <div className="profile-menu">
              <Link to="/settings" className="profile-menu-item">
                <span>Configurações</span>
                <span>→</span>
              </Link>
              
              <button type="button" className="profile-menu-item profile-menu-item-danger" onClick={handleLogout}>
                <span>Sair</span>
                <span>→</span>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;