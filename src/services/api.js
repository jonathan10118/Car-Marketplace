import axios from 'axios';

// Configuração base do Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para requisições
api.interceptors.request.use(
  (config) => {
    // Adicionar token de autenticação aqui quando necessário
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para respostas
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Tratamento de erros global
    if (error.response) {
      // Erro de resposta do servidor
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Erro de requisição sem resposta
      console.error('Network Error:', error.message);
    } else {
      // Erro na configuração
      console.error('Request Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
