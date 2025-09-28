import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20 flex-col lgl:flex-row"
    >
      {/* Job Experience */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">{t('resume.experience.jobPeriod')}</p>
          <h2 className="text-4xl font-bold">{t('resume.experience.jobTitle')}</h2>
        </div>

        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* CNX */}
          <ResumeCard
            title={t('resume.experience.jobs.cnx.title')}
            subTitle={t('resume.experience.jobs.cnx.subTitle')}
            result={t('resume.experience.jobs.cnx.result')}
            des={t('resume.experience.jobs.cnx.des')}
          />

          {/* ESCT */}
          <ResumeCard
            title={t('resume.experience.jobs.esct.title')}
            subTitle={t('resume.experience.jobs.esct.subTitle')}
            result={t('resume.experience.jobs.esct.result')}
            des={t('resume.experience.jobs.esct.des')}
          />
        </div>
      </div>

      {/* Internship Experience */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">{t('resume.experience.internshipPeriod')}</p>
          <h2 className="text-4xl font-bold">{t('resume.experience.internshipTitle')}</h2>
        </div>

        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* NSIA */}
          <ResumeCard
            title={t('resume.experience.internships.nsia.title')}
            subTitle={t('resume.experience.internships.nsia.subTitle')}
            result={t('resume.experience.internships.nsia.result')}
            des={t('resume.experience.internships.nsia.des')}
          />

          {/* O'lo Hub */}
          <ResumeCard
            title={t('resume.experience.internships.olo.title')}
            subTitle={t('resume.experience.internships.olo.subTitle')}
            result={t('resume.experience.internships.olo.result')}
            des={t('resume.experience.internships.olo.des')}
          />

          {/* PMS */}
          <ResumeCard
            title={t('resume.experience.internships.pms.title')}
            subTitle={t('resume.experience.internships.pms.subTitle')}
            result={t('resume.experience.internships.pms.result')}
            des={t('resume.experience.internships.pms.des')}
          />

          {/* BKM */}
          <ResumeCard
            title={t('resume.experience.internships.bkm.title')}
            subTitle={t('resume.experience.internships.bkm.subTitle')}
            result={t('resume.experience.internships.bkm.result')}
            des={t('resume.experience.internships.bkm.des')}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
