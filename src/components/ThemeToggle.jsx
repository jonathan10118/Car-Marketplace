import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-toggle theme-toggle-${theme}`}
      onClick={toggleTheme}
      aria-label="Alternar tema"
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
