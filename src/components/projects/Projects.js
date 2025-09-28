import React from 'react'
import { useTranslation } from "react-i18next";
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  const { t } = useTranslation();
  
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title={t('projects.title')}
          des={t('projects.subtitle')}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title={t('projects.intelligentRecruiter.title')}
          des={t('projects.intelligentRecruiter.description')}
          src={projectOne}
          github="https://github.com/Kedesh11/Model_recruiter"
          site="https://recruiter-ai-sevan.streamlit.app/"
        />

        <ProjectsCard
          title={t('projects.api.title')}
          des={t('projects.api.description')}
          src={projectTwo}
          github="https://github.com/Kedesh11/SEEG-API"
          site="https://seeg-backend-api.azurewebsites.net"
        />

        <ProjectsCard
          title={t('projects.mamyz.title')}
          des={t('projects.mamyz.description')}
          src={projectThree}
          github="https://github.com/Kedesh23/landing_page_mamyz"
          site="https://landing-page-mamyz.vercel.app/"
        />
        
        <ProjectsCard
          title={t('projects.immo.title')}
          des={t('projects.immo.description')}
          src={projectFour}
          github="https://github.com/Kedesh11/immo"
          site="https://immobilier-alpha.vercel.app/"
        />

        <ProjectsCard
          title={t('projects.ecommerce.title')}
          des={t('projects.ecommerce.description')}
          src={projectFive}
          github="https://github.com/Kedesh11/tracy-hair-commerce-hub"
          site="https://majoliehair.vercel.app/"
        />
        
        <ProjectsCard
          title={t('projects.freelance.title')}
          des={t('projects.freelance.description')}
          // eslint-disable-next-line no-undef
          src={projectSix}
          github="https://github.com/Kedesh23/freelance"
          site="https://freelance-rho.vercel.app/"
        />
        
      </div>
    </section>
  );
}

export default Projects
