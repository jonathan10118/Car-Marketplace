import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [filters, setFilters] = useState({
    vehicleType: '',
    brand: '',
    model: '',
    minPrice: '',
    maxPrice: '',
    year: '',
    location: '',
    storeType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(filters);
    }
  };

  const handleReset = () => {
    setFilters({
      vehicleType: '',
      brand: '',
      model: '',
      minPrice: '',
      maxPrice: '',
      year: '',
      location: '',
      storeType: '',
    });
    if (onSearch) {
      onSearch({});
    }
  };

  return (
    <section className="search-section">
      <div className="container">
        <form className="search-bar" onSubmit={handleSubmit}>
          <div className="search-field search-field-select">
            <select
              name="vehicleType"
              value={filters.vehicleType}
              onChange={handleChange}
              className="search-select"
            >
              <option value="">{t.search.allTypes}</option>
              <option value="car">{t.search.cars}</option>
              <option value="motorcycle">{t.search.motorcycles}</option>
            </select>
          </div>
          <div className="search-field">
            <Input
              name="brand"
              placeholder={t.search.brand}
              value={filters.brand}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="search-field">
            <Input
              name="model"
              placeholder={t.search.model}
              value={filters.model}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="search-field search-field-small">
            <Input
              name="minPrice"
              placeholder={t.search.minPrice}
              type="number"
              value={filters.minPrice}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="search-field search-field-small">
            <Input
              name="maxPrice"
              placeholder={t.search.maxPrice}
              type="number"
              value={filters.maxPrice}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="search-field search-field-small">
            <Input
              name="year"
              placeholder={t.search.year}
              type="number"
              value={filters.year}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="search-field">
            <Input
              name="location"
              placeholder={t.search.location}
              value={filters.location}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="search-field search-field-select">
            <select
              name="storeType"
              value={filters.storeType}
              onChange={handleChange}
              className="search-select"
            >
              <option value="">{t.search.allStores}</option>
              <option value="standard">{t.search.storeStandard}</option>
              <option value="premium">{t.search.storePremium}</option>
              <option value="dealership">{t.search.storeDealership}</option>
            </select>
          </div>
          <div className="search-actions">
            <Button type="submit" variant="primary" size="md">
              {t.search.search}
            </Button>
            <Button type="button" variant="ghost" size="md" onClick={handleReset}>
              {t.search.clear}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
