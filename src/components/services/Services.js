import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import Title from '../layouts/Title';
import ServiceCard from './ServiceCard';
import { getServicesData, servicesByCategory } from '../../data/servicesData';

const Services = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const servicesData = getServicesData(t);

  const categories = [
    { id: 'all', name: t('services.categories.all'), count: servicesData.length },
    { id: 'development', name: t('services.categories.development'), count: servicesByCategory.development.length },
    { id: 'data', name: t('services.categories.data'), count: servicesByCategory.data.length },
    { id: 'ai', name: t('services.categories.ai'), count: servicesByCategory.ai.length }
  ];

  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : servicesData.filter(service => servicesByCategory[activeCategory].includes(service.id));

  const handleGeneralQuoteRequest = () => {
    // Rediriger vers la section contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title={t('services.title')} des={t('services.subtitle')} />
      </div>
      
      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-designColor text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg p-8 shadow-shadowOne">
          <h3 className="text-2xl font-bold text-white mb-4">
            {t('services.cta.title')}
          </h3>
          <p className="text-gray-300 mb-6">
            {t('services.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGeneralQuoteRequest}
              className="bg-designColor text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              {t('services.cta.requestQuote')}
            </button>
            <a 
              href="#projects" 
              className="border border-designColor text-designColor px-8 py-3 rounded-lg font-medium hover:bg-designColor hover:text-white transition-all duration-300"
            >
              {t('services.cta.viewProjects')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services
