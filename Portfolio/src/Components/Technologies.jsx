import { animateCSS } from "../data/Data";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { arrayTech } from "../data/Data";

function Technologies() {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const [isHovered, setIsHovered] = useState(false);

  // funcion que absorbe las propiedades del array de technologia y aplica efectos de sombra a cada elemento de manera personalizada
  useEffect(() => {
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
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="h-full w-full md:mt-96 lg:mt-0" id="tecnologies">
      <motion.h3
        variants={{
          hidden: { opacity: 0, scale: 0.5, y: 200 },
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
        className="z-10  mb-24 mt-48 w-full p-4 text-center text-4xl text-white shadow-black text-shadow-md sm:mb-0 md:text-4xl   lg:-mb-0 lg:text-6xl"
      >
        {" "}
        My Skills
      </motion.h3>
      <div className="flex w-full justify-center ">
        {!isMobile ? (
          <div className="mx-20 flex w-full flex-wrap  justify-center font-roboto sm:justify-center md:justify-center lg:justify-around">
            {arrayTech.map((t, i) => {
              return (
                <motion.article
                  key={i}
                  variants={itemVariants}
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
                      height: 150,
                      width: 250,
                    }}
                    transition={{ duration: 0.5 }}
                    className=" relative mt-40 flex justify-center"
                    key={i}
                  >
                    <motion.img
                      variants={imageVariants}
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
                      className={`${t.name}  flex max-h-24   items-center justify-center text-white  drop-shadow-glow-red hover:cursor-pointer`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  </motion.div>
                  <p className=" text-center font-roboto text-xl text-white opacity-80">
                    {t.title}
                  </p>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <div className=" flex w-full flex-wrap items-center justify-center gap-x-20 gap-y-10 align-middle  font-roboto ">
            {arrayTech.map((t, i) => {
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  viewport={{ once: false, amount: 0.5 }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{
                    duration: 1.8,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="flex flex-col items-center justify-between"
                >
                  <motion.div
                    initial={{ height: 150, width: 100 }}
                    transition={{ duration: 0.5 }}
                    className="  flex flex-col items-center justify-center"
                  >
                    <motion.img
                      variants={imageVariants}
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
                      class={`${t.name}    hover:cursor-pointer`}
                      className={`${t.name}   flex  self-center text-white hover:cursor-pointer`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      loading="lazy"
                      heigh={128}
                      width={128}
                    />
                  </motion.div>
                  <p className=" text-center font-roboto text-xl text-white opacity-80">
                    {t.title}
                  </p>
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
