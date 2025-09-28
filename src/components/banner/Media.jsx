import React from 'react'
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiPython, SiMicrosoftazure, SiReact } from "react-icons/si";

const Media = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            {t('banner.findMe')}
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            {t('banner.bestSkills')}
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <SiMicrosoftazure />
            </span>
            <span className="bannerIcon">
              <SiReact/>
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media
