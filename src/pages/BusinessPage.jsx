import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import './BusinessPage.css';

const BusinessPage = () => {
  return (
    <div className="business-page">
      <div className="container">
        <div className="business-header">
          <h1>Meus Negócios</h1>
          <p>Gerencie seus negócios na Nexus Auto</p>
        </div>

        <div className="business-content">
          <Card variant="default" padding="xl" className="business-card">
            <div className="business-card-icon">📊</div>
            <h2>Vendas</h2>
            <p>Acompanhe suas vendas e negociações em andamento.</p>
            <div className="business-stats">
              <div className="stat-item">
                <span className="stat-value">0</span>
                <span className="stat-label">Vendas</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">R$ 0</span>
                <span className="stat-label">Total</span>
              </div>
            </div>
            <Button variant="primary" size="md">
              Ver detalhes
            </Button>
          </Card>

          <Card variant="default" padding="xl" className="business-card">
            <div className="business-card-icon">📋</div>
            <h2>Estoque</h2>
            <p>Gerencie os veículos que você anunciou na plataforma.</p>
            <div className="business-stats">
              <div className="stat-item">
                <span className="stat-value">0</span>
                <span className="stat-label">Veículos</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">0</span>
                <span className="stat-label">Visualizações</span>
              </div>
            </div>
            <Button variant="primary" size="md">
              Gerenciar estoque
            </Button>
          </Card>

          <Card variant="default" padding="xl" className="business-card">
            <div className="business-card-icon">💬</div>
            <h2>Propostas</h2>
            <p>Visualize as propostas que você recebeu de interessados.</p>
            <div className="business-stats">
              <div className="stat-item">
                <span className="stat-value">0</span>
                <span className="stat-label">Propostas</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">0</span>
                <span className="stat-label">Pendentes</span>
              </div>
            </div>
            <Button variant="primary" size="md">
              Ver propostas
            </Button>
          </Card>

          <Card variant="default" padding="xl" className="business-info">
            <h2>Informações</h2>
            <p>O módulo de negócios estará disponível em breve. Em breve você poderá:</p>
            <ul>
              <li>✓ Anunciar seus veículos na plataforma</li>
              <li>✓ Gerenciar todo o seu estoque</li>
              <li>✓ Acompanhar métricas de performance</li>
              <li>✓ Receber propostas de compradores</li>
              <li>✓ Gerenciar negociação e vendas</li>
            </ul>
            <div className="business-actions">
              <Link to="/vehicles">
                <Button variant="primary" size="lg">
                  Explorar veículos
                </Button>
              </Link>
              <Link to="/settings">
                <Button variant="outline" size="lg">
                  Configurações
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;