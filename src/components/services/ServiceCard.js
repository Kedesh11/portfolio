import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const handleQuoteRequest = () => {
    // Stocker le service sélectionné dans localStorage
    localStorage.setItem('selectedService', JSON.stringify({
      title: service.title,
      description: service.description,
      price: service.price
    }));
    
    // Rediriger vers la section contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="w-full p-6 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne hover:shadow-2xl transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with icon and title */}
      <div className="flex items-center gap-4 mb-4">
        <div className="text-3xl text-designColor group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-designColor transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-designColor font-semibold">
            {service.price}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* {t("services.technologies")} */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
          {t("services.technologies")}
        </h4>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full hover:bg-designColor hover:text-white transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
          {t("services.included")}
        </h4>
        <ul className="space-y-2">
          {Array.isArray(service.features) ? service.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
              <div className="w-2 h-2 bg-designColor rounded-full"></div>
              {feature}
            </li>
          )) : (
            <li className="flex items-center gap-2 text-gray-300 text-sm">
              <div className="w-2 h-2 bg-designColor rounded-full"></div>
              {service.features}
            </li>
          )}
        </ul>
      </div>

      {/* Action button */}
      <div className="pt-4 border-t border-gray-700">
        <button 
          onClick={handleQuoteRequest}
          className="w-full bg-gradient-to-r from-designColor to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:from-pink-600 hover:to-designColor transition-all duration-300 transform hover:scale-105"
        >
          {t('services.cta.requestQuote')}
        </button>
      </div>

      {/* Hover effect */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-designColor/10 to-pink-600/10 rounded-lg pointer-events-none"
        />
      )}
    </motion.div>
  );
}

export default ServiceCard
