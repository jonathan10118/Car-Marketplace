import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VehicleCard from '../components/VehicleCard';
import Button from '../components/Button';
import { vehicles } from '../mocks/vehicles.js';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const [favoriteVehicles, setFavoriteVehicles] = useState([]);

  const loadFavorites = () => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      try {
        const ids = JSON.parse(saved);
        if (Array.isArray(ids)) {
          const matched = vehicles.filter(v => ids.includes(v.id));
          setFavoriteVehicles(matched);
          return;
        }
      } catch (e) {
        // fallback
      }
    }
    setFavoriteVehicles([]);
  };

  useEffect(() => {
    loadFavorites();
    window.addEventListener('favoritesUpdated', loadFavorites);
    return () => window.removeEventListener('favoritesUpdated', loadFavorites);
  }, []);

  const handleToggleFavorite = () => {
    loadFavorites();
  };

  return (
    <div className="favorites-page">
      <div className="container">
        <div className="favorites-header">
          <h1>Meus Favoritos</h1>
          <p>
            {favoriteVehicles.length > 0 
              ? `Você possui ${favoriteVehicles.length} ${favoriteVehicles.length === 1 ? 'veículo salvo' : 'veículos salvos'} nos seus favoritos.`
              : 'Sua lista de veículos favoritos'}
          </p>
        </div>

        {favoriteVehicles.length === 0 ? (
          <div className="favorites-empty">
            <div className="favorites-empty-icon">🤍</div>
            <h2>Nenhum veículo favoritado ainda</h2>
            <p>
              Explore o estoque completo da Nexus Auto e clique no coração dos veículos que mais gostar para salvá-los aqui!
            </p>
            <Link to="/vehicles">
              <Button variant="primary" size="lg">
                Ver catálogo de veículos
              </Button>
            </Link>
          </div>
        ) : (
          <div className="favorites-grid">
            {favoriteVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                {...vehicle}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;