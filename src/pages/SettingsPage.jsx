import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import './SettingsPage.css';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: ''
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setFormData({
        name: parsedUser.name || '',
        email: parsedUser.email || '',
        phone: parsedUser.phone || '',
        cpf: parsedUser.cpf || ''
      });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Restaurar dados originais
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        cpf: user.cpf || ''
      });
    }
  };

  const handleSavePersonalInfo = (e) => {
    e.preventDefault();
    
    const updatedUser = {
      ...user,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      cpf: formData.cpf
    };
    
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
    alert('Informações pessoais atualizadas com sucesso!');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('A nova senha e a confirmação não conferem.');
      return;
    }
    
    if (passwordData.newPassword.length < 6) {
      alert('A nova senha deve ter no mínimo 6 caracteres.');
      return;
    }
    
    alert('Senha alterada com sucesso!');
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const getCreationDate = () => {
    if (user && user.createdAt) {
      return new Date(user.createdAt).toLocaleDateString('pt-BR');
    }
    return '10/09/2026';
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
          {/* Informações Pessoais */}
          <Card variant="default" padding="xl" className="settings-section">
            <div className="settings-section-header">
              <div className="settings-section-title">
                <span className="settings-section-icon">👤</span>
                <h2>Informações pessoais</h2>
                <p>Mantenha seus dados sempre atualizados.</p>
              </div>
              {!isEditing && (
                <Button variant="outline" size="sm" onClick={handleEditClick}>
                  Editar
                </Button>
              )}
            </div>

            <form className="settings-form" onSubmit={handleSavePersonalInfo}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Nome completo</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={!isEditing}
                    fullWidth
                  />
                </div>

                <div className="form-group">
                  <label>CPF</label>
                  <Input
                    value={formData.cpf}
                    onChange={(e) => setFormData({...formData, cpf: e.target.value})}
                    disabled={!isEditing}
                    fullWidth
                  />
                </div>

                <div className="form-group">
                  <label>E-mail</label>
                  <Input
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={!isEditing}
                    fullWidth
                  />
                </div>

                <div className="form-group">
                  <label>Telefone</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    disabled={!isEditing}
                    fullWidth
                  />
                </div>
              </div>

              {isEditing && (
                <div className="form-actions">
                  <Button type="button" variant="outline" onClick={handleCancelEdit}>
                    Cancelar
                  </Button>
                  <Button type="submit" variant="primary">
                    Salvar alterações
                  </Button>
                </div>
              )}
            </form>
          </Card>

          {/* Segurança */}
          <Card variant="default" padding="xl" className="settings-section">
            <div className="settings-section-header">
              <div className="settings-section-title">
                <span className="settings-section-icon">🔒</span>
                <h2>Segurança</h2>
                <p>Mantenha sua conta protegida.</p>
              </div>
            </div>

            <form className="settings-form" onSubmit={handlePasswordChange}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Senha atual</label>
                  <div className="password-input-container">
                    <Input
                      type={showPasswords.current ? 'text' : 'password'}
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                      placeholder="Digite sua senha atual"
                      fullWidth
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => togglePasswordVisibility('current')}
                    >
                      {showPasswords.current ? '👁' : '👁‍🗨'}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label>Nova senha</label>
                  <div className="password-input-container">
                    <Input
                      type={showPasswords.new ? 'text' : 'password'}
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                      placeholder="Digite sua nova senha"
                      fullWidth
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => togglePasswordVisibility('new')}
                    >
                      {showPasswords.new ? '👁' : '👁‍🗨'}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label>Confirmar nova senha</label>
                  <div className="password-input-container">
                    <Input
                      type={showPasswords.confirm ? 'text' : 'password'}
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                      placeholder="Confirme sua nova senha"
                      fullWidth
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => togglePasswordVisibility('confirm')}
                    >
                      {showPasswords.confirm ? '👁' : '👁‍🗨'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <Button type="submit" variant="primary">
                  Alterar senha
                </Button>
              </div>
            </form>
          </Card>

          {/* Conta */}
          <Card variant="default" padding="xl" className="settings-section">
            <div className="settings-section-header">
              <div className="settings-section-title">
                <span className="settings-section-icon">📁</span>
                <h2>Conta</h2>
                <p>Informações da sua conta.</p>
              </div>
            </div>

            <div className="account-info">
              <div className="form-group">
                <label>Data de criação</label>
                <div className="read-only-input">
                  <span className="calendar-icon">📅</span>
                  <span>{getCreationDate()}</span>
                </div>
              </div>

              <div className="form-group">
                <label>Status da conta</label>
                <div className="read-only-input">
                  <span className="status-dot status-active"></span>
                  <span>Ativa</span>
                </div>
              </div>
            </div>

            <div className="account-message">
              <p>Sua conta está ativa e funcionando normalmente. Se precisar de ajuda, entre em contato com o suporte.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;