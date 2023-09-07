import { useParallax } from "react-scroll-parallax";
import { useState } from "react";
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
import { motion } from "framer-motion";

function LandingImage() {
  const [isVisible, setIsVisible] = useState(true);
  const { ref } = useParallax({ speed: 50 });
  const handleClick = () => {
    setIsVisible(false);
  };

  let windowPosition = false;

  const isScrolling = () => {
    let windowPosition = window.scrollY > 10;

    const primaryBox = document.querySelector(".primary-box");
    if (primaryBox) {
      primaryBox.style.transition = "opacity 0.5s ease";
      primaryBox.style.opacity = windowPosition ? 0 : 1;
    }
  };

  window.addEventListener("scroll", isScrolling);

  return (
    <div ref={ref} className=" h-screen overflow-hidden bg-fixed">
      <div className="relative  h-screen bg-fondo bg-fixed bg-center">
        {/* texto bienvenida */}
        {isVisible && (
          <motion.div
            initial={{
              height: 0,
              width: 0,
              x: 300,
              y: 80,
            }}
            animate={{ height: 200, width: 200 }}
            transition={{ duration: 2, ease: "easeInOut", overflow: "hidden" }}
            className="primary-box absolute z-50 h-48 w-48 flex-col overflow-hidden rounded-r-3xl rounded-b-3xl bg-white p-4 align-middle font-serif text-sm font-bold shadow-black drop-shadow-2xl"
            style={{ opacity: 1 }}
            onClick={handleClick}
          >
            <p>Hey there stalker !</p>
            <p> Thanks for visiting my porfolio,</p>
            <p>remember to drink water and rest your eyes,</p>
            <p>Enjoy your time here</p>
            <a
              href="https://wa.me/+5493417206026"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div className="h-full w-full ">
                <p className="flex px-6 pt-4 ">
                  Want to chat?
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="Chat with me on WhatsApp"
                    height="20"
                    width="20"
                    className="hover:cursor-pointer"
                  />
                </p>
              </motion.div>
            </a>
          </motion.div>
        )}
        {/* arboles */}{" "}
        <div className="xl:bot-0 absolute -bottom-1 z-50 w-full  ">
          <motion.img
            initial={{ x: 0, y: 0, scale: 1 }}
            animate={{ scaleX: 1.02 }}
            transition={{
              repeat: Infinity,
              duration: 20,
              repeatType: "reverse",
              ease: "linear",
            }}
            src={uno}
            className="w-full "
            alt="Vite logo"
          />
        </div>
        {/* segundos ar les */}
        <div className=" absolute bottom-0 z-40 w-full overflow-hidden  xl:bottom-0">
          <img src={cuatro} alt="Vite logo" />
        </div>
        {/* primer iluminacion */}
        <div className=" absolute -bottom-[85%] left-48 z-30 h-full w-full overflow-hidden  xsm:left-72 xsm:-bottom-[70%] xl:left-[900px]  xl:-bottom-56 ">
          <motion.img
            initial={{ opacity: 0, filter: "contrast(0.5)" }}
            animate={{ opacity: 1, filter: "contrast(1.5)" }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
              ease: "linear",
            }}
            src={dos}
            alt="Vite logo"
          />
        </div>
        {/* primeras montañas */}
        <div className=" absolute bottom-0 z-20 w-full overflow-hidden xl:bottom-0 xl:-right-[357px] 2xl:-right-[500px]  2xl:top-[400px]">
          <img src={cinco} alt="Vite logo" />
        </div>
        {/* iluminacion del sol */}
        <div className=" sm:-bottom- 2xl:-left-62 absolute -bottom-[52%] -left-32 z-30 h-full w-full xsm:-left-[150px] xsm:-bottom-[20%] sm:-left-44 sm:top-0 md:top-10 md:-left-44 lg:-left-96 lg:-top-56 xl:-top-96 xl:-left-96 ">
          <motion.img
            initial={{ scale: 0.5 }}
            animate={{ scale: 1.2 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              repeatType: "reverse",
              ease: "linear",
            }}
            src={tres}
            alt="Vite logo z-40"
          />
        </div>
        {/* montañas bajo el sol 1*/}
        <div className=" absolute bottom-0 right-24 z-10 w-full  overflow-hidden xl:-left-20  xl:bottom-0">
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
          <motion.img
            initial={{ x: 0, y: 0 }}
            animate={{ x: -10, y: -10 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              repeatType: "reverse",
              ease: "linear",
            }}
            src={diez}
            alt="Vite logo"
          />
        </div>
        {/* sol */}
        <div className="absolute bottom-48 -left-20 w-full scale-50 overflow-hidden xsm:top-52  lg:top-0 lg:-left-44 xl:-left-44 xl:top-0 2xl:-top-0  2xl:-left-64 ">
          <motion.img src={once} alt="Vite logo" />
        </div>
        {/* bruma */}
        <div className="absolute bottom-16 z-10 w-full overflow-hidden xsm:bottom-12 lg:bottom-56  xl:bottom-56 2xl:bottom-0 ">
          <motion.img
            initial={{ x: 0, y: 0 }}
            animate={{ x: 100, y: 5 }}
            transition={{
              repeat: Infinity,
              duration: 10,
              repeatType: "reverse",
              ease: "linear",
            }}
            src={doce}
            alt="Vite logo"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingImage;
