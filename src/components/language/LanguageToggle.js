import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageToggle = () => {
  const { currentLanguage, toggleLanguage, changeLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <div className="flex rounded-full overflow-hidden border border-gray-600 bg-gray-800 text-gray-100">
        <button
          type="button"
          onClick={() => changeLanguage('fr')}
          className={`px-3 py-1 text-sm ${currentLanguage === 'fr' ? 'bg-primaryColor text-white' : 'hover:bg-gray-700'}`}
          aria-pressed={currentLanguage === 'fr'}
        >
          FR
        </button>
        <button
          type="button"
          onClick={() => changeLanguage('en')}
          className={`px-3 py-1 text-sm ${currentLanguage === 'en' ? 'bg-primaryColor text-white' : 'hover:bg-gray-700'}`}
          aria-pressed={currentLanguage === 'en'}
        >
          EN
        </button>
      </div>
      <button
        type="button"
        onClick={toggleLanguage}
        className="px-3 py-1 text-sm rounded-full border border-gray-600 bg-gray-800 hover:bg-gray-700 text-gray-100"
        aria-label="Toggle language"
        title="Toggle language"
      >
        {currentLanguage === 'fr' ? '→ EN' : '→ FR'}
      </button>
    </div>
  );
};

export default LanguageToggle;
