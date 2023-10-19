"use client";
import { useState } from "react";
import About from "./components/About/About";
import ActionMenu from "./components/ActionMenu/ActionMenu";
import LanguageToggle from "./components/LanguageToggle/LanguageToggle";

import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Carousel/Slider";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };
  return (
    <div className="flex min-h-screen  max-w-screen bg-darkbg flex-col items-center justify-between">
      <LanguageToggle onToggle={toggleLanguage} />
      <About language={language} />
      <ActionMenu />
      {/* Cards de proyectos */}
      {/* <Proyects language={language} /> */}
      <h2 className="mt-52 mb-4 md:mb-0 font-roboto text-2xl font-bold -tracking-wider text-white shadow-black text-shadow-md sm:mt-72 sm:-tracking-widest md:text-6xl lg:mt-90 lg:pl-10 xl:text-6xl">
        MY PROYECTS
      </h2>
      <Slider language={language} />

      {/* Cards de redes sociales */}
      <h2 className="mt-48 mb-4 md:mb-0  font-roboto text-2xl font-bold -tracking-wider text-white shadow-black text-shadow-md sm:mt-72 sm:-tracking-widest md:text-6xl lg:mt-90 lg:pl-10 xl:text-6xl">
        TECHNOLOGIES
      </h2>
      <Technologies />
      <Contact />
      <Footer language={language} />
    </div>
  );
}
