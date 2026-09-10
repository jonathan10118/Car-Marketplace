import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Car Marketplace</h3>
          <p className="footer-description">
            A melhor plataforma para comprar e vender veículos.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Navegação</h4>
          <ul className="footer-links">
            <li><a href="/">Início</a></li>
            <li><a href="/vehicles">Veículos</a></li>
            <li><a href="/about">Sobre</a></li>
            <li><a href="/contact">Contato</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Suporte</h4>
          <ul className="footer-links">
            <li><a href="/help">Central de Ajuda</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/terms">Termos de Uso</a></li>
            <li><a href="/privacy">Política de Privacidade</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contato</h4>
          <ul className="footer-links">
            <li>contato@carmarketplace.com</li>
            <li>(11) 9999-9999</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            © 2024 Car Marketplace. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
