import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onFilterToggle, defaultValue = '' }) => {
  const [searchTerm, setSearchTerm] = useState(defaultValue);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // Busca em tempo real ou ao submeter
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <section className="search-section">
      <div className="container">
        <div className="search-wrapper">
          <span className="search-label">
            Encontre seu veículo
          </span>
          
          <form className="search-bar-form" onSubmit={handleSubmit}>
            <div className="search-input-box">
              <input
                type="text"
                className="search-input-field"
                placeholder="Busque por modelo ou marca"
                value={searchTerm}
                onChange={handleChange}
              />
            </div>

            <button 
              type="submit" 
              className="search-btn-action"
              aria-label="Buscar"
              title="Buscar"
            >
              🔍
            </button>

            <button 
              type="button" 
              className="filter-btn-action"
              onClick={onFilterToggle}
              aria-label="Abrir filtros"
              title="Abrir filtros"
            >
              ☰
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
