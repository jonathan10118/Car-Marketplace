import Card from './Card';
import Button from './Button';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';
import './VehicleCard.css';

const VehicleCard = ({
  image,
  brand,
  model,
  price,
  year,
  mileage,
  city,
  state,
  store,
  type,
  availability,
  variant = 'default',
  onClick,
}) => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const formattedPrice = typeof price === 'number' 
    ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
    : price;

  const formattedMileage = typeof mileage === 'number'
    ? new Intl.NumberFormat('pt-BR').format(mileage) + ' km'
    : mileage;

  const location = city && state ? `${city}, ${state}` : city || state || '';

  const typeIcon = type === 'motorcycle' ? '🏍️' : '🚗';
  const typeLabel = type === 'motorcycle' ? 'Moto' : 'Carro';

  return (
    <Card variant={variant} hoverable className="vehicle-card">
      <div className="vehicle-card-image">
        {image ? (
          <img src={image} alt={`${brand} ${model}`} loading="lazy" />
        ) : (
          <div className="vehicle-card-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="7" cy="17" r="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 17h6" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="17" cy="17" r="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>
      <div className="vehicle-card-content">
        <div className="vehicle-card-header">
          <h3 className="vehicle-card-title">{brand} {model}</h3>
          <div className="vehicle-card-meta">
            <span className="vehicle-card-type-badge">
              {typeIcon} {typeLabel}
            </span>
            <p className="vehicle-card-year">{year}</p>
          </div>
        </div>
        <p className="vehicle-card-price">{formattedPrice}</p>
        <div className="vehicle-card-details">
          <span className="vehicle-card-detail">
            <svg viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
              <path d="M8 2v6l4 2"/>
            </svg>
            {formattedMileage}
          </span>
          <span className="vehicle-card-detail">
            <svg viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
              <circle cx="8" cy="8" r="2"/>
            </svg>
            {location}
          </span>
        </div>
        {store && (
          <div className="vehicle-card-store">
            <span className="vehicle-card-store-icon">🏢</span>
            <span className="vehicle-card-store-name">{store.name}</span>
          </div>
        )}
        {availability === 'sold' && (
          <div className="vehicle-card-sold-badge">Vendido</div>
        )}
        {availability === 'reserved' && (
          <div className="vehicle-card-reserved-badge">Reservado</div>
        )}
        <Button variant="primary" size="sm" fullWidth onClick={onClick} disabled={availability !== 'available'}>
          {availability === 'available' ? t.vehicles.viewDetails : availability === 'sold' ? 'Vendido' : 'Reservado'}
        </Button>
      </div>
    </Card>
  );
};

export default VehicleCard;
