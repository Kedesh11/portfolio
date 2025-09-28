import React from 'react'
import { useTranslation } from "react-i18next";

const FooterBottom = () => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        &copy; {new Date().getFullYear()} Sevan Kedesh. {t('footer.allRightsReserved')}
      </p>
    </div>
  );
}

export default FooterBottom
