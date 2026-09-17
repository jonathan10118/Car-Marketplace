import './StaticPages.css';

const PrivacyPage = () => {
  return (
    <div className="static-page">
      <div className="container">
        <div className="static-card">
          <h1>Política de Privacidade</h1>
          <p className="static-lead">
            A NEXUS AUTO valoriza a sua privacidade e se compromete com a segurança e proteção dos seus dados pessoais nos termos da LGPD (Lei Geral de Proteção de Dados).
          </p>

          <div className="static-section">
            <h2>1. Coleta de Dados</h2>
            <p>
              Coletamos apenas as informações estritamente necessárias para viabilizar seu atendimento comercial: nome completo, CPF, e-mail e telefone de contato informados voluntariamente no momento do cadastro ou manifestação de interesse em um veículo.
            </p>
          </div>

          <div className="static-section">
            <h2>2. Uso das Informações</h2>
            <p>
              Os dados coletados são utilizados unicamente para:
            </p>
            <ul>
              <li>Permitir contato dos consultores da Nexus Auto a respeito do veículo desejado;</li>
              <li>Salvar suas preferências de veículos favoritos;</li>
              <li>Manter a segurança do acesso à sua conta.</li>
            </ul>
          </div>

          <div className="static-section">
            <h2>3. Não Compartilhamento</h2>
            <p>
              A Nexus Auto não comercializa nem compartilha suas informações pessoais com terceiros não autorizados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
