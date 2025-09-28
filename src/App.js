import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import LanguageToggle from "./components/language/LanguageToggle";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <LanguageToggle />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Services />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
          <FooterBottom />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
