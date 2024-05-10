import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiTailwindcss, SiPython, SiDjango, SiFlask } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
              <a href="https://www.facebook.com" target='blank' className="bannerIcon">
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            My best skills
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <SiDjango />
            </span>
            <span className="bannerIcon">
              <SiFlask />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media