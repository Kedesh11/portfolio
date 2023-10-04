import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  return (
    <>
      {/* nav bar */}
      <nav className="flex justify-center items-center justify-between py-[.5em] mt-[1em]">
        <div className="w-[100px] h-[100px]">
          <img src="/profile.jpg" className="rounded-full" />
        </div>
        <div class="hidden space-x-8 lg:flex">
          <ul className="flex gap-10">
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contatcs</a></li>
          </ul>
        </div>
        <div class="flex lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <Button className="py-[1em] px-[3em] rounded-lg bg-[#202327] text-[#E2024E] buy hidden lg:flex" title="Download CV" />
      </nav>

      {/* Section of biography */}
      <div className="my-40">
        <div className="lg:flex lg:justify-between">
          <div className="w-[300px] h-full rounded-[10px] bg-[#17181b] biography my-[1em] flex justify-center ">
            <div className="w-full h-[400px]  relative">
              <img src="/profile-removebg.png" className="width-[350] h-[500px] absolute bottom-1 z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* WHAT I DO */}
      <div className="w-[90%] h-[1px] bg-[#121415] my-[3em] mx-auto"></div>
      <div>
        <h3 className="text-[#E2024E] flex justify-center">FEATURES</h3>
        <h1 className="text-[#878e99] text-2xl lg:text-6xl flex justify-center font-bold">WHAT I DO</h1>
        <div className="grid gap-10 my-[3em] sm:grid-cols md:grid-cols-2 lg:grid-cols-3">
          <a href="#">
            <div className=" h-[300px] w-[300px] rounded-lg flex flex-col px-[2em] lg:h-[350px] lg:w-[350px] blog-card"></div>
          </a>

          <a href="#">
            <div className=" h-[300px] w-[300px] rounded-lg flex flex-col px-[2em] lg:h-[350px] lg:w-[350px] blog-card"></div>
          </a>

          <a href="#">
            <div className="h-[200px] w-[300px] rounded-lg flex flex-col px-[2em] lg:h-[350px] lg:w-[350px] blog-card"></div>
          </a>

          <a href="#">
            <div className="h-[300px] w-[300px] rounded-lg flex flex-col px-[2em] lg:h-[350px] lg:w-[350px] blog-card"></div>
          </a>

          <a href="#">
            <div className="h-[200px] w-[250px] rounded-lg flex flex-col px-[2em] lg:h-[350px] lg:w-[350px] blog-card"></div>
          </a>

          <a href="#">
            <div className="h-[300px] w-[300px] rounded-lg flex flex-col px-[2em] lg:h-[350px] lg:w-[350px] blog-card"></div>
          </a>
        </div>
      </div>

      {/* Section Portfolio */}
      <div className="w-[90%] h-[1px] bg-[#121415] my-[3em] mx-auto" id="portfolio"></div>
      <div>
        <h3 className="hidden lg:text-[#E2024E] lg:flex lg:justify-center lg:my-[1em] ">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h3>
        <h1 className="text-[#c4cfde] text-2xl lg:text-6xl flex justify-center font-bold">My Portfolio</h1>
        <div className="grid gap-10 sm:grid-cols md:grid-cols-2 lg:grid-cols-3 lg:justify-between my-[3em] ">
          <a href="#">
            <div className="h-[350px] w-[300px] text-sm lg:h-[500px] lg:w-[400px] rounded-lg flex flex-col px-[2em] blog-card">
              <div className="h-[60%] flex items-center justify-center">
                <div className="h-[80%] w-full bg-white rounded-lg">
                  <img src="/portfolio1.jpg" className="rounded-lg" />
                </div>
              </div>
              <div className="h-[40%]">
                <div className="flex justify-between my-[1em]">
                  <p className="text-[#E2024E]">GALLERY</p>
                  <div className="flex gap-5 items-center">
                    <img src="./favorite.png" height={100} />
                    <p className="text-[#c4cfde]">376</p>
                  </div>
                </div>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="h-[350px] w-[300px] text-sm lg:h-[500px] lg:w-[400px]  rounded-lg flex flex-col px-[2em] blog-card">
              <div className="h-[60%] flex items-center justify-center">
                <div className="h-[80%] w-full bg-white rounded-lg">
                  <img src="/portfolio2.jpg" className="rounded-lg" />
                </div>
              </div>
              <div className="h-[40%]">
                <div className="flex justify-between my-[1em]">
                  <p className="text-[#E2024E]">VIDEO</p>
                  <div className="flex gap-5 items-center">
                    <img src="./favorite.png" height={100} />
                    <p className="text-[#c4cfde]">320</p>
                  </div>
                </div>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="h-[350px] w-[300px] text-sm lg:h-[500px] lg:w-[400px]  rounded-lg flex flex-col px-[2em] blog-card">
              <div className="h-[60%] flex items-center justify-center">
                <div className="h-[80%] w-full bg-white rounded-lg">
                  <img src="/portfolio3.jpg" className="rounded-lg" />
                </div>
              </div>
              <div className="h-[40%]">
                <div className="flex justify-between my-[1em]">
                  <p className="text-[#E2024E]">EXTERNAL LINK</p>
                  <div className="flex gap-5 items-center">
                    <img src="./favorite.png" height={100} />
                    <p className="text-[#c4cfde]">176</p>
                  </div>
                </div>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="h-[350px] w-[300px] text-sm lg:h-[500px] lg:w-[400px]  rounded-lg flex flex-col px-[2em] blog-card">
              <div className="h-[60%] flex items-center justify-center">
                <div className="h-[80%] w-full bg-white rounded-lg">
                  <img src="/portfolio4.jpg" className="rounded-lg" />
                </div>
              </div>
              <div className="h-[40%]">
                <div className="flex justify-between my-[1em]">
                  <p className="text-[#E2024E]">IMAGE</p>
                  <div className="flex gap-5 items-center">
                    <img src="./favorite.png" height={100} />
                    <p className="text-[#c4cfde]">76</p>
                  </div>
                </div>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="h-[350px] w-[300px] text-sm lg:h-[500px] lg:w-[400px]  rounded-lg flex flex-col px-[2em] blog-card">
              <div className="h-[60%] flex items-center justify-center">
                <div className="h-[80%] w-full bg-white rounded-lg">
                  <img src="/portfolio5.jpg" className="rounded-lg" />
                </div>
              </div>
              <div className="h-[40%]">
                <div className="flex justify-between my-[1em]">
                  <p className="text-[#E2024E]">GALLERY</p>
                  <div className="flex gap-5 items-center">
                    <img src="./favorite.png" height={100} />
                    <p className="text-[#c4cfde]">376</p>
                  </div>
                </div>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="h-[350px] w-[300px] text-sm lg:h-[500px] lg:w-[400px]  rounded-lg flex flex-col px-[2em] blog-card">
              <div className="h-[60%] flex items-center justify-center">
                <div className="h-[80%] w-full bg-white rounded-lg">
                  <img src="/portfolio6.jpg" className="rounded-lg" />
                </div>
              </div>
              <div className="h-[40%]">
                <div className="flex justify-between my-[1em]">
                  <p className="text-[#E2024E]">STANDARD</p>
                  <div className="flex gap-5 items-center">
                    <img src="./favorite.png" height={100} />
                    <p className="text-[#c4cfde]">450</p>
                  </div>
                </div>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Section Resume */}

      <div className="w-[90%] h-[1px] bg-[#121415] my-[3em] mx-auto" id="resume"></div>
      <div>
        <h1 className=" text-2xl lg:text-6xl font-bold text-[#878e99] flex justify-center">My Resume</h1>

        {/* Resume in desktop */}
        <div className="hidden lg:flex gap-5 my-[2em] lg:justify-between ">
          <Button className="text-[#c4cfde] hover:text-[#E2024E] py-[2em] px-[7em] rounded-lg resume" title="Education" />

          <Button className="text-[#c4cfde] hover:text-[#E2024E] py-[2em] px-[7em] rounded-lg resume" title="Professional Skills" />

          <Button className="text-[#c4cfde] hover:text-[#E2024E] py-[2em] px-[7em] rounded-lg resume" title="Experience" />

          <Button className="text-[#c4cfde] hover:text-[#E2024E] py-[2em] px-[7em] rounded-lg resume" title="Interview" />
        </div>

        {/* Resume in phone and matlob */}
        <div className="flex flex-col gap-5 my-[2em] lg:hidden">
          <Button className="text-[#c4cfde] hover:text-[#E2024E] py-[2em] px-[7em] rounded-lg resume" title="Education" />

          <Button className="text-[#c4cfde] hover:text-[#E2024E] py-[2em] px-[7em] rounded-lg resume" title="Professional Skills" />

          <Button className="text-[#c4cfde] hover:text-[#E2024E] py-[2em] px-[7em] rounded-lg resume" title="Experience" />

          <Button className="text-[#c4cfde] hover:text-[#E2024E] py-[2em] px-[7em] rounded-lg resume" title="Interview" />
        </div>

        <div className="hidden lg:flex  lg:justify-between my-[3em]  skill">
          <div className="w-[45%]">
            <h2 className="my-[.5em]">Features</h2>
            <h1 className="text-[#878e99] font-bold text-4xl my-[.5em]">Design Skill</h1>
            <div className="flex flex-col gap-5">
              <div>
                <p>PHOTOSHOP</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>FIGMA</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[95%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>ADOBE XD.</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[60%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>CANVAS</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[45%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>DISIGN</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[90%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[45%]">
            <h2 className="flex justify-start my-[.5em]">Features</h2>
            <h1 className="text-[#878e99] font-bold text-4xl my-[.5em]">Development Skills</h1>
            <div className="flex flex-col gap-5">
              <div>
                <p>HTML</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>REACT</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[90%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>NODEJS</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[70%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>JAVASCRIPT</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[60%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>ANGULAR</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[50%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* responsive mobile and matlab */}

        <div className="lg:hidden  skill">
          <div className="w-full my-[.5em]">
            <h2 className="my-[.5em]">Features</h2>
            <h1 className="text-[#878e99] font-bold text-xl my-[5em]">Design Skill</h1>
            <div className="flex flex-col gap-5">
              <div>
                <p>PHOTOSHOP</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>FIGMA</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[95%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>ADOBE XD.</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[60%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>CANVAS</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[45%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>DISIGN</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[90%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full my-[3em]">
            <h2 className="flex justify-start">Features</h2>
            <h1 className="text-[#878e99] font-bold text-xl">Development Skills</h1>
            <div className="flex flex-col gap-5">
              <div>
                <p>HTML</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>REACT</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[90%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>NODEJS</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[70%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>JAVASCRIPT</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[60%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>

              <div>
                <p>ANGULAR</p>
                <div className="div-skill  w-full h-[8px] bg-[#202327] rounded-lg">
                  <div className="h-full w-[50%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button className="w-full py-[2em] my-[2em] text-[#E2024E] rounded-lg font-bold btn-cv" title="DOWNLOAD CV" />
      </div>

      {/* Section blog */}
      <div className="w-[90%] h-[1px] bg-[#121415] my-[3em] mx-auto"></div>
      <div id="blog">
        <div className="flex flex-col justify-center items-center gap-5 my-[3em]">
          <h3 className="text-xl text-[#E2024E]">VISIT MY BLOG  AND KEEP  YOUR FEEDBACK</h3>
          <h1 className="text-2xl lg:text-6xl text-[#c4cfde] font-bold">My Blog</h1>
        </div>
        {/* Blog card */}

        <div className="grid gap-10 md:grid-cols-2 sm:grid-cols lg:grid-cols-3 justify-between">
          <a href="#">
            <div className="h-[350px] w-[300px] text-sm lg:h-[500px] lg:w-[400px] lg:text-xl  rounded-lg flex flex-col px-[2em] blog-card">
              <div className="h-[60%] flex items-center justify-center">
                <div className="h-[80%] w-full bg-white rounded-lg">
                  <img src="/blog1.jpg" className="rounded-lg" />
                </div>
              </div>
              <div className="h-[40%]">
                <div className="flex justify-between my-[1em]">
                  <p className="text-[#E2024E]">Development</p>
                  <div>
                    <p className="text-[#c4cfde]">4 min read</p>
                  </div>
                </div>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="h-[350px] w-[300px] text-sm lg:h-[500px] lg:w-[400px] lg:text-xl   rounded-lg flex flex-col px-[2em] blog-card">
              <div className="h-[60%] flex items-center justify-center">
                <div className="h-[80%] w-full bg-white rounded-lg">
                  <img src="/blog2.jpg" className="rounded-lg" />
                </div>
              </div>
              <div className="h-[40%]">
                <div className="flex justify-between my-[1em]">
                  <p className="text-[#E2024E]">Quote</p>
                  <div>
                    <p className="text-[#c4cfde]">4 min read</p>
                  </div>
                </div>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="h-[350px] w-[300px] text-sm lg:h-[500px] lg:w-[400px] lg:text-xl  rounded-lg flex flex-col px-[2em] blog-card">
              <div className="h-[60%] flex items-center justify-center">
                <div className="h-[80%] w-full bg-white rounded-lg">
                  <img src="/blog3.jpg" className="rounded-lg" />
                </div>
              </div>
              <div className="h-[40%]">
                <div className="flex justify-between my-[1em]">
                  <p className="text-[#E2024E]">Development</p>
                  <div>
                    <p className="text-[#c4cfde]">4 min read</p>
                  </div>
                </div>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="h-[350px] w-[300px] text-sm lg:h-[500px] lg:w-[400px] lg:text-xl rounded-lg flex flex-col px-[2em] blog-card">
              <div className="h-[60%] flex items-center justify-center">
                <div className="h-[80%] w-full bg-white rounded-lg">
                  <img src="/blog3.jpg" className="rounded-lg" />
                </div>
              </div>
              <div className="h-[40%]">
                <div className="flex justify-between my-[1em]">
                  <p className="text-[#E2024E]">Development</p>
                  <div>
                    <p className="text-[#c4cfde]">4 min read</p>
                  </div>
                </div>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
                <p className="text-[#c4cfde]">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </a>

        </div>
      </div>

      {/* Contact section */}
      <div className="w-[90%] h-[1px] bg-[#121415] my-[3em] mx-auto"></div>
      <div>
        <div className="flex flex-col justify-center items-center my-[3em]" id="contact">
          <h4 className="text-[#E2024E] text-xl my-[1em]">CONTACT</h4>
          <h1 className="text-2xl lg:text-6xl text-[#c4cfde] font-bold ">Contact With Me</h1>
        </div>

        <div>
          {/* responsive of desktop */}
          <div className="hidden lg:flex lg:justify-between my-[2em ]">
            {/* Section left  */}
            <div className="p-[3em] w-[30%] h-[700px] rounded-lg flex flex-col justify-between div-left">
              <div className="w-[80%] h-[300px] mx-auto bg-white rounded-lg rounded-full">
                <img src="./profile.jpg" className="rounded-lg h-full w-full" />
              </div>
              <div className=" my-[1em]">
                <h1 className="text-xl text-white my-[1em]">Marly MOUTSINGA</h1>
                <h2 className="my-[1em]">Full Stack Developper</h2>
                <p>Lorem ipsum dolor sit amet consectetur<br /> sed do eiusmod tempor elit</p>
                <p>Phone: 213412434</p>
                <p>Email: manprobleme@gmail.com</p>
              </div>
              <div>
                <h1 className="text-[#878e99]">FIND WITH ME</h1>
                <div className="flex justify-between">
                  <div className="w-[50px] h-[50px] bg-white]">
                    <img src="/facebook.png" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section right */}
            <div className="w-[60%] rounded-lg p-[2em] div-form">
              <form className="flex flex-col justify-between gap-10">
                <div className="flex justify-between">
                  <div className="flex flex-col w-[45%]">
                    <label htmlFor="name" className="">YOUR NAME</label>
                    <Input type="text" className="bg-[#191B1E] w-full h-[3em] rounded-lg" required />
                  </div>
                  <div className="flex flex-col w-[45%]">
                    <label htmlFor="number">PHONE NUMBER</label>
                    <Input type="text" className="bg-[#191B1E] w-full h-[3em] rounded-lg" required />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label tmlFor="email">EMAIL</label>
                  <Input type="email" name="email" className="bg-[#191B1E] w-full h-[3em] rounded-lg" required />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="subject">SUBJECT</label>
                  <Input type="text" name="subject" className="bg-[#191B1E] h-[4em] rounded-lg " required />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="subject">YOUR MESSAGE</label>
                  <textarea name="message" className="h-[6em] bg-[#1F2226] rounded-lg"></textarea>
                </div>
                <button className="bg-[#1F2226] w-full text-white h-[4em] rounded-lg btn-form">SEND A MESSAGE</button>
              </form>
            </div>
          </div>
        </div>

        {/* Responsive of mobil and tablette */}
        <div>
          <div className="lg:hidden">
            {/* Section left  */}
            <div className="px-[3em] w-full h-full rounded-lg flex flex-col justify-between my-[2em] div-left">
              <div className="w-[95%] h-[400px] mx-auto bg-white rounded-lg rounded-lg">
                <img src="./profile.jpg" className="rounded-lg h-full w-full" />
              </div>
              <div className=" my-[1em]">
                <h1 className="text-xl text-white">Marly MOUTSINGA</h1>
                <h2 className="my-[1em]">Full Stack Developper</h2>
                <p>Lorem ipsum dolor sit amet consectetur<br /> sed do eiusmod tempor elit</p>
                <p>Phone: 213412434</p>
                <p>Email: manprobleme@gmail.com</p>
              </div>
              <div>
                <h1 className="text-[#878e99]">FIND WITH ME</h1>
                <div className="flex justify-between"></div>
              </div>
            </div>

            {/* Section right */}
            <div className="w-full rounded-lg p-[2em] div-form">
              <form className="flex flex-col justify-between gap-10">
                <div className="flex flex-col w-full">
                  <label htmlFor="name" className="">YOUR NAME</label>
                  <Input type="text" className="bg-[#191B1E] w-full h-[3em] rounded-lg" required />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="number">PHONE NUMBER</label>
                  <Input type="text" className="bg-[#191B1E] w-full h-[3em] rounded-lg" required />
                </div>
                <div className="flex flex-col">
                  <label tmlFor="email">EMAIL</label>
                  <Input type="email" name="email" className="bg-[#191B1E] w-full h-[3em] rounded-lg" required />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="subject">SUBJECT</label>
                  <Input type="text" name="subject" className="bg-[#191B1E] h-[4em] rounded-lg " required />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="subject">YOUR MESSAGE</label>
                  <textarea name="message" className="h-[6em] bg-[#1F2226] rounded-lg"></textarea>
                </div>
                <button className="bg-[#1F2226] w-full text-white h-[4em] rounded-lg btn-form">SEND A MESSAGE</button>
              </form>
            </div>
          </div>
        </div>

      </div>


      {/* Footer */}
      <div className=""></div>
      
    </>
  )
}


