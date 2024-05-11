import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND SAVE YOUR COMMENTS"
          des="My projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Patient terminal"
          des="This is a patient terminal which allows patients to register or log in and 
              then be directed to the specialist doctor's room."
          src={projectOne}
          github="https://example.com"
          site=""
        />
        <ProjectsCard
          title="Coruscant"
          des="This is a small hospital management system allowing the doctor 
                to make any prescription to the patient. Patients can view prescriptions, download documents, etc."
          src={projectThree}
          github="https://github.com/Kedesh23/health"
          site="http://sevan.coruscant.ndzile.com/"
        />
        <ProjectsCard
          title="Dark Sky"
          des="This is a web application made in Flask, allowing you to consult the weather forecast for a region via the openweather API. 
                You can preview the weather for the last 5 and next 5 days."
          src={projectFour}
          github="https://github.com/Kedesh23/dark-sky"
          site="https://dark-sky-xe9j.onrender.com/"
        />
        <ProjectsCard
          title="Mamyz"
          des="This is a landing page to advertise a mobile application."
          src={projectTwo}
          github="https://github.com/Kedesh23/landing_page_mamyz"
          site="https://landing-page-mamyz.vercel.app/"
        />
        <ProjectsCard
          title="Freelance site"
          des="There was talk of creating a freelance site with a collaborator to learn collaboration on github"
          src={projectFive}
          github="https://github.com/Kedesh23/freelance"
          site="https://freelance-rho.vercel.app/"
        />
        
      </div>
    </section>
  );
}

export default Projects