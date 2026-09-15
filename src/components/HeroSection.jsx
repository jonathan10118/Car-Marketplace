import Button from './Button';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';
import './HeroSection.css';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            {t.hero.title}
          </h1>
          <p className="hero-description">
            {t.hero.description}
          </p>
          <div className="hero-actions">
            <Button variant="primary" size="lg">
              {t.hero.viewVehicles}
            </Button>
            <Button variant="outline" size="lg" style={{ borderColor: 'var(--color-white)', color: 'var(--color-white)' }}>
              {t.hero.sellCar}
            </Button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80" 
            alt="Carro de luxo em destaque"
            className="hero-car-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
