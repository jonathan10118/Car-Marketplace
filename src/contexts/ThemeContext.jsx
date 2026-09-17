import { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {} // Desabilitado conforme especificação de tema escuro exclusivo
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    // Forçar tema escuro permanente
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'dark', toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
