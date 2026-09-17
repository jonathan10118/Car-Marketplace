import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import './SettingsPage.css';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setFormData(prev => ({
        ...prev,
        name: parsedUser.name || '',
        email: parsedUser.email || ''
      }));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Nome é obrigatório';
    }
    if (!formData.email) {
      newErrors.email = 'E-mail é obrigatório';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      const updatedUser = {
        ...user,
        name: formData.name,
        email: formData.email
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      window.dispatchEvent(new Event('storage'));
      alert('Informações atualizadas com sucesso!');
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Senha atual é obrigatória';
    }
    if (!formData.newPassword) {
      newErrors.newPassword = 'Nova senha é obrigatória';
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'Senha deve ter no mínimo 6 caracteres';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmação é obrigatória';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Senhas não conferem';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      alert('Senha alterada com sucesso!');
      setFormData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('storage'));
    navigate('/');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="settings-page">
      <div className="container">
        <div className="settings-header">
          <Link to="/profile" className="back-link">← Voltar</Link>
          <h1>Configurações</h1>
        </div>

        <div className="settings-content">
          <Card variant="default" padding="xl" className="settings-section">
            <h2>Informações da conta</h2>
            <form className="settings-form" onSubmit={handleProfileUpdate}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  fullWidth
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  fullWidth
                />
              </div>

              <Button type="submit" variant="primary" size="md">
                Salvar informações
              </Button>
            </form>
          </Card>

          <Card variant="default" padding="xl" className="settings-section">
            <h2>Segurança</h2>
            <form className="settings-form" onSubmit={handlePasswordChange}>
              <div className="form-group">
                <label htmlFor="currentPassword">Senha atual</label>
                <Input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  error={errors.currentPassword}
                  fullWidth
                />
              </div>

              <div className="form-group">
                <label htmlFor="newPassword">Nova senha</label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.newPassword}
                  onChange={handleChange}
                  error={errors.newPassword}
                  fullWidth
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar nova senha</label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  fullWidth
                />
              </div>

              <Button type="submit" variant="primary" size="md">
                Alterar senha
              </Button>
            </form>
          </Card>

          <Card variant="default" padding="xl" className="settings-section">
            <h2>Preferências básicas</h2>
            <p className="settings-info">
              Mais opções de personalização estarão disponíveis em breve.
            </p>
          </Card>

          <Card variant="default" padding="xl" className="settings-section settings-section-danger">
            <h2>Zona de perigo</h2>
            <Button 
              variant="secondary" 
              size="md" 
              onClick={handleLogout}
              className="logout-button"
            >
              Sair da conta
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;