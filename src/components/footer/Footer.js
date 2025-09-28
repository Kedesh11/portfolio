import React from 'react'
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {Me} from "../../assets/index"

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32 rounded-full cover" src={Me} alt="Me" />
        <div className="flex gap-4">
            <a href="https://www.facebook.com" target='blank' className="bannerIcon">
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
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              {t('footer.about')}
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              {t('footer.portfolio')}
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              {t('footer.services')}
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              {t('footer.resume')}
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              {t('footer.contact')}
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          {t('services.title')}
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              {t('footer.servicesList.webDev')}
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              {t('footer.servicesList.dataScience')}
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              {t('footer.servicesList.ai')}
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              {t('footer.servicesList.mobile')}
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              {t('footer.servicesList.cloud')}
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          {t('footer.contactInfo')}
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <a href="mailto:sevankedesh11@gmail.com" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              sevankedesh11@gmail.com
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sevan-kedesh-ikissa-pendy-aa8095255" target="_blank" rel="noopener noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              LinkedIn
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="https://github.com/Kedesh11" target="_blank" rel="noopener noreferrer" className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              GitHub
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
            >
              {t('footer.requestQuote')}
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer
