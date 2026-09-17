import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo = location.state?.from || '/profile';

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      // Buscar se já há usuário cadastrado com esse email
      let userObj = {
        name: 'Cliente Nexus',
        email: formData.email,
        cpf: '123.456.789-00',
        phone: '(41) 99999-9999'
      };

      const savedRegistered = localStorage.getItem('nexus_registered_users');
      if (savedRegistered) {
        try {
          const registeredUsers = JSON.parse(savedRegistered);
          const existing = registeredUsers.find(u => u.email.toLowerCase() === formData.email.toLowerCase());
          if (existing) {
            userObj = existing;
          }
        } catch (err) {
          // fallback
        }
      }

      localStorage.setItem('user', JSON.stringify(userObj));
      window.dispatchEvent(new Event('storage'));
      navigate(returnTo);
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-content">
          <Card variant="default" padding="xl">
            <div className="login-header">
              <h1>Entrar</h1>
              <p>Acesse sua conta na Nexus Auto</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  fullWidth
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  fullWidth
                />
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth>
                Entrar
              </Button>
            </form>

            <div className="login-footer">
              <p>Ainda não tem conta?</p>
              <Link to="/register" state={{ from: location.state?.from }}>
                Cadastrar
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;