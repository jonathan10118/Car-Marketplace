import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './VehicleCard.css';

const VehicleCard = ({ 
  id, 
  type, 
  category, 
  brand, 
  model, 
  year, 
  price, 
  city, 
  state, 
  store, 
  images, 
  onClick, 
  onToggleFavorite 
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateFavState = () => {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        try {
          const favoriteIds = JSON.parse(savedFavorites);
          setIsFavorite(Array.isArray(favoriteIds) && favoriteIds.includes(id));
        } catch (e) {
          setIsFavorite(false);
        }
      } else {
        setIsFavorite(false);
      }
    };

    updateFavState();
    window.addEventListener('favoritesUpdated', updateFavState);
    return () => window.removeEventListener('favoritesUpdated', updateFavState);
  }, [id]);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const savedFavorites = localStorage.getItem('favorites');
    let favoriteIds = [];
    if (savedFavorites) {
      try {
        favoriteIds = JSON.parse(savedFavorites);
        if (!Array.isArray(favoriteIds)) favoriteIds = [];
      } catch (e) {
        favoriteIds = [];
      }
    }

    let newFavorites;
    if (favoriteIds.includes(id)) {
      newFavorites = favoriteIds.filter(favId => favId !== id);
      setIsFavorite(false);
    } else {
      newFavorites = [...favoriteIds, id];
      setIsFavorite(true);
    }

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    window.dispatchEvent(new Event('favoritesUpdated'));

    if (onToggleFavorite) {
      onToggleFavorite(id);
    }
  };

  const formatPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Na interface mostrar estritamente: Carro, Caminhonete, Moto (nunca "Luxo")
  const getCategoryLabel = () => {
    if (type === 'motorcycle') return 'Moto';
    if (category === 'pickup') return 'Caminhonete';
    return 'Carro';
  };

  const displayImage = images && images.length > 0 
    ? images[0] 
    : 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80';

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(`/vehicle/${id}`);
  };

  return (
    <div className="vehicle-card" onClick={handleCardClick}>
      <div className="vehicle-card-image">
        <img 
          src={displayImage} 
          alt={`${brand} ${model}`} 
          loading="lazy"
        />
        <button 
          type="button"
          className={`vehicle-card-favorite ${isFavorite ? 'vehicle-card-favorite-active' : ''}`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="vehicle-card-content">
        <div className="vehicle-card-header">
          <h3 className="vehicle-card-title">{brand} {model}</h3>
          <span className="vehicle-card-category">{getCategoryLabel()}</span>
        </div>
        
        <div className="vehicle-card-specs">
          <div className="vehicle-card-spec">
            <span className="spec-label">Ano</span>
            <span className="spec-value">{year}</span>
          </div>
          <div className="vehicle-card-spec">
            <span className="spec-label">Km</span>
            <span className="spec-value">0 km</span>
          </div>
        </div>
        
        <div className="vehicle-card-price">
          {formatPrice(price)}
        </div>
        
        <div className="vehicle-card-location">
          <span className="location-icon">📍</span>
          <span>{city}, {state}</span>
        </div>
        
        <div className="vehicle-card-store">
          <span className="store-icon">🏢</span>
          <span>{store?.name || 'Nexus Auto'}</span>
        </div>
        
        <Link 
          to={`/vehicle/${id}`} 
          className="vehicle-card-button"
          onClick={(e) => e.stopPropagation()}
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;