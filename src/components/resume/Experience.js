import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Teacher School"
            subTitle="Ecole Superieur de Commerce et de Technologie (ESCT) - (14.01.23 - 19.01.23)"
            result="Gabon"
            des="Mon module etait la gestion d'un projet web. Il etait question pour moi d'apprendre les differentes etapes, demarches et outils pour gerer un projet web."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-4xl font-bold">Internship</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title = "O'lo Hub"
            subTitle = "Python Full Stack (02.2025 - Present)"
            result = "Gabon"
            des = "J'etais en charge de developper la borne patient, celle ci permet aux patients de s'inscrire ou de se connecter puis d'etre orienter vers la salle du medecin specialiste."
          />
          <ResumeCard
            title = "Philo Multi Service (PMS)"
            subTitle = "Python Full Stack Developer & React Native (12.2023 - 02.2024)"
            result = "Gabon"
            des = "Chef d'une equipe de trois (3) developpeurs, j'etais en charge de la supervisation, coordination des teams ainsi que de la conception des projets."
          />
          <ResumeCard
            title = "BKM Gabon"
            subTitle = "Developpeur Mobile Flutter (05.2021 - 10.2021)"
            result = "Gabon"
            des = "J'etais en charge de developper des solutions mobiles en Flutter."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
