import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3 className="footer-title">NEXUS MOTORS</h3>
          <p className="footer-description">
            {t.footer.description}
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">{t.footer.quickLinks}</h4>
          <ul className="footer-links">
            <li><a href="/">{t.header.home}</a></li>
            <li><a href="/vehicles">{t.header.buy}</a></li>
            <li><a href="/about">{t.header.about}</a></li>
            <li><a href="/contact">{t.footer.contact}</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">{t.footer.support}</h4>
          <ul className="footer-links">
            <li><a href="/help">{t.footer.help}</a></li>
            <li><a href="/faq">{t.footer.faq}</a></li>
            <li><a href="/terms">{t.footer.terms}</a></li>
            <li><a href="/privacy">{t.footer.privacy}</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">{t.footer.contact}</h4>
          <ul className="footer-links">
            <li>contato@nexusmotors.com</li>
            <li>(11) 9999-9999</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
