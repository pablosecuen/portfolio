import { useMediaQuery } from "./useMediaQuery";
import LanguageToggle from "../Components/LanguagueTogle";
import { useState, lazy, Suspense } from "react";

import ActionMenu from "../Components/ActionMenu";

const Proyects = lazy(() => import("./Proyects"));
const Technologies = lazy(() => import("../Components/Technologies"));
const About = lazy(() => import("../Components/About"));
const Contact = lazy(() => import("../Components/Contact"));
const Footer = lazy(() => import("../Components/Footer"));

function Landing() {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };
  const isXSmallMobile = useMediaQuery("(max-width: 370px)");
  const isSmallMobile = useMediaQuery(
    "(min-width: 371px) and (max-width: 639px)"
  );
  const isMobile = useMediaQuery("(min-width: 640px) and (max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery(
    "(min-width: 1024px) and (max-width: 1279px)"
  );
  const isLargeDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <div className=" -z-50 h-full overflow-x-hidden bg-bggrey bg-cover bg-center">
      <LanguageToggle onToggle={toggleLanguage} />
      <About language={language}></About>
      <ActionMenu />
      {/* Cards de proyectos */}
      <Proyects language={language} />
      {/* Cards de redes sociales */}
      <Technologies language={language} />
      <Contact language={language} />
      <Footer></Footer>
    </div>
  );
}

export default Landing;
