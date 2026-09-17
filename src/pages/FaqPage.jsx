import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './StaticPages.css';

const FaqPage = () => {
  const faqs = [
    {
      q: 'Quais cidades contam com lojas físicas da Nexus Auto?',
      a: 'Atualmente temos lojas no Paraná (Curitiba, Londrina, Ponta Grossa), Santa Catarina (Florianópolis, Joinville, Blumenau) e Rio Grande do Sul (Porto Alegre, Caxias do Sul, Canoas).'
    },
    {
      q: 'Existe pagamento online ou compra direta pelo site?',
      a: 'A Nexus Auto opera como uma plataforma de apresentação, catálogo e captação de interesse. O fechamento e as opções de financiamento são tratados diretamente por nossa equipe de consultores oficiais.'
    },
    {
      q: 'Como salvo os veículos que mais gostei?',
      a: 'Basta clicar no ícone de coração presente no card ou na página de detalhes do veículo. Eles ficarão guardados na sua aba "Favoritos".'
    },
    {
      q: 'Como altero meus dados cadastrais ou senha?',
      a: 'Acesse o menu "Meu Perfil" no canto superior direito e clique em "Configurações". Lá você poderá atualizar nome, e-mail e senha de acesso.'
    }
  ];

  return (
    <div className="static-page">
      <div className="container">
        <div className="static-card">
          <h1>Perguntas Frequentes (FAQ)</h1>
          <p className="static-lead">
            Tire suas dúvidas mais comuns sobre o funcionamento da plataforma NEXUS AUTO.
          </p>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <h3 className="faq-question">{faq.q}</h3>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link to="/contact">
              <Button variant="primary" size="md">
                Ainda tem dúvidas? Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
