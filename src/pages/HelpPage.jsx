import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './StaticPages.css';

const HelpPage = () => {
  return (
    <div className="static-page">
      <div className="container">
        <div className="static-card">
          <h1>Central de Ajuda — NEXUS AUTO</h1>
          <p className="static-lead">
            Veja como navegar pelo marketplace, buscar veículos, favoritar modelos e manifestar seu interesse de compra.
          </p>

          <div className="static-section">
            <h2>1. Como encontrar o veículo ideal?</h2>
            <p>
              Você pode usar a barra de busca no topo da página ou abrir o menu de filtros (☰) para filtrar por tipo (Carros, Caminhonetes, Motos), Estado (PR, SC, RS) e Cidade específica.
            </p>
          </div>

          <div className="static-section">
            <h2>2. Como funciona a demonstração de interesse?</h2>
            <p>
              Ao encontrar o modelo desejado na página de detalhes, clique em "Tenho interesse neste veículo". Se ainda não tiver entrado, faça login ou crie sua conta gratuitamente. Em seguida, confirme seus dados e finalize a solicitação. Um consultor da Nexus Auto entrará em contato para dar continuidade ao atendimento.
            </p>
          </div>

          <div className="static-section">
            <h2>3. Os veículos são 0 km?</h2>
            <p>
              Sim! Todo o catálogo Nexus Auto é composto exclusivamente por veículos 0 km revisados pelas montadoras com garantia integral de fábrica.
            </p>
          </div>

          <Link to="/faq">
            <Button variant="outline" size="md">
              Ver Perguntas Frequentes (FAQ)
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
