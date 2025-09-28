import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SkillBar from "./SkillBar";

const Skills = () => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Data Skills */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('resume.skills.dataSkills')}</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          <SkillBar title={t('resume.skills.skills.dataWrangling')} percentage="80%" width="w-[80%]" />
          <SkillBar title={t('resume.skills.skills.dataCleaning')} percentage="80%" width="w-[80%]" />
          <SkillBar title={t('resume.skills.skills.machineLearning')} percentage="70%" width="w-[70%]" />
          <SkillBar title={t('resume.skills.skills.dataVisualization')} percentage="80%" width="w-[80%]" />
          <SkillBar title={t('resume.skills.skills.storytelling')} percentage="70%" width="w-[70%]" />
          <SkillBar title={t('resume.skills.skills.aiAgents')} percentage="75%" width="w-[75%]" />
        </div>
      </div>

      {/* Development Skills */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('resume.skills.developmentSkills')}</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          <SkillBar title={t('resume.skills.skills.python')} percentage="90%" width="w-[90%]" />
          <SkillBar title={t('resume.skills.skills.react')} percentage="85%" width="w-[85%]" />
          <SkillBar title={t('resume.skills.skills.django')} percentage="80%" width="w-[80%]" />
          <SkillBar title={t('resume.skills.skills.fastapi')} percentage="85%" width="w-[85%]" />
          <SkillBar title={t('resume.skills.skills.postgresql')} percentage="75%" width="w-[75%]" />
          <SkillBar title={t('resume.skills.skills.azure')} percentage="70%" width="w-[70%]" />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
