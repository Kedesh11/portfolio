import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const { t, i18n } = useTranslation();
    const [key, setKey] = useState(0); // Pour forcer le re-render du typewriter
    
    const [text] = useTypewriter({
      words: [t('banner.title1')],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
      key: key // Ajouter la clé pour forcer le re-render
    });

    // Re-render le typewriter quand la langue change
    useEffect(() => {
      setKey(prev => prev + 1);
    }, [i18n.language]);

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5 mt-32">
        <h1 className="text-5xl font-bold text-white">
          {t('banner.greeting')} <span className="text-designColor capitalize">{t('banner.name')}</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
            {t('banner.description')}
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner
