import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Coluna 1: Marca & Descrição */}
        <div className="footer-section brand-section">
          <h3 className="footer-title">NEXUS MOTORS</h3>
          <p className="footer-description">
            O maior marketplace de veículos do Brasil. Carros e motos selecionados para você.
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="footer-section">
          <h4 className="footer-heading">Links rápidos</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/vehicles">Comprar</Link></li>
            <li><Link to="/favorites">Favoritos</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Suporte */}
        <div className="footer-section">
          <h4 className="footer-heading">Suporte</h4>
          <ul className="footer-links">
            <li><Link to="/help">Ajuda</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/terms">Termos de Uso</Link></li>
            <li><Link to="/privacy">Privacidade</Link></li>
          </ul>
        </div>

        {/* Coluna 4: Contato */}
        <div className="footer-section">
          <h4 className="footer-heading">Contato</h4>
          <ul className="footer-links contact-info-list">
            <li>
              <a href="mailto:contato@nexusmotors.com">contato@nexusmotors.com</a>
            </li>
            <li>
              <a href="tel:11999999999">(11) 9999-9999</a>
            </li>
          </ul>
        </div>

        {/* Coluna 5: Instagram */}
        <div className="footer-section instagram-section">
          <h4 className="footer-heading">Acompanhe nosso Instagram</h4>
          <p className="footer-instagram-sub">Novidades, lançamentos e muito mais!</p>
          <span className="footer-instagram-handle">@Nexus.auto</span>
          <div className="footer-instagram-action">
            <a 
              href="https://instagram.com/nexus.auto" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-instagram-follow"
            >
              Seguir agora
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            © {new Date().getFullYear()} NEXUS MOTORS. Todos os direitos reservados. NEXUS AUTO — Veículos 0km.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
