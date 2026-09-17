import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './StaticPages.css';

const AboutPage = () => {
  return (
    <div className="static-page">
      <div className="container">
        <div className="static-card">
          <h1>Sobre a NEXUS AUTO</h1>
          <p className="static-lead">
            A NEXUS AUTO é o maior marketplace de veículos 0 km do Sul do Brasil, conectando apaixonados por carros e motos aos melhores modelos com garantia de fábrica e atendimento humanizado.
          </p>

          <div className="static-section">
            <h2>Nossa História</h2>
            <p>
              Fundada com o propósito de modernizar a experiência de aquisição de veículos novos, a Nexus Auto consolidou uma rede exclusiva de concessionárias no Paraná, Santa Catarina e Rio Grande do Sul.
            </p>
          </div>

          <div className="static-section">
            <h2>Nossos Diferenciais</h2>
            <ul>
              <li><strong>100% Veículos 0 km:</strong> Todos os veículos do catálogo são novos e revisados pelas montadoras.</li>
              <li><strong>Presença Regional:</strong> Lojas físicas em Curitiba, Londrina, Ponta Grossa, Florianópolis, Joinville, Blumenau, Porto Alegre, Caxias do Sul e Canoas.</li>
              <li><strong>Transparência:</strong> Dados claros, especificações técnicas detalhadas e canal direto via WhatsApp e Instagram.</li>
            </ul>
          </div>

          <Link to="/vehicles">
            <Button variant="primary" size="lg">
              Explorar Estoque
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
