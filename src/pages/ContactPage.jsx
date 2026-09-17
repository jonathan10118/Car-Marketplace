import './StaticPages.css';

const ContactPage = () => {
  return (
    <div className="static-page">
      <div className="container">
        <div className="static-card">
          <h1>Fale Conosco — NEXUS AUTO</h1>
          <p className="static-lead">
            Nossa equipe de consultores especializados está à disposição para esclarecer dúvidas e auxiliar na escolha do seu próximo veículo 0 km.
          </p>

          <div className="contact-channels-grid">
            <div className="contact-channel-card">
              <span style={{ fontSize: '2rem' }}>📱</span>
              <strong>WhatsApp Curitiba</strong>
              <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer">
                (41) 99999-9999
              </a>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Atendimento de seg a sex das 8h às 19h</p>
            </div>

            <div className="contact-channel-card">
              <span style={{ fontSize: '2rem' }}>✉️</span>
              <strong>E-mail Central</strong>
              <a href="mailto:contato@nexusmotors.com">
                contato@nexusmotors.com
              </a>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Retorno em até 24 horas úteis</p>
            </div>

            <div className="contact-channel-card">
              <span style={{ fontSize: '2rem' }}>📷</span>
              <strong>Instagram Oficial</strong>
              <a href="https://instagram.com/nexus.auto" target="_blank" rel="noopener noreferrer">
                @nexus.auto
              </a>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Novidades diárias e lançamentos</p>
            </div>
          </div>

          <div className="static-section" style={{ marginTop: '2.5rem' }}>
            <h2>Matriz Administrativa</h2>
            <p>
              Nexus Auto Marketplace de Veículos Ltda.<br />
              Av. Marechal Floriano Peixoto, 4500 - Hauer, Curitiba - PR<br />
              CEP: 81630-000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
