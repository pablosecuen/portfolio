import { useParallax } from "react-scroll-parallax";
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

function Landing() {
  const { ref } = useParallax({ speed: 300 });

  const isSmallMobile = useMediaQuery("(max-width: 639px)");
  const isMobile = useMediaQuery("(min-width: 640px) and (max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery(
    "(min-width: 1024px) and (max-width: 1279px)"
  );
  const isLargeDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <div className=" -z-50 h-full overflow-x-hidden bg-primario">
      <div ref={ref} className=" h-screen overflow-hidden bg-fixed">
        <div className="relative  h-screen bg-fondo bg-fixed bg-center">
          {/* arboles */}{" "}
          <div className="xl:bot-0 absolute -bottom-1 z-50 w-full  overflow-hidden">
            <img src={uno} className="w-full " alt="Vite logo" />
          </div>
          {/* segundos ar les */}
          <div className=" absolute bottom-0 z-40 w-full overflow-hidden  xl:bottom-0">
            <img src={cuatro} alt="Vite logo" />
          </div>
          {/* primer iluminacion */}
          <div className=" absolute -bottom-[85%] left-48 z-30 h-full w-full overflow-hidden  xsm:left-72 xsm:-bottom-[70%] xl:left-[900px]  xl:-bottom-56 ">
            <img src={dos} alt="Vite logo" />
          </div>
          {/* primeras montañas */}
          <div className=" absolute bottom-0 z-20 w-full overflow-hidden xl:bottom-0 xl:-right-[357px] 2xl:-right-[500px]  2xl:top-[400px]">
            <img src={cinco} alt="Vite logo" />
          </div>
          {/* iluminacion del sol */}
          <div className=" sm:-bottom- 2xl:-left-62 absolute -bottom-[52%] -left-32 z-30 h-full w-full xsm:-left-[150px] xsm:-bottom-[20%] sm:-left-44 sm:top-0 md:top-10 md:-left-44 lg:-left-96 lg:-top-56 xl:-top-96 xl:-left-96 ">
            <img src={tres} alt="Vite logo z-40" />
          </div>
          {/* montañas bajo el sol 1*/}
          <div className="absolute bottom-0 right-24 z-10 w-full  overflow-hidden xl:-left-20  xl:bottom-0">
            <img src={seis} alt="Vite logo" />
          </div>
          {/* montañas bajo el sol 2*/}
          <div className=" absolute bottom-10 z-0 w-full overflow-hidden  lg:top-96 xl:bottom-9  xl:-left-12">
            <img src={siete} alt="Vite logo" className="w-full" />
          </div>
          {/* montañas lado derecho */}
          <div className="absolute bottom-0 w-full overflow-hidden sm:-right-4 md:-right-44 lg:-right-[500px] lg:top-96 xl:-right-[1100px]  xl:top-72 ">
            <img src={ocho} alt="Vite logo" />
          </div>
          {/* pajaros */}
          <div className=" absolute bottom-32 w-full overflow-hidden xsm:bottom-56 xsm:-right-24 sm:bottom-72  md:bottom-96 lg:-right-96 xl:top-96 xl:right-96 xl:left-[800px] ">
            <img src={diez} alt="Vite logo" />
          </div>
          {/* sol */}
          <div className="absolute bottom-48 -left-20 w-full scale-50 overflow-hidden xsm:top-52  lg:top-0 lg:-left-44 xl:-left-44 xl:top-0 2xl:-top-0  2xl:-left-64 ">
            <img src={once} alt="Vite logo" />
          </div>
          {/* bruma */}
          <div className="absolute bottom-16 z-10 w-full overflow-hidden xsm:bottom-12 lg:bottom-56  xl:bottom-56 2xl:bottom-0 ">
            <img src={doce} alt="Vite logo" className="w-full" />
          </div>
        </div>{" "}
      </div>
      {/* esta es la parte con fondo verde */}
      <div className="h-[1800px] bg-gradient-to-b from-primario via-secundario  to-amber-200">
        {/* Cards de proyectos */}
        <div className="relative h-96">
          {isLargeDesktop && (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.5, x: "-40%" },
                visible: { opacity: 1, scale: 1, x: 0 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 1.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="text-center text-6xl tracking-tighter text-white"
            >
              My proyects
            </motion.div>
          )}

          {isLargeDesktop && (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.5, x: "-40%", y: 100 },
                visible: { opacity: 1, scale: 1, x: 200, y: 100 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 1.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className=" h-[300px] w-1/3 min-w-[300px] rounded-3xl border-8 border-slate-900 bg-slate-200"
            ></motion.div>
          )}

          {isLargeDesktop && (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.5, x: "220%", y: 150 },
                visible: { opacity: 1, scale: 1, x: "180%", y: 150 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 1.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className=" h-[300px] w-1/3 min-w-[300px] rounded-3xl border-8 border-slate-900 bg-slate-200"
            ></motion.div>
          )}

          {/* <div
      
            className="absolute left-48 top-24 h-[300px] w-[600px] rounded-3xl border-8 border-slate-900 bg-slate-200"
          ></div>

          <div
            className="absolute right-48 top-[480px] h-[300px] w-[600px] rounded-3xl border-8 border-slate-900 bg-slate-200"
          ></div>

          <div
            data-aos="fade-right"
            className="absolute left-48 -bottom-[750px] h-[300px] w-[600px] rounded-3xl border-8 border-slate-900 bg-slate-200"
          ></div> */}
        </div>

        {/* Cards de redes sociales */}
        <div></div>

        {/* Cards de tecnologias */}
        <div></div>
      </div>
    </div>
  );
}

export default Landing;
