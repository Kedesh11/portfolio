import React from 'react'
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Me} from "../../assets/index";

const ContactLeft = () => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-50 object-cover rounded-lg mb-2"
        src={Me}
        alt="Sevan Kedesh"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">{t('banner.name')}</h3>
        <p className="text-lg font-normal text-gray-400">
          {t('banner.title1')}
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          {t('banner.description')}
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+241 077.15.79.04</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">sevankedesh11@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">{t('banner.findMe')}</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/sevankedesh.zeustrinita" target='blank' className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target='blank' className="bannerIcon">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/sevan-kedesh-ikissa-pendy-aa8095255" target='blank' className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft
