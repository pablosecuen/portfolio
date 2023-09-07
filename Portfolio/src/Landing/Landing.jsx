import Technologies from "../Components/Technologies";
import About from "../Components/About";
import LanguageToggle from "../Components/LanguagueTogle";
import { useState } from "react";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import ActionMenu from "../Components/ActionMenu";
import Proyects2 from "./Proyects2";

function Landing() {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <div className=" -z-50 h-full overflow-x-hidden bg-darkbg bg-cover bg-center">
      <LanguageToggle onToggle={toggleLanguage} />
      <About language={language}></About>
      <ActionMenu />
      {/* Cards de proyectos */}
      {/* <Proyects language={language} /> */}
      <Proyects2 language={language} />

      {/* Cards de redes sociales */}
      <Technologies language={language} />
      <Contact language={language} />
      <Footer></Footer>
    </div>
  );
}

export default Landing;
