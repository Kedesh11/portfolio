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
  const [currentLanguage, setCurrentLanguage] = useState('fr'); // Français par défaut

  useEffect(() => {
    // Vérifier s'il y a une langue sauvegardée
    const savedLanguage = localStorage.getItem('language');
    
    if (savedLanguage && ['fr'].includes(savedLanguage)) {
      i18n.changeLanguage(savedLanguage);
      setCurrentLanguage(savedLanguage);
    } else {
      // Par défaut en français
      i18n.changeLanguage('fr');
      setCurrentLanguage('fr');
      localStorage.setItem('language', 'fr');
    }
  }, [i18n]);

  const changeLanguage = (language) => {
    if (language === 'fr') {
      i18n.changeLanguage('fr');
      setCurrentLanguage('fr');
      localStorage.setItem('language', 'fr');
    }
  };

  const toggleLanguage = () => {
    // Français uniquement: pas de bascule
    changeLanguage('fr');
  };

  const value = {
    currentLanguage,
    changeLanguage,
    toggleLanguage,
    isEnglish: false,
    isFrench: currentLanguage === 'fr'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
