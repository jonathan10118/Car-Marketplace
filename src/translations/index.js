import { translations as pt } from './pt.js';
import { translations as es } from './es.js';
import { translations as en } from './en.js';

export const translations = {
  pt,
  es,
  en,
};

export const useTranslation = (language) => {
  return translations[language] || translations.pt;
};
