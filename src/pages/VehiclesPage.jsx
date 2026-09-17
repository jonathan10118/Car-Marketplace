import { useState, useMemo } from 'react';
import VehicleCard from '../components/VehicleCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import Button from '../components/Button';
import { vehicles } from '../mocks/vehicles.js';
import './VehiclesPage.css';

const VehiclesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    vehicleType: 'all',
    state: 'all',
    city: 'all'
  });

  const filteredVehicles = useMemo(() => {
    let result = [...vehicles];

    // Filtro por termo de busca
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(v => {
        return (
          v.brand.toLowerCase().includes(term) ||
          v.model.toLowerCase().includes(term) ||
          (v.version && v.version.toLowerCase().includes(term)) ||
          v.description.toLowerCase().includes(term) ||
          v.city.toLowerCase().includes(term) ||
          v.state.toLowerCase().includes(term)
        );
      });
    }

    // Filtro por Tipo de Veículo
    if (filters.vehicleType !== 'all') {
      result = result.filter(v => {
        if (filters.vehicleType === 'car') {
          return v.type === 'car' && v.category !== 'pickup';
        }
        if (filters.vehicleType === 'pickup') {
          return v.category === 'pickup';
        }
        if (filters.vehicleType === 'motorcycle') {
          return v.type === 'motorcycle';
        }
        return true;
      });
    }

    // Filtro por Estado
    if (filters.state !== 'all') {
      result = result.filter(v => v.state === filters.state);
    }

    // Filtro por Cidade
    if (filters.city !== 'all') {
      result = result.filter(v => v.city.toLowerCase() === filters.city.toLowerCase());
    }

    return result;
  }, [searchTerm, filters]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({ vehicleType: 'all', state: 'all', city: 'all' });
    setSearchTerm('');
  };

  const activeFiltersCount = 
    (filters.vehicleType !== 'all' ? 1 : 0) +
    (filters.state !== 'all' ? 1 : 0) +
    (filters.city !== 'all' ? 1 : 0);

  return (
    <div className="vehicles-page">
      <div className="container">
        <div className="vehicles-header">
          <h1>Catálogo de Veículos</h1>
          <p>
            {filteredVehicles.length === 75 
              ? 'Todos os 75 veículos 0 km em estoque' 
              : `Exibindo ${filteredVehicles.length} de 75 veículos disponíveis`}
          </p>
        </div>

        <SearchBar 
          onSearch={handleSearch} 
          onFilterToggle={() => setIsFilterOpen(true)}
          defaultValue={searchTerm}
        />
        
        <FilterPanel
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onApply={handleApplyFilters}
          onClear={handleClearFilters}
          currentFilters={filters}
        />

        {(activeFiltersCount > 0 || searchTerm) && (
          <div className="active-filters-bar">
            <span className="active-filters-label">Filtros ativos:</span>
            {searchTerm && (
              <span className="filter-pill">
                Busca: "{searchTerm}" 
                <button onClick={() => setSearchTerm('')}>✕</button>
              </span>
            )}
            {filters.vehicleType !== 'all' && (
              <span className="filter-pill">
                Tipo: {filters.vehicleType === 'car' ? 'Carros' : filters.vehicleType === 'pickup' ? 'Caminhonetes' : 'Motos'}
                <button onClick={() => setFilters(f => ({ ...f, vehicleType: 'all' }))}>✕</button>
              </span>
            )}
            {filters.state !== 'all' && (
              <span className="filter-pill">
                Estado: {filters.state}
                <button onClick={() => setFilters(f => ({ ...f, state: 'all', city: 'all' }))}>✕</button>
              </span>
            )}
            {filters.city !== 'all' && (
              <span className="filter-pill">
                Cidade: {filters.city}
                <button onClick={() => setFilters(f => ({ ...f, city: 'all' }))}>✕</button>
              </span>
            )}
            <button className="clear-all-link" onClick={handleClearFilters}>
              Limpar todos
            </button>
          </div>
        )}

        {filteredVehicles.length === 0 ? (
          <div className="vehicles-empty">
            <h2>Nenhum veículo encontrado</h2>
            <p>Não encontramos esse veículo no estoque no momento. Tente buscar por outra marca ou modelo.</p>
            <div className="empty-actions">
              <Button variant="primary" size="lg" onClick={handleClearFilters}>
                Limpar filtros e ver todos os 75 veículos
              </Button>
            </div>
          </div>
        ) : (
          <div className="vehicles-grid">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                {...vehicle}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VehiclesPage;