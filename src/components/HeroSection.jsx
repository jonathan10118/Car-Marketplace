import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            BEM-VINDO À NEXUS AUTO
          </h1>
          <p className="hero-description">
            Seu próximo veículo está aqui!
          </p>
          
          <div className="hero-benefits">
            <div className="hero-benefit">
              <span className="hero-benefit-icon">✓</span>
              <span>Veículos Revisados</span>
            </div>
            <div className="hero-benefit">
              <span className="hero-benefit-icon">✓</span>
              <span>Condições Especiais</span>
            </div>
            <div className="hero-benefit">
              <span className="hero-benefit-icon">✓</span>
              <span>Segurança na Compra</span>
            </div>
            <div className="hero-benefit">
              <span className="hero-benefit-icon">✓</span>
              <span>As Melhores Marcas</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" 
            alt="Veículo premium"
            className="hero-car-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
