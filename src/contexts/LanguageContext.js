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
    
    if (savedLanguage && ['en', 'fr'].includes(savedLanguage)) {
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
    if (['en', 'fr'].includes(language)) {
      console.log('Changing language to:', language);
      i18n.changeLanguage(language);
      setCurrentLanguage(language);
      localStorage.setItem('language', language);
      // Forcer le re-render
      window.location.reload();
    }
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    changeLanguage(newLanguage);
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
