import React, {  useState } from 'react'
import { useTranslation } from "react-i18next";
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience"

const Resume = () => {
   const { t, i18n } = useTranslation();
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black relative z-10">
      <div className="flex justify-center items-center text-center">
        <Title title={t('resume.title')} des={t('resume.subtitle')} />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            {t('resume.tabs.education')}
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            {t('resume.tabs.skills')}
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            {t('resume.tabs.experience')}
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            {t('resume.tabs.achievements')}
          </li>
        </ul>
      </div>
      
      {/* Contenu des onglets avec espacement approprié */}
      <div className="mt-8 min-h-[800px] relative" key={i18n.language}>
        {educationData && <Education />}
        {skillData && <Skills />}
        {achievementData && <Achievement />}
        {experienceData && <Experience />}
      </div>
 
    </section>
  );
}

export default Resume
