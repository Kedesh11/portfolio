import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">{t('resume.achievements.period')}</p>
          <h2 className="text-4xl font-bold">{t('resume.achievements.title')}</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          {/* Kaggle Challenge */}
          <ResumeCard
            title={t('resume.achievements.items.kaggle.title')}
            subTitle={t('resume.achievements.items.kaggle.subTitle')}
            result={t('resume.achievements.items.kaggle.result')}
            des={t('resume.achievements.items.kaggle.des')}
          />

          {/* Open Source Contribution */}
          <ResumeCard
            title={t('resume.achievements.items.opensource.title')}
            subTitle={t('resume.achievements.items.opensource.subTitle')}
            result={t('resume.achievements.items.opensource.result')}
            des={t('resume.achievements.items.opensource.des')}
          />

          {/* Hackathon */}
          <ResumeCard
            title={t('resume.achievements.items.hackathon.title')}
            subTitle={t('resume.achievements.items.hackathon.subTitle')}
            result={t('resume.achievements.items.hackathon.result')}
            des={t('resume.achievements.items.hackathon.des')}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
