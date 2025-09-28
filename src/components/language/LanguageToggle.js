import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaGlobe } from 'react-icons/fa';

const LanguageToggle = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const handleToggle = () => {
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    console.log('Toggling language from', currentLanguage, 'to', newLanguage);
    changeLanguage(newLanguage);
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <button
        onClick={handleToggle}
        className="bg-gradient-to-r from-designColor to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 language-toggle-bounce language-toggle-pulse"
        title={`Changer la langue (Actuel: ${currentLang?.name})`}
      >
        <FaGlobe className="text-xl" />
        <span className="font-medium text-sm">{currentLang?.flag}</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
