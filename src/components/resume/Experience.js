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
            des="My module was web project management. For me it was about learning the different steps, 
                  approaches and tools to manage a web project."
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
            des = "I was in charge of developing the patient terminal, 
                  which allows patients to register or connect and then be directed to the specialist doctor's room."
          />
          <ResumeCard
            title = "Philo Multi Service (PMS)"
            subTitle = "Python Full Stack Developer & React Native (12.2023 - 02.2024)"
            result = "Gabon"
            des = "Leader of a team of three (3) developers, I was in charge of supervision, 
                  coordination of teams as well as project design.Leader of a team of three (3) developers, I was in charge of supervision, coordination of teams as well as project design."
          />
          <ResumeCard
            title = "BKM Gabon"
            subTitle = "Developpeur Mobile Flutter (05.2021 - 10.2021)"
            result = "Gabon"
            des = "I was in charge of developing mobile solutions in Flutter."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
