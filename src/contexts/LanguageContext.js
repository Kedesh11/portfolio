import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const initial = savedLanguage && ['fr', 'en'].includes(savedLanguage)
      ? savedLanguage
      : (i18n.resolvedLanguage || i18n.language || 'en');

    const normalized = ['fr', 'en'].includes(initial) ? initial : 'en';
    i18n.changeLanguage(normalized);
    setCurrentLanguage(normalized);
    localStorage.setItem('language', normalized);
  }, [i18n]);

  const changeLanguage = (language) => {
    if (['fr', 'en'].includes(language)) {
      i18n.changeLanguage(language);
      setCurrentLanguage(language);
      localStorage.setItem('language', language);
    }
  };

  const toggleLanguage = () => {
    changeLanguage(currentLanguage === 'fr' ? 'en' : 'fr');
  };

  const value = {
    currentLanguage,
    changeLanguage,
    toggleLanguage,
    isEnglish: currentLanguage === 'en',
    isFrench: currentLanguage === 'fr'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
