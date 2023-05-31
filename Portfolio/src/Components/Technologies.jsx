
import anime from "animejs/lib/anime.es.js";
import LazyLoad from "react-lazyload";

import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useState } from "react";
import  {arrayTech}  from "../data/Data";

function animateCSS(name, filterValues, options) {
  const target = "." + name.toLowerCase(); // creamos un selector para targetear basado en el nombre
  const shadowColor = filterValues[0].shadowColor || "blue"; // absorbemos el color de la propiedad shadowColor y si no tiene uzamos la azul por defecto
  const filter = filterValues.map((value) => {
    return {
      value: value.value.replace("blue", shadowColor),
      duration: value.duration,
    };
  }); // remplazamos el filtro base color "blue" en el filter value
  anime({
    targets: target,
    filter: filter,
    easing: options.easing || "linear",
    direction: options.direction || "alternate",
    loop: options.loop || true,
  });
}

function Technologies(props) {
  const { language } = props;
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

 

  // funcion que absorbe las propiedades del array de technologia y aplica efectos de sombra a cada elemento de manera personalizada

  arrayTech?.forEach((element) => {
    animateCSS(
      element.name,
      [
        {
          value: `drop-shadow(0px 0px 4px ${element.shadowColor})`,
          duration: 500,
          shadowColor: element.shadowColor,
        },
        {
          value: `drop-shadow(0px 0px 6px ${element.shadowColor})`,
          duration: 500,
          shadowColor: element.shadowColor,
        },

        {
          value: `drop-shadow(0px 0px 10px ${element.shadowColor})`,
          duration: 800,
          shadowColor: element.shadowColor,
        },
        {
          value: `drop-shadow(0px 0px 6px ${element.shadowColor})`,
          duration: 500,
          shadowColor: element.shadowColor,
        },
        {
          value: `drop-shadow(0px 0px 4px ${element.shadowColor})`,
          duration: 500,
          shadowColor: element.shadowColor,
        },
      ],
      { easing: "easeInOutQuad", direction: "normal", loop: true }
    );
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOnClick = (i) => {
    setExpandedIndex(i === expandedIndex ? null : i);
  };

  return (
    <div className="mt-96 h-full w-full lg:mt-0" id="tecnologies">
      <motion.h3
        variants={{
          hidden: { opacity: 0, scale: 0.5, y: "-20%" },
          visible: { opacity: 1, scale: 1, y: 0 },
        }}
        viewport={{ once: false, amount: 0.5 }}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 1.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="z-10  mt-48 mb-24 w-full p-4 text-center text-4xl text-white shadow-black text-shadow-md sm:mb-0 md:text-4xl   lg:-mb-0 lg:text-6xl"
      >
        {" "}
        My Skills
      </motion.h3>
      <div className="flex w-full justify-center ">
        {!isMobile ? (
          <div className="mx-20 flex w-full flex-wrap  justify-center gap-y-28 gap-x-32 font-roboto sm:justify-center md:justify-center lg:justify-around">
            {arrayTech.map((t, i) => {
              return (
                <motion.article
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.5, x: "40%" },
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
                >
                  <motion.div
                    initial={{ height: 150, width: 150 }}
                    animate={{
                      height: expandedIndex === i ? 400 : 150,
                      width: expandedIndex === i ? 400 : 250,
                    }}
                    transition={{ duration: 0.5 }}
                    onClick={() => handleOnClick(i)}
                    className=" relative mt-40 flex justify-center"
                    key={i}
                  >
                    {expandedIndex === i && (
                      <>
                        {language === "en" ? (
                          <motion.article
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute z-50 h-96 w-96 rounded-xl p-6 pt-20 text-sm text-white"
                          >
                            {t.description}
                          </motion.article>
                        ) : (
                          <motion.article
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute z-50 h-96 w-96 rounded-xl p-6 pt-20 text-sm text-white"
                          >
                            {t.descripcion}
                          </motion.article>
                        )}
                      </>
                    )}
                    <motion.img
                      variants={{
                        hidden: { opacity: 0, scale: 0.2, x: "-40%" },
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
                      src={t.logo}
                      alt="..."
                      title={t.title}
                      class={`${t.name} h-24 hover:cursor-pointer`}
                      className={`${t.name} absolute -top-12 z-50 h-32 pr-8 text-white hover:cursor-pointer`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />

                    {/* este div tiene el texto */}
                    {expandedIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-box  h-96 w-96 rounded-xl p-4 pt-20 text-white"
                      ></motion.div>
                    )}
                    {/* abajo esta el fondo gradiente con el efecto */}
                    {expandedIndex === i && (
                      <motion.div
                        variants={{
                          visible: {
                            opacity: 1,
                            borderRadius: ["50%", "50%", "50%", "50%"],
                          },
                        }}
                        initial="hidden"
                        whileHover="visible"
                        transition={{
                          duration: 3,
                          times: [0, 0.2, 0.5, 0.8, 1],
                          repeat: 0,
                        }}
                        className=" box absolute top-0 left-0 h-96 w-96 rounded-2xl  bg-gradient-to-b from-transparent to-slate-900 p-4 pt-20"
                      ></motion.div>
                    )}
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <div className=" flex w-full flex-wrap justify-center   font-roboto ">
            {arrayTech.map((t, i) => {
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.2, x: "60%" },
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
                  className=""
                >
                  <motion.div
                    initial={{ height: 150, width: 150 }}
                    animate={{
                      height: expandedIndex === i ? 400 : 150,
                      width: expandedIndex === i ? 400 : 250,
                    }}
                    transition={{ duration: 0.5 }}
                    onClick={() => handleOnClick(i)}
                    className=" relative mt-8 flex justify-center"
                    key={i}
                  >
                    {expandedIndex === i && (
                      <>
                        {language === "en" ? (
                          <motion.article
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute z-50 h-96 w-96 rounded-xl p-6 pt-20 text-sm text-white"
                          >
                            {t.description}
                          </motion.article>
                        ) : (
                          <motion.article
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute z-50 h-96 w-96 rounded-xl p-6 pt-20 text-sm text-white"
                          >
                            {t.descripcion}
                          </motion.article>
                        )}
                      </>
                    )}
                    <LazyLoad key={i} heigh={150} once>
                      <motion.img
                        variants={{
                          hidden: { opacity: 0, scale: 0.2, x: "-40%" },
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
                        src={t.logo}
                        alt="..."
                        title={t.title}
                        class={`${t.name} h-24 hover:cursor-pointer`}
                        className={`${t.name} absolute -top-12 z-50 h-32 pr-8 text-white hover:cursor-pointer`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        loading="lazy"
                        heigh={128}
                        width={128}
                      />
                    </LazyLoad>

                    {/* este div tiene el texto */}
                    {expandedIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-box  h-96 w-96 rounded-xl p-4 pt-20 text-white"
                      ></motion.div>
                    )}
                    {/* abajo esta el fondo gradiente con el efecto */}
                    {expandedIndex === i && (
                      <motion.div
                        variants={{
                          visible: {
                            opacity: 1,
                            borderRadius: ["50%", "50%", "50%", "50%"],
                          },
                        }}
                        initial="hidden"
                        whileHover="visible"
                        transition={{
                          duration: 3,
                          times: [0, 0.2, 0.5, 0.8, 1],
                          repeat: 0,
                        }}
                        className=" box absolute top-0 left-0 h-96 w-96 rounded-2xl  bg-gradient-to-b from-transparent to-slate-900 p-4 pt-20"
                      ></motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Technologies;
