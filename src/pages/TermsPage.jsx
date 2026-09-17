import './StaticPages.css';

const TermsPage = () => {
  return (
    <div className="static-page">
      <div className="container">
        <div className="static-card">
          <h1>Termos de Uso</h1>
          <p className="static-lead">
            Bem-vindo ao marketplace NEXUS AUTO. Ao acessar e utilizar este portal, você concorda com os termos e condições descritos abaixo.
          </p>

          <div className="static-section">
            <h2>1. Objeto do Portal</h2>
            <p>
              O portal NEXUS AUTO tem por finalidade exibir o estoque de veículos 0 km disponíveis em nossa rede de lojas parceiras e possibilitar que usuários manifestem interesse de compra.
            </p>
          </div>

          <div className="static-section">
            <h2>2. Disponibilidade e Preços</h2>
            <p>
              Os preços, versões e disponibilidades de veículos indicados no catálogo refletem os valores de tabela praticados pelas lojas oficiais e estão sujeitos a confirmação de estoque no momento do atendimento presencial ou telefônico.
            </p>
          </div>

          <div className="static-section">
            <h2>3. Cadastro e Segurança</h2>
            <p>
              O usuário é responsável pela veracidade dos dados informados no cadastro (nome, CPF, telefone e e-mail) e pela confidencialidade de sua senha de acesso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
