import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Mobile Developer.", "Full Stack Developer Python .", "Data Engineer (in progress)"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5 mt-32">
        <h1 className="text-5xl font-bold text-white">
          Hello, I'm <span className="text-designColor capitalize">Sevan Kedesh IKISSA PENDY</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm a Full-Stack python developer & Mobile junior, passionate about computing.
        I worked in a team on a system of patient reception terminal for clinic. I'm always looking for
        new learning opportunities and of improvement. I'm following accelerated data engineer training.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner