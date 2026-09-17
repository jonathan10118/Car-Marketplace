import { createContext, useContext, useEffect } from 'react';

const LanguageContext = createContext({
  language: 'pt',
  changeLanguage: () => {}
});

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  useEffect(() => {
    localStorage.setItem('language', 'pt');
  }, []);

  return (
    <LanguageContext.Provider value={{ language: 'pt', changeLanguage: () => {} }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
