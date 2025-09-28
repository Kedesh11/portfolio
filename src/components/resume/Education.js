import React from 'react'
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 min-h-[800px] relative z-10"
    >
      {/* part one */}
      <div className="w-full">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">{t('resume.education.period')}</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('resume.education.title')}</h2>
        </div>
        
        <div className="space-y-8 pb-8">
          <ResumeCard
            title={t('resume.education.microsoftAzure.title')}
            subTitle={t('resume.education.microsoftAzure.subTitle')}
            result={t('resume.education.microsoftAzure.result')}
            des={t('resume.education.microsoftAzure.description')}
          />

          <ResumeCard
            title={t('resume.education.dataEngineering.title')}
            subTitle={t('resume.education.dataEngineering.subTitle')}
            result={t('resume.education.dataEngineering.result')}
            des={t('resume.education.dataEngineering.description')}
          />

          <ResumeCard
            title={t('resume.education.pythonFullstackQwasar.title')}
            subTitle={t('resume.education.pythonFullstackQwasar.subTitle')}
            result={t('resume.education.pythonFullstackQwasar.result')}
            des={t('resume.education.pythonFullstackQwasar.description')}
          />

          <ResumeCard
            title={t('resume.education.pythonFullstackUdemy.title')}
            subTitle={t('resume.education.pythonFullstackUdemy.subTitle')}
            result={t('resume.education.pythonFullstackUdemy.result')}
            des={t('resume.education.pythonFullstackUdemy.description')}
          />

          <ResumeCard
            title={t('resume.education.secondarySchool.title')}
            subTitle={t('resume.education.secondarySchool.subTitle')}
            result={t('resume.education.secondarySchool.result')}
            des={t('resume.education.secondarySchool.description')}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
