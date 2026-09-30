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

  // Função para formatar nome completo
  const formatName = (value) => {
    // Aceitar apenas letras, espaços e caracteres de nomes (incluindo acentos)
    const cleaned = value.replace(/[^a-zA-Zà-úÀ-Ú\s]/g, '');
    // Remover espaços duplicados
    const noExtraSpaces = cleaned.replace(/\s+/g, ' ');
    // Capitalizar primeira letra de cada palavra
    return noExtraSpaces
      .split(' ')
      .map(word => {
        if (word.length === 0) return '';
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
  };

  // Função para formatar CPF
  const formatCPF = (value) => {
    // Aceitar apenas números
    const cleaned = value.replace(/\D/g, '');
    // Limitar a 11 números
    const limited = cleaned.slice(0, 11);
    // Aplicar máscara: 000.000.000-00
    if (limited.length <= 3) {
      return limited;
    } else if (limited.length <= 6) {
      return `${limited.slice(0, 3)}.${limited.slice(3)}`;
    } else if (limited.length <= 9) {
      return `${limited.slice(0, 3)}.${limited.slice(3, 6)}.${limited.slice(6)}`;
    } else {
      return `${limited.slice(0, 3)}.${limited.slice(3, 6)}.${limited.slice(6, 9)}-${limited.slice(9)}`;
    }
  };

  // Função para formatar e-mail
  const formatEmail = (value) => {
    // Remover espaços no começo e no final
    const trimmed = value.trim();
    // Converter para minúsculas
    return trimmed.toLowerCase();
  };

  // Função para formatar telefone
  const formatPhone = (value) => {
    // Aceitar apenas números
    const cleaned = value.replace(/\D/g, '');
    // Limitar a 11 números (DDD + 9 dígitos)
    const limited = cleaned.slice(0, 11);
    // Aplicar máscara: (41) 99999-9999
    if (limited.length <= 2) {
      return limited;
    } else if (limited.length <= 7) {
      return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
    } else {
      return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
    }
  };

  // Validação completa de CPF
  const validateCPF = (cpf) => {
    const cleaned = cpf.replace(/\D/g, '');
    if (cleaned.length !== 11) return false;
    // Evitar sequências repetidas óbvias (ex: 11111111111)
    if (/^(\d)\1+$/.test(cleaned)) return false;
    
    // Validação do algoritmo do CPF
    let sum = 0;
    let remainder;
    
    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(cleaned.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleaned.substring(9, 10))) return false;
    
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum = sum + parseInt(cleaned.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleaned.substring(10, 11))) return false;
    
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Aplicar formatação específica por campo
    switch (name) {
      case 'fullName':
        formattedValue = formatName(value);
        break;
      case 'cpf':
        formattedValue = formatCPF(value);
        break;
      case 'email':
        formattedValue = formatEmail(value);
        break;
      case 'phone':
        formattedValue = formatPhone(value);
        break;
      default:
        formattedValue = value;
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  // Handler para colar (paste) - garante formatação ao colar
  const handlePaste = (e) => {
    const name = e.target.name;
    const pastedText = e.clipboardData.getData('text');
    
    let formattedValue = pastedText;
    switch (name) {
      case 'fullName':
        formattedValue = formatName(pastedText);
        break;
      case 'cpf':
        formattedValue = formatCPF(pastedText);
        break;
      case 'email':
        formattedValue = formatEmail(pastedText);
        break;
      case 'phone':
        formattedValue = formatPhone(pastedText);
        break;
    }

    // Prevenir o comportamento padrão e definir o valor formatado
    e.preventDefault();
    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nome completo é obrigatório';
    }
    
    if (!formData.cpf.trim()) {
      newErrors.cpf = 'CPF é obrigatório';
    } else if (!validateCPF(formData.cpf)) {
      newErrors.cpf = 'CPF inválido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (formData.phone.replace(/\D/g, '').length < 11) {
      newErrors.phone = 'Telefone incompleto';
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
        phone: formData.phone.trim(),
        createdAt: new Date().toISOString() // Data de criação em formato ISO
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

      // Redirecionar para Home após cadastro
      navigate('/');
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
                  onPaste={handlePaste}
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
                  onPaste={handlePaste}
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
                  onPaste={handlePaste}
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
                  onPaste={handlePaste}
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