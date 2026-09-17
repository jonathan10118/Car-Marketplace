import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import './RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo = location.state?.from || '/profile';

  const [formData, setFormData] = useState({
    fullName: '',
    cpf: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateCPF = (cpf) => {
    const cleaned = cpf.replace(/\D/g, '');
    if (cleaned.length !== 11) return false;
    // Evitar sequências repetidas óbvias (ex: 11111111111)
    if (/^(\d)\1+$/.test(cleaned)) return false;
    return true;
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nome completo é obrigatório';
    }
    
    if (!formData.cpf.trim()) {
      newErrors.cpf = 'CPF é obrigatório';
    } else if (!validateCPF(formData.cpf)) {
      newErrors.cpf = 'CPF inválido (deve conter 11 dígitos)';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }
    
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não conferem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      const newUser = {
        name: formData.fullName.trim(),
        cpf: formData.cpf.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim()
      };

      // Salvar na lista de registrados
      const existingRegistered = localStorage.getItem('nexus_registered_users');
      let userList = [];
      if (existingRegistered) {
        try {
          userList = JSON.parse(existingRegistered);
          if (!Array.isArray(userList)) userList = [];
        } catch (err) {
          userList = [];
        }
      }
      userList.push(newUser);
      localStorage.setItem('nexus_registered_users', JSON.stringify(userList));

      // Salvar sessão ativa
      localStorage.setItem('user', JSON.stringify(newUser));
      window.dispatchEvent(new Event('storage'));

      navigate(returnTo);
    }
  };

  return (
    <div className="register-page">
      <div className="container">
        <div className="register-content">
          <Card variant="default" padding="xl">
            <div className="register-header">
              <h1>Cadastrar</h1>
              <p>Crie sua conta na Nexus Auto</p>
            </div>

            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Nome completo</label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Ex: João da Silva"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                  fullWidth
                />
              </div>

              <div className="form-group">
                <label htmlFor="cpf">CPF</label>
                <Input
                  id="cpf"
                  name="cpf"
                  placeholder="000.000.000-00"
                  value={formData.cpf}
                  onChange={handleChange}
                  error={errors.cpf}
                  fullWidth
                />
              </div>

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
                <label htmlFor="phone">Telefone</label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="(41) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  fullWidth
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Mínimo 6 caracteres"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  fullWidth
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar senha</label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Repita sua senha"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  fullWidth
                />
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth>
                Criar conta
              </Button>
            </form>

            <div className="register-footer">
              <p>Já tem uma conta?</p>
              <Link to="/login" state={{ from: location.state?.from }}>
                Entrar
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;