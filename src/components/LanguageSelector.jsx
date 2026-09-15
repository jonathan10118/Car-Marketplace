import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from '../translations';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslation(language);

  const languages = [
    { code: 'pt', label: '🇧🇷 PT-BR', name: t.language.portuguese },
    { code: 'es', label: '🇪🇸 ES', name: t.language.spanish },
    { code: 'en', label: '🇺🇸 EN', name: t.language.english },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <div className={`language-selector language-selector-${theme}`}>
      <button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selecionar idioma"
      >
        {currentLang.label}
        <span className={`language-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${language === lang.code ? 'active' : ''}`}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
            >
              <span className="language-flag">{lang.label.split(' ')[0]}</span>
              <span className="language-name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
