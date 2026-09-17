import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { vehicles } from '../mocks/vehicles.js';
import './VehicleDetailPage.css';

const VehicleDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [vehicle, setVehicle] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [user, setUser] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  // Estados do fluxo de interesse/compra
  const [showInterestModal, setShowInterestModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showAuthRequiredModal, setShowAuthRequiredModal] = useState(false);

  // Formulário do usuário logado
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const foundVehicle = vehicles.find(v => v.id === parseInt(id));
    if (foundVehicle) {
      setVehicle(foundVehicle);
      setSelectedImageIndex(0);
    }
  }, [id]);

  useEffect(() => {
    // Carregar usuário autenticado
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        setUser(parsed);
        setFormData({
          name: parsed.name || '',
          cpf: parsed.cpf || '',
          email: parsed.email || '',
          phone: parsed.phone || ''
        });
      } catch (e) {
        setUser(null);
      }
    } else {
      setUser(null);
    }

    // Carregar estado de favorito
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites && id) {
      try {
        const favIds = JSON.parse(savedFavorites);
        setIsFavorite(Array.isArray(favIds) && favIds.includes(parseInt(id)));
      } catch (e) {
        setIsFavorite(false);
      }
    }
  }, [id]);

  const handleToggleFavorite = () => {
    const vehicleId = parseInt(id);
    const savedFavorites = localStorage.getItem('favorites');
    let favIds = [];
    if (savedFavorites) {
      try {
        favIds = JSON.parse(savedFavorites);
        if (!Array.isArray(favIds)) favIds = [];
      } catch (e) {
        favIds = [];
      }
    }

    let newFavorites;
    if (favIds.includes(vehicleId)) {
      newFavorites = favIds.filter(fId => fId !== vehicleId);
      setIsFavorite(false);
    } else {
      newFavorites = [...favIds, vehicleId];
      setIsFavorite(true);
    }

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  const handleInterestClick = () => {
    if (!user) {
      setShowAuthRequiredModal(true);
    } else {
      setShowInterestModal(true);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFinalizePurchase = (e) => {
    e.preventDefault();
    setShowInterestModal(false);
    setShowSuccessModal(true);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getCategoryLabel = () => {
    if (!vehicle) return '';
    if (vehicle.type === 'motorcycle') return 'Moto';
    if (vehicle.category === 'pickup') return 'Caminhonete';
    return 'Carro';
  };

  if (!vehicle) {
    return (
      <div className="vehicle-detail-page">
        <div className="container">
          <div className="vehicle-not-found">
            <h2>Veículo não encontrado</h2>
            <p>O veículo solicitado não está mais disponível em nosso catálogo.</p>
            <Link to="/vehicles">
              <Button variant="primary" size="lg">
                Voltar ao estoque
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const images = vehicle.images && vehicle.images.length > 0 ? vehicle.images : [
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80'
  ];

  return (
    <div className="vehicle-detail-page">
      <div className="container">
        <div className="detail-navigation">
          <Link to="/vehicles" className="back-link">
            ← Voltar para o Catálogo de Veículos
          </Link>
        </div>

        <div className="vehicle-detail-content">
          {/* Coluna da Esquerda: Galeria */}
          <div className="vehicle-gallery-section">
            <div className="main-image-container">
              <img 
                src={images[selectedImageIndex]} 
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="main-image-element"
              />
              <span className="image-counter">
                {selectedImageIndex + 1} / {images.length}
              </span>
              <button 
                type="button"
                className={`favorite-overlay-btn ${isFavorite ? 'active' : ''}`}
                onClick={handleToggleFavorite}
                aria-label="Favoritar veículo"
              >
                {isFavorite ? '❤️' : '🤍'}
              </button>
            </div>
            
            <div className="thumbnail-gallery-row">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`thumbnail-btn ${selectedImageIndex === idx ? 'active' : ''}`}
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <img src={img} alt={`Foto ${idx + 1}`} />
                </button>
              ))}
            </div>

            {/* Descrição do Veículo */}
            <Card variant="default" padding="xl" className="detail-card description-card">
              <h3 className="section-title">Descrição do Veículo</h3>
              <p className="description-text">{vehicle.description}</p>
              
              {vehicle.features && vehicle.features.length > 0 && (
                <div className="features-list-wrapper">
                  <h4 className="features-title">Destaques e Opcionais</h4>
                  <div className="features-tags">
                    {vehicle.features.map((feat, i) => (
                      <span key={i} className="feature-tag">✓ {feat}</span>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Coluna da Direita: Informações, Especificações e Ações */}
          <div className="vehicle-info-section">
            <Card variant="default" padding="xl" className="detail-card main-info-card">
              <div className="vehicle-header-group">
                <span className="vehicle-badge-category">{getCategoryLabel()}</span>
                <h1 className="vehicle-title">{vehicle.brand} {vehicle.model}</h1>
                <p className="vehicle-version-subtitle">{vehicle.version || '0km Versão Oficial'}</p>
              </div>

              <div className="vehicle-price-display">
                <span className="price-label">Preço à vista</span>
                <span className="price-value">{formatPrice(vehicle.price)}</span>
              </div>

              <div className="action-buttons-group">
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  onClick={handleInterestClick}
                  className="btn-interest-primary"
                >
                  Tenho interesse neste veículo
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  fullWidth
                  onClick={handleToggleFavorite}
                  className="btn-favorite-secondary"
                >
                  {isFavorite ? '❤️ Remover dos favoritos' : '🤍 Adicionar aos favoritos'}
                </Button>
              </div>
            </Card>

            {/* Ficha Técnica / Especificações */}
            <Card variant="default" padding="xl" className="detail-card specs-card">
              <h3 className="section-title">Especificações Técnicas</h3>
              <div className="specs-table-grid">
                <div className="spec-box">
                  <span className="spec-name">Marca</span>
                  <span className="spec-val">{vehicle.brand}</span>
                </div>
                <div className="spec-box">
                  <span className="spec-name">Modelo</span>
                  <span className="spec-val">{vehicle.model}</span>
                </div>
                <div className="spec-box">
                  <span className="spec-name">Versão</span>
                  <span className="spec-val">{vehicle.version || 'Padrão'}</span>
                </div>
                <div className="spec-box">
                  <span className="spec-name">Ano Fabricação</span>
                  <span className="spec-val">{vehicle.yearFabrication || vehicle.year}</span>
                </div>
                <div className="spec-box">
                  <span className="spec-name">Ano Modelo</span>
                  <span className="spec-val">{vehicle.year}</span>
                </div>
                <div className="spec-box">
                  <span className="spec-name">Quilometragem</span>
                  <span className="spec-val highlight-green">0 km</span>
                </div>
                <div className="spec-box">
                  <span className="spec-name">Combustível</span>
                  <span className="spec-val">{vehicle.fuel || 'Flex'}</span>
                </div>
                <div className="spec-box">
                  <span className="spec-name">Cor</span>
                  <span className="spec-val">{vehicle.color || 'Padrão'}</span>
                </div>
                <div className="spec-box">
                  <span className="spec-name">Placa</span>
                  <span className="spec-val">{vehicle.plate || 'NEX-****'}</span>
                </div>
              </div>
            </Card>

            {/* Loja e Localização */}
            <Card variant="default" padding="xl" className="detail-card location-card">
              <h3 className="section-title">Localização do Veículo</h3>
              <div className="store-location-details">
                <div className="location-row">
                  <span className="loc-icon">🏢</span>
                  <div>
                    <strong>{vehicle.store?.name || 'Nexus Auto'}</strong>
                    <p className="loc-text">{vehicle.city} - {vehicle.state}</p>
                  </div>
                </div>
              </div>

              <div className="contact-channels">
                <h4 className="contact-title">Atendimento Direto:</h4>
                <div className="channel-item">
                  <span className="channel-icon">📱</span>
                  <a 
                    href="https://wa.me/5541999999999" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="channel-link whatsapp"
                  >
                    WhatsApp: (41) 99999-9999
                  </a>
                </div>
                <div className="channel-item">
                  <span className="channel-icon">📷</span>
                  <a 
                    href="https://instagram.com/nexus.auto" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="channel-link instagram"
                  >
                    Instagram: @nexus.auto
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal 1: Se Não Estiver Logado */}
      {showAuthRequiredModal && (
        <div className="modal-overlay" onClick={() => setShowAuthRequiredModal(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Autenticação Necessária</h3>
              <button className="modal-close" onClick={() => setShowAuthRequiredModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <p className="modal-alert-text">
                Para continuar, entre na sua conta ou cadastre-se.
              </p>
              <p className="modal-subtext">
                Após autenticar-se, você retornará diretamente para este veículo para concluir sua solicitação.
              </p>
            </div>
            <div className="modal-actions">
              <Button 
                variant="outline" 
                size="md" 
                onClick={() => navigate('/login', { state: { from: location.pathname } })}
              >
                Entrar
              </Button>
              <Button 
                variant="primary" 
                size="md" 
                onClick={() => navigate('/register', { state: { from: location.pathname } })}
              >
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Formulário de Interesse (Usuário Logado) */}
      {showInterestModal && (
        <div className="modal-overlay" onClick={() => setShowInterestModal(false)}>
          <div className="modal-container modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Tenho Interesse — Finalizar Solicitação</h3>
              <button className="modal-close" onClick={() => setShowInterestModal(false)}>✕</button>
            </div>
            <form onSubmit={handleFinalizePurchase}>
              <div className="modal-body">
                <div className="form-grid">
                  <div className="form-field">
                    <label>Nome completo</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleFormChange}
                      required 
                      className="form-control"
                    />
                  </div>
                  <div className="form-field">
                    <label>CPF</label>
                    <input 
                      type="text" 
                      name="cpf" 
                      value={formData.cpf} 
                      onChange={handleFormChange}
                      required 
                      className="form-control"
                    />
                  </div>
                  <div className="form-field">
                    <label>E-mail</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleFormChange}
                      required 
                      className="form-control"
                    />
                  </div>
                  <div className="form-field">
                    <label>Telefone</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleFormChange}
                      required 
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="vehicle-summary-box">
                  <h4>Dados do Veículo (Preenchimento Automático)</h4>
                  <div className="summary-fields-grid">
                    <div className="summary-item">
                      <span className="label">Veículo:</span>
                      <span className="value">{vehicle.brand} {vehicle.model} - {vehicle.version}</span>
                    </div>
                    <div className="summary-item">
                      <span className="label">Preço:</span>
                      <span className="value price">{formatPrice(vehicle.price)}</span>
                    </div>
                    <div className="summary-item">
                      <span className="label">Loja:</span>
                      <span className="value">Nexus Auto</span>
                    </div>
                    <div className="summary-item">
                      <span className="label">Cidade/Estado:</span>
                      <span className="value">{vehicle.city} - {vehicle.state}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-actions">
                <Button type="button" variant="outline" onClick={() => setShowInterestModal(false)}>
                  Cancelar
                </Button>
                <Button type="submit" variant="primary">
                  Finalizar compra
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal 3: Sucesso pós-solicitação */}
      {showSuccessModal && (
        <div className="modal-overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="modal-container text-center" onClick={(e) => e.stopPropagation()}>
            <div className="success-icon-badge">✓</div>
            <h3 className="success-title">Solicitação registrada!</h3>
            <p className="success-message">
              Seu interesse neste veículo foi registrado. A Nexus Auto entrará em contato para continuar o atendimento.
            </p>
            <div className="modal-actions justify-center">
              <Button variant="primary" size="lg" onClick={() => setShowSuccessModal(false)}>
                Entendido
              </Button>
              <Link to="/vehicles">
                <Button variant="outline" size="lg">
                  Ver outros veículos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleDetailPage;