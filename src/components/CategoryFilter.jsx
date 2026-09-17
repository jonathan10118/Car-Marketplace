import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';
import './CategoryFilter.css';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const categories = [
    { id: 'all', label: t.categories.all },
    { id: 'cars', label: t.categories.cars },
    { id: 'pickups', label: t.categories.pickups },
    { id: 'motorcycles', label: t.categories.motorcycles },
  ];

  return (
    <div className="category-filter">
      <div className="category-filter-buttons">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-button ${selectedCategory === category.id ? 'category-button-active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
            aria-label={category.label}
          >
            <span className="category-label">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;