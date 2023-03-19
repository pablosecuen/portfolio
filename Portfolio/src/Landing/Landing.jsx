import { motion } from "framer-motion";
import { useMediaQuery } from "./useMediaQuery";

import uno from "../assets/1x/Recurso1.png";
import dos from "../assets/1x/Recurso2sol.png";
import tres from "../assets/1x/Recurso3derecho.png";
import cuatro from "../assets/1x/Recurso4.png";
import cinco from "../assets/1x/Recurso5.png";
import seis from "../assets/1x/Recurso6.png";
import siete from "../assets/1x/Recurso7.png";
import ocho from "../assets/1x/Recurso8.png";
import diez from "../assets/1x/Recurso10.png";
import once from "../assets/1x/Recurso11.png";
import doce from "../assets/1x/Recurso12.png";
import { useState } from "react";
import LandingImage from "./LandingImage";
import Proyects from "./Proyects";
import Technologies from "../Components/Technologies";

function Landing() {
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
    <div className=" -z-50 h-full overflow-x-hidden bg-primario">
      <LandingImage />
      {/* esta es la parte con fondo verde */}
      <div className="h-[5200px] bg-gradient-to-b from-primario via-green-600 to-slate-300 xsm:h-[10000px] sm:h-[10000px] md:h-[10000px] lg:h-[10000px] xl:h-[5700px] 2xl:h-[5700px]">
        {/* Cards de proyectos */}
        <Proyects />

        {/* Cards de redes sociales */}

        <div className="relative">
          <h3 className="absolute top-[950px] w-full  text-center text-lg text-white md:text-4xl lg:text-6xl">
            {" "}
            My Skills
          </h3>
          <Technologies />
        </div>
        {/* Cards de tecnologias */}
        <div></div>
      </div>
    </div>
  );
}

export default Landing;
