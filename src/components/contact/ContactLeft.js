import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { profile} from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={profile}
        alt="Sevan Kedesh"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sevan Kedesh IKISSA PENDY</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Python & Mobile junior
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Passionate about computing. Experienced in team-developed clinic 
          reception system. Seeking constant improvement; currently training as accelerated data engineer.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+241 062.05.36.71 / 076.28.23.40</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">pendysevan10@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/sevankedesh.zeustrinita" target='blank' className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target='blank' className="bannerIcon">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/sevan-kedesh-ikissa-pendy-aa8095255" target='blank' className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft