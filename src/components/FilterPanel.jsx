import { useState, useEffect } from 'react';
import Button from './Button';
import './FilterPanel.css';

const FilterPanel = ({ isOpen, onClose, onApply, onClear, currentFilters = {} }) => {
  const [vehicleType, setVehicleType] = useState(currentFilters.vehicleType || 'all');
  const [state, setState] = useState(currentFilters.state || 'all');
  const [city, setCity] = useState(currentFilters.city || 'all');

  const citiesByState = {
    'PR': ['Curitiba', 'Londrina', 'Ponta Grossa'],
    'SC': ['Florianópolis', 'Joinville', 'Blumenau'],
    'RS': ['Porto Alegre', 'Caxias do Sul', 'Canoas']
  };

  useEffect(() => {
    if (currentFilters) {
      if (currentFilters.vehicleType) setVehicleType(currentFilters.vehicleType);
      if (currentFilters.state) setState(currentFilters.state);
      if (currentFilters.city) setCity(currentFilters.city);
    }
  }, [currentFilters, isOpen]);

  const handleApply = () => {
    onApply({ vehicleType, state, city });
    onClose();
  };

  const handleClear = () => {
    setVehicleType('all');
    setState('all');
    setCity('all');
    if (onClear) {
      onClear();
    }
    onClose();
  };

  const handleStateChange = (newState) => {
    setState(newState);
    setCity('all');
  };

  if (!isOpen) return null;

  return (
    <div className="filter-panel-overlay" onClick={onClose}>
      <div className="filter-panel" onClick={(e) => e.stopPropagation()}>
        <div className="filter-panel-header">
          <h3>Filtros de Veículos</h3>
          <button className="filter-panel-close" onClick={onClose} aria-label="Fechar filtros">✕</button>
        </div>

        <div className="filter-panel-content">
          <div className="filter-group">
            <label htmlFor="filter-type">Tipo</label>
            <select 
              id="filter-type"
              value={vehicleType} 
              onChange={(e) => setVehicleType(e.target.value)}
              className="filter-select"
            >
              <option value="all">Todos</option>
              <option value="car">Carros</option>
              <option value="pickup">Caminhonetes</option>
              <option value="motorcycle">Motos</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="filter-state">Estado</label>
            <select 
              id="filter-state"
              value={state} 
              onChange={(e) => handleStateChange(e.target.value)}
              className="filter-select"
            >
              <option value="all">Todos</option>
              <option value="PR">Paraná</option>
              <option value="SC">Santa Catarina</option>
              <option value="RS">Rio Grande do Sul</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="filter-city">Cidade</label>
            <select 
              id="filter-city"
              value={city} 
              onChange={(e) => setCity(e.target.value)}
              className="filter-select"
              disabled={state === 'all'}
            >
              <option value="all">Todas</option>
              {state !== 'all' && citiesByState[state]?.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {state === 'all' && (
              <span className="filter-hint">Selecione um estado para escolher a cidade</span>
            )}
          </div>
        </div>

        <div className="filter-panel-footer">
          <Button variant="outline" size="md" onClick={handleClear}>
            Limpar filtros
          </Button>
          <Button variant="primary" size="md" onClick={handleApply}>
            Aplicar filtros
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;