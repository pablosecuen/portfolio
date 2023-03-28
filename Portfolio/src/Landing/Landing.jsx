import { useMediaQuery } from "./useMediaQuery";

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
          <h3 className="absolute top-[550px] w-full  text-center text-lg text-white md:text-4xl lg:text-6xl">
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
