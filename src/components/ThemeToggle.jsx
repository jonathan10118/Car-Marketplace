import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <button
      className={`theme-toggle theme-toggle-${theme}`}
      onClick={toggleTheme}
      aria-label={theme === 'light' ? t.theme.dark : t.theme.light}
      title={theme === 'light' ? t.theme.dark : t.theme.light}
    >
      <span className={`theme-option ${theme === 'light' ? 'active' : ''}`}>
        ☀️
      </span>
      <span className="theme-divider">|</span>
      <span className={`theme-option ${theme === 'dark' ? 'active' : ''}`}>
        🌙
      </span>
    </button>
  );
};

export default ThemeToggle;
