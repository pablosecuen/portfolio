import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "./useMediaQuery";
import proyect1 from "../assets/img/logo.webp";
import pokemon from "../assets/img/pokemon.webp";
import movi from "../assets/img/UrbanIsoLogo.png";
import movihome from "../assets/img/movihome.png";
import pet from "../assets/img/petfriendly.webp";
import petsm from "../assets/img/petfriendly.webp";
import poke from "../assets/img/pokeApp.webp";
import { proyects } from "../data/Data";

function Proyects(props) {
  console.log(proyects);

  const { language } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const isXSmallMobile = useMediaQuery("(max-width: 400px)");
  const isSmallMobile = useMediaQuery("(min-width: 401px) and (max-width: 639px)");
  const isMobile = useMediaQuery("(min-width: 640px) and (max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1280px)");

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(isOpen);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen1(isOpen1);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen2(isOpen2);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const wrapperRef1 = useRef(null);
  useOutsideAlerter(wrapperRef1);
  const wrapperRef2 = useRef(null);
  useOutsideAlerter(wrapperRef2);

  const handleClickPet = () => {
    window.open("https://petfriendlyuniverse.vercel.app/", "_blank");
  };

  const handleClickPoke = () => {
    window.open("https://pokemon-deploy-one.vercel.app/", "_blank");
  };

  const handleClickMovi = () => {
    window.open("https://urban-movi.vercel.app/", "_blank");
  };

  return (
    <div className="relative  mt-[650px] w-full sm:mt-96" id="proyects">
      {language === "en" ? (
        <motion.h2
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
          className=" sm-24 shadow-black -mt-96 mb-12 w-full cursor-pointer p-4 text-center  text-4xl -tracking-widest text-white text-shadow-md xsm:text-4xl lg:-mt-48 lg:mb-0 lg:text-6xl   "
        >
          My proyects
        </motion.h2>
      ) : (
        <motion.h2
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
          className="  shadow-black mb-24 w-full cursor-pointer p-4 text-center  text-4xl -tracking-widest text-white text-shadow-md xsm:text-4xl lg:-mt-48 lg:mb-0 lg:text-6xl   "
        >
          Mis proyectos
        </motion.h2>
      )}
      {isXSmallMobile && (
        <div className="mt-48 flex  w-full flex-col">
          <div className="flex h-[500px] flex-col justify-around gap-10 pt-48 ">
            <div className="flex flex-col self-center">
              {" "}
              <motion.div
                ref={wrapperRef}
                layout
                data-isopen={!isOpen}
                initial={{ borderRadius: 50 }}
                onClick={() => setIsOpen(!isOpen)}
                className=" flex cursor-pointer  items-center justify-center  "
              >
                {!isOpen && (
                  <motion.div
                    layout
                    initial={{
                      height: 500,
                      width: 500,
                      borderRadius: 50,
                    }}
                    animate={{ height: 200, width: 200, borderRadius: 80 }}
                    transition={{
                      opacity: { ease: "linear" },
                      layout: { duration: 2 },
                    }}
                    className="bg-slate-100 shadow-black relative mb-20 flex flex-col items-center justify-center text-center   shadow-2xl duration-1000 "
                  >
                    <motion.img src={proyect1} className="h-24"></motion.img>
                  </motion.div>
                )}
                {isOpen && (
                  <div className="relative flex flex-col">
                    <motion.div
                      layout
                      initial={{ height: 200, width: 200, borderRadius: 40 }}
                      animate={{
                        height: 160,
                        width: 280,
                        borderRadius: 80,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" flex h-96 w-96 flex-col items-center justify-center rounded-full   duration-1000 "
                    >
                      <motion.img
                        src={petsm}
                        alt="pet friendly universe"
                        initial={{ opacity: 0, borderRadius: 80 }}
                        animate={{ opacity: 1, borderRadius: 50 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 384,
                      }}
                      animate={{
                        height: 560,
                        width: 280,
                        borderRadius: 50,
                        top: 150,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" bg-slate-100 shadow-black absolute z-50 flex h-96 w-96 flex-col items-center justify-evenly  rounded-full shadow-2xl duration-1000 "
                    >
                      <img
                        src={proyect1}
                        className="w-12 bg-cover object-cover pt-8 align-middle "
                      />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className="p-6 text-center  text-xs"
                        >
                          {proyects[1].PetFriendly.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className="p-6 text-center  text-xs"
                        >
                          {proyects[1].PetFriendly.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>{" "}
              <button
                onClick={handleClickPet}
                className="text-xsm shadow-black -mt-10 h-10 w-36 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>

            <div className="flex flex-col self-center">
              {" "}
              <motion.div
                layout
                data-isopen={!isOpen1}
                initial={{ borderRadius: 50 }}
                onClick={() => setIsOpen1(!isOpen1)}
                className="flex  items-center justify-center  "
              >
                {!isOpen1 && (
                  <motion.div
                    ref={wrapperRef1}
                    layout
                    initial={{
                      width: 300,
                      height: 300,
                      borderRadius: 50,
                    }}
                    animate={{ height: 200, width: 200, borderRadius: 80 }}
                    transition={{
                      opacity: { ease: "linear" },
                      layout: { duration: 2 },
                    }}
                    className="bg-slate-100 shadow-black relative mb-20 flex h-48 w-48 flex-col items-center justify-center rounded-3xl text-center  shadow-2xl duration-1000 "
                  >
                    {" "}
                    <motion.img
                      src={pokemon}
                      className="h-20"
                      alt="Pokemon"
                      title="Individual Proyect Pokemon"
                    ></motion.img>
                  </motion.div>
                )}
                {isOpen1 && (
                  <div className=" flex flex-col">
                    <motion.div
                      layout
                      initial={{ height: 200, width: 200, borderRadius: 40 }}
                      animate={{
                        height: 150,
                        width: 280,
                        borderRadius: 80,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className="relative mt-0 flex flex-col  items-center justify-center rounded-full  duration-1000 "
                    >
                      <motion.img
                        src={poke}
                        alt="Pokemon Proyect"
                        initial={{ opacity: 0, borderRadius: 80 }}
                        animate={{ opacity: 1, borderRadius: 50 }}
                        className=" "
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 384,
                      }}
                      animate={{
                        height: 560,
                        width: 280,
                        borderRadius: 50,
                        top: 700,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" bg-slate-100  shadow-black absolute z-50 flex h-96 w-96 flex-col items-center justify-evenly  rounded-full shadow-2xl duration-1000 "
                    >
                      <img
                        src={pokemon}
                        className="w-12 bg-cover object-cover pt-8 align-middle "
                      />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {" "}
                          {proyects[0].Pokemon.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[0].Pokemon.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>{" "}
              <button
                onClick={handleClickPoke}
                className="text-xsm shadow-black -mt-10 h-10 w-36 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>

            <div className="flex flex-col self-center">
              {" "}
              <motion.div
                layout
                data-isopen={!isOpen2}
                initial={{ borderRadius: 50 }}
                onClick={() => setIsOpen2(!isOpen2)}
                className="parent flex  items-center justify-center  "
              >
                {!isOpen2 && (
                  <motion.div
                    ref={wrapperRef2}
                    layout
                    initial={{ height: 300, width: 300, borderRadius: 50 }}
                    animate={{ height: 200, width: 200, borderRadius: 80 }}
                    transition={{
                      opacity: { ease: "linear" },
                      layout: { duration: 2 },
                    }}
                    className="bg-slate-100 shadow-black  relative flex h-48 w-48 flex-col items-center justify-center rounded-3xl text-center  shadow-2xl duration-1000 "
                  >
                    <motion.img
                      src={movi}
                      className="w-36"
                      alt="Urban Movi"
                      title="Urban Movi"
                    ></motion.img>
                  </motion.div>
                )}
                {isOpen2 && (
                  <div className=" flex flex-col">
                    <motion.div
                      layout
                      initial={{ height: 200, width: 200, borderRadius: 40 }}
                      animate={{
                        height: 150,
                        width: 280,
                        borderRadius: 80,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className="relative mt-0 flex flex-col  items-center justify-center rounded-full  duration-1000 "
                    >
                      <motion.img
                        src={movihome}
                        alt="Urban Movi"
                        initial={{ opacity: 0, borderRadius: 80 }}
                        animate={{ opacity: 1, borderRadius: 50 }}
                        className=" "
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 384,
                      }}
                      animate={{
                        height: 560,
                        width: 280,
                        borderRadius: 50,
                        top: 960,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" bg-slate-100  shadow-black absolute z-50 flex h-96 w-96 flex-col items-center justify-evenly  rounded-full shadow-2xl duration-1000 "
                    >
                      <img src={movi} className="w-12 bg-cover object-cover pt-8 align-middle " />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[2].Movi.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[2].Movi.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>{" "}
              <button
                onClick={handleClickMovi}
                className="text-xsm shadow-black mt-8 h-10 w-36 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>
          </div>
        </div>
      )}
      {isSmallMobile && (
        <div className="mt-48 flex w-full flex-col">
          <div className="flex h-[500px] flex-col justify-around gap-10 pt-48">
            <div className="flex flex-col self-center">
              {" "}
              <motion.div
                ref={wrapperRef}
                layout
                data-isopen={!isOpen}
                initial={{ borderRadius: 50 }}
                onClick={() => setIsOpen(!isOpen)}
                className=" flex  items-center justify-center  "
              >
                {!isOpen && (
                  <motion.div
                    layout
                    initial={{
                      height: 500,
                      width: 500,
                      borderRadius: 50,
                    }}
                    animate={{ height: 200, width: 200, borderRadius: 80 }}
                    transition={{
                      opacity: { ease: "linear" },
                      layout: { duration: 2 },
                    }}
                    className=" bg-slate-100 flex flex-col  items-center justify-center  text-center duration-1000 "
                  >
                    <motion.img src={proyect1} className="h-24"></motion.img>
                  </motion.div>
                )}
                {isOpen && (
                  <div className="relative flex flex-col">
                    <motion.div
                      layout
                      initial={{ height: 200, width: 200, borderRadius: 40 }}
                      animate={{
                        height: 200,
                        width: 300,
                        borderRadius: 80,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className="flex w-96 flex-col items-center justify-center rounded-full  duration-1000"
                    >
                      <motion.img
                        src={petsm}
                        alt="pet friendly universe"
                        initial={{ opacity: 0, borderRadius: 80 }}
                        animate={{ opacity: 1, borderRadius: 50 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 384,
                      }}
                      animate={{
                        height: 600,
                        width: 300,
                        borderRadius: 50,
                        top: 170,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className="bg-slate-100 absolute z-50 mb-48 flex h-96 w-96 flex-col items-center justify-evenly rounded-full text-xs duration-1000 "
                    >
                      <img
                        src={proyect1}
                        className="w-12 bg-cover object-cover pt-8 align-middle "
                      />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className="p-6 text-center"
                        >
                          {proyects[1].PetFriendly.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className="p-6 text-center"
                        >
                          {proyects[1].PetFriendly.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
              <button
                onClick={handleClickPet}
                className="text-xsm shadow-black mt-4 h-10 w-36 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>

            <div className="flex flex-col self-center">
              {" "}
              <motion.div
                layout
                data-isopen={!isOpen1}
                initial={{ borderRadius: 50 }}
                onClick={() => setIsOpen1(!isOpen1)}
                className="flex  items-center justify-center  "
              >
                {!isOpen1 && (
                  <motion.div
                    ref={wrapperRef1}
                    layout
                    initial={{ height: 500, width: 500, borderRadius: 50 }}
                    animate={{ height: 200, width: 200, borderRadius: 80 }}
                    transition={{
                      opacity: { ease: "linear" },
                      layout: { duration: 2 },
                    }}
                    className=" bg-slate-100 flex h-48 w-48 flex-col items-center justify-center rounded-3xl  text-center duration-1000 "
                  >
                    {" "}
                    <motion.img
                      src={pokemon}
                      className="h-20"
                      alt="Pokemon"
                      title="Individual Proyect Pokemon"
                    ></motion.img>
                  </motion.div>
                )}
                {isOpen1 && (
                  <div className="relative flex flex-col">
                    <motion.div
                      layout
                      initial={{ height: 200, width: 200, borderRadius: 40 }}
                      animate={{
                        height: 180,
                        width: 300,
                        borderRadius: 80,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" flex h-96 w-96 flex-col items-center justify-center rounded-full duration-1000 "
                    >
                      <motion.img
                        src={poke}
                        alt="Pokemon Proyect"
                        initial={{ opacity: 0, borderRadius: 80 }}
                        animate={{ opacity: 1, borderRadius: 50 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 384,
                      }}
                      animate={{
                        height: 600,
                        width: 300,
                        borderRadius: 50,
                        top: 160,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className="bg-slate-100 absolute z-50 flex h-96 w-96 flex-col items-center  justify-evenly rounded-full duration-1000 "
                    >
                      <img
                        src={pokemon}
                        className="w-24 bg-cover object-cover pt-8 align-middle "
                      />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {" "}
                          {proyects[0].Pokemon.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[0].Pokemon.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
              <button
                onClick={handleClickPoke}
                className="text-xsm shadow-black mt-4 h-10 w-36 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>

            <div className="flex flex-col self-center">
              {" "}
              <motion.div
                layout
                data-isopen={!isOpen2}
                initial={{ borderRadius: 50 }}
                onClick={() => setIsOpen2(!isOpen2)}
                className="parent flex   items-center justify-center  "
              >
                {!isOpen2 && (
                  <motion.div
                    ref={wrapperRef2}
                    layout
                    initial={{ height: 500, width: 500, borderRadius: 50 }}
                    animate={{ height: 200, width: 200, borderRadius: 80 }}
                    transition={{
                      opacity: { ease: "linear" },
                      layout: { duration: 2 },
                    }}
                    className=" bg-slate-100 flex h-48 w-48 flex-col items-center justify-center rounded-3xl  text-center duration-1000 "
                  >
                    <motion.img
                      src={movi}
                      className="w-36"
                      alt="Urban Movi"
                      title="Urban Movi"
                    ></motion.img>
                  </motion.div>
                )}
                {isOpen2 && (
                  <div className="relative flex flex-col">
                    <motion.div
                      layout
                      initial={{ height: 200, width: 200, borderRadius: 40 }}
                      animate={{
                        height: 180,
                        width: 300,
                        borderRadius: 80,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" flex h-96 w-96 flex-col items-center justify-center rounded-full duration-1000 "
                    >
                      <motion.img
                        src={movi}
                        alt="Pokemon Proyect"
                        initial={{ opacity: 0, borderRadius: 80 }}
                        animate={{ opacity: 1, borderRadius: 50 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 384,
                      }}
                      animate={{
                        height: 600,
                        width: 300,
                        borderRadius: 50,
                        top: 160,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className="bg-slate-100 absolute z-50 flex h-96 w-96 flex-col items-center  justify-evenly rounded-full duration-1000 "
                    >
                      <img
                        src={movihome}
                        className="w-24 bg-cover object-cover pt-8 align-middle "
                      />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[2].Movi.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[2].Movi.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
              <button
                onClick={handleClickMovi}
                className="text-xsm shadow-black mt-4 h-10 w-36 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>
          </div>
        </div>
      )}
      ;
      {isMobile && (
        <div className="mt-48 flex w-full flex-col">
          <div className="mt-48 flex h-[400px] flex-col justify-around gap-20">
            <div className="flex flex-col self-center">
              <motion.div
                ref={wrapperRef}
                layout
                data-isopen={!isOpen}
                initial={{ borderRadius: 50 }}
                onClick={() => setIsOpen(!isOpen)}
                className=" flex  items-center justify-center  "
              >
                {!isOpen && (
                  <motion.div
                    layout
                    initial={{
                      height: 500,
                      width: 500,
                      borderRadius: 50,
                    }}
                    animate={{ height: 200, width: 200, borderRadius: 80 }}
                    transition={{
                      opacity: { ease: "linear" },
                      layout: { duration: 2 },
                    }}
                    className=" bg-slate-100  shadow-black flex flex-col items-center  justify-center text-center  shadow-2xl duration-1000 "
                  >
                    <motion.img src={proyect1} className="h-24"></motion.img>
                  </motion.div>
                )}
                {isOpen && (
                  <div className="relative flex flex-col">
                    <motion.div
                      layout
                      initial={{ height: 200, width: 200, borderRadius: 80 }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" m-l-24  shadow-black flex h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl  duration-1000 "
                    >
                      <motion.img
                        src={pet}
                        alt="pet friendly universe"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 0,
                      }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        top: 290,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" bg-slate-100 shadow-black absolute z-50 flex h-96 w-96 flex-col items-center justify-evenly  rounded-full shadow-2xl duration-1000 "
                    >
                      <img
                        src={proyect1}
                        className="w-12 bg-cover object-cover pt-8 align-middle "
                      />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className="p-6 text-center"
                        >
                          {" "}
                          {proyects[1].PetFriendly.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className="p-6 text-center"
                        >
                          {proyects[1].PetFriendly.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
              <button
                onClick={handleClickPet}
                className="text-xsm shadow-black mt-10 h-10 w-32 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>
            <div className="flex flex-col self-center">
              {" "}
              <motion.div
                layout
                data-isopen={!isOpen1}
                initial={{ borderRadius: 50 }}
                onClick={() => setIsOpen1(!isOpen1)}
                className="flex  items-center justify-center  "
              >
                {!isOpen1 && (
                  <motion.div
                    ref={wrapperRef1}
                    layout
                    initial={{ height: 500, width: 500, borderRadius: 50 }}
                    animate={{ height: 200, width: 200, borderRadius: 80 }}
                    transition={{
                      opacity: { ease: "linear" },
                      layout: { duration: 2 },
                    }}
                    className=" bg-slate-100  shadow-black flex h-48 w-48 flex-col items-center justify-center rounded-3xl text-center  shadow-2xl duration-1000 "
                  >
                    {" "}
                    <motion.img
                      src={pokemon}
                      className="h-20"
                      alt="Pokemon"
                      title="Individual Proyect Pokemon"
                    ></motion.img>
                  </motion.div>
                )}
                {isOpen1 && (
                  <div className="relative flex flex-col">
                    <motion.div
                      layout
                      initial={{ height: 200, width: 200, borderRadius: 80 }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" m-l-24  shadow-black flex h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl  duration-1000 "
                    >
                      <motion.img
                        src={poke}
                        alt="Pokemon proyect"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 0,
                      }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        top: 290,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" bg-slate-100 shadow-black absolute z-50 flex h-96 w-96 flex-col items-center justify-evenly  rounded-full shadow-2xl duration-1000 "
                    >
                      <img
                        src={pokemon}
                        className="w-12 bg-cover object-cover pt-8 align-middle "
                      />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {" "}
                          {proyects[0].Pokemon.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[0].Pokemon.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
              <button
                onClick={handleClickPoke}
                className="text-xsm shadow-black mt-10 h-10 w-32 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>
            <div className="flex flex-col self-center">
              <motion.div
                layout
                data-isopen={!isOpen2}
                initial={{ borderRadius: 50 }}
                onClick={() => setIsOpen2(!isOpen2)}
                className="parent flex  items-center justify-center  "
              >
                {!isOpen2 && (
                  <motion.div
                    ref={wrapperRef2}
                    layout
                    initial={{ height: 500, width: 500, borderRadius: 50 }}
                    animate={{ height: 200, width: 200, borderRadius: 80 }}
                    transition={{
                      opacity: { ease: "linear" },
                      layout: { duration: 2 },
                    }}
                    className="bg-slate-100 shadow-black relative z-10 flex h-48 w-48 flex-col items-center justify-center rounded-3xl text-center  shadow-2xl duration-1000 "
                  >
                    <motion.img
                      src={movi}
                      className="w-36"
                      alt="Urban Movi"
                      title="Urban Movi"
                    ></motion.img>
                  </motion.div>
                )}
                {isOpen2 && (
                  <div className="relative flex flex-col">
                    <motion.div
                      layout
                      initial={{ height: 200, width: 200, borderRadius: 80 }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" m-l-24  shadow-black flex h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl  duration-1000 "
                    >
                      <motion.img
                        src={movihome}
                        alt="Urban Movi"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 0,
                      }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        top: 290,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" bg-slate-100 shadow-black absolute z-50 flex h-96 w-96 flex-col items-center justify-evenly  rounded-full shadow-2xl duration-1000 "
                    >
                      <img src={movi} className="w-12 bg-cover object-cover pt-8 align-middle " />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[2].Movi.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[2].Movi.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
              <button
                onClick={handleClickMovi}
                className="text-xsm shadow-black mt-10 h-10 w-32 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>
          </div>
        </div>
      )}
      ;
      {isTablet && (
        <div key={index} className="mt-48 flex w-full flex-col">
          <div className="mt-48 flex h-[400px] flex-col justify-around gap-20">
            <div className="flex flex-col self-center">
              <motion.div
                ref={wrapperRef}
                layout
                data-isopen={!isOpen}
                initial={{ borderRadius: 50 }}
                onClick={() => setIsOpen(!isOpen)}
                className=" flex  items-center justify-center  "
              >
                {!isOpen && (
                  <motion.div
                    layout
                    initial={{
                      height: 500,
                      width: 500,
                      borderRadius: 50,
                    }}
                    animate={{ height: 200, width: 200, borderRadius: 80 }}
                    transition={{
                      opacity: { ease: "linear" },
                      layout: { duration: 2 },
                    }}
                    className="bg-slate-100 shadow-black  relative flex flex-col items-center  justify-center text-center  shadow-2xl duration-1000 "
                  >
                    <motion.img src={proyect1} className="h-24"></motion.img>
                  </motion.div>
                )}
                {isOpen && (
                  <div className="relative flex flex-col">
                    <motion.div
                      layout
                      initial={{ height: 200, width: 200, borderRadius: 80 }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" m-l-24  shadow-black flex h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl  duration-1000 "
                    >
                      <motion.img
                        src={pet}
                        alt="pet friendly universe"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 0,
                      }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        top: 290,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" shadow-black absolute z-50 flex h-96 w-96 flex-col items-center justify-evenly rounded-full  bg-white shadow-2xl duration-1000 "
                    >
                      <img
                        src={proyect1}
                        className="w-12 bg-cover object-cover pt-8 align-middle "
                      />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className="p-6 text-center"
                        >
                          {proyects[1].PetFriendly.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className="p-6 text-center"
                        >
                          {proyects[1].PetFriendly.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
              <button
                onClick={handleClickPet}
                className="text-xsm shadow-black mt-10 h-10 w-32 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>
            <div className="flex flex-col self-center">
              <motion.div
                layout
                data-isopen={!isOpen1}
                initial={{ borderRadius: 50 }}
                onClick={() => setIsOpen1(!isOpen1)}
                className="flex  items-center justify-center  "
              >
                {!isOpen1 && (
                  <motion.div
                    ref={wrapperRef1}
                    layout
                    initial={{ height: 500, width: 500, borderRadius: 50 }}
                    animate={{ height: 200, width: 200, borderRadius: 80 }}
                    transition={{
                      opacity: { ease: "linear" },
                      layout: { duration: 2 },
                    }}
                    className="bg-slate-100 shadow-black  relative flex h-48 w-48 flex-col items-center justify-center rounded-3xl text-center shadow-2xl duration-1000 "
                  >
                    {" "}
                    <motion.img
                      src={pokemon}
                      className="h-20"
                      alt="Pokemon"
                      title="Individual Proyect Pokemon"
                    ></motion.img>
                  </motion.div>
                )}
                {isOpen1 && (
                  <div className="relative flex flex-col">
                    <motion.div
                      layout
                      initial={{ height: 200, width: 200, borderRadius: 80 }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" m-l-24  shadow-black flex h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl  duration-1000 "
                    >
                      <motion.img
                        src={poke}
                        alt="Pokemon Proyect"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 0,
                      }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        top: 290,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" bg-slate-100 shadow-black absolute z-50 flex h-96 w-96 flex-col items-center justify-evenly  rounded-full shadow-2xl duration-1000 "
                    >
                      <img
                        src={pokemon}
                        className="w-12 bg-cover object-cover pt-8 align-middle "
                      />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[0].Pokemon.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[0].Pokemon.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
              <button
                onClick={handleClickPoke}
                className="text-xsm shadow-black mt-10 h-10 w-32 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>
            <div className="flex flex-col self-center">
              <motion.div
                layout
                data-isopen={!isOpen2}
                initial={{ borderRadius: 50 }}
                onClick={() => setIsOpen2(!isOpen2)}
                className="parent flex  items-center justify-center  "
              >
                {!isOpen2 && (
                  <motion.div
                    ref={wrapperRef2}
                    layout
                    initial={{ height: 500, width: 500, borderRadius: 50 }}
                    animate={{ height: 200, width: 200, borderRadius: 80 }}
                    transition={{
                      opacity: { ease: "linear" },
                      layout: { duration: 2 },
                    }}
                    className="bg-slate-100 shadow-black relative flex h-48 w-48 flex-col items-center justify-center rounded-3xl text-center  shadow-2xl duration-1000 "
                  >
                    <motion.img
                      src={movi}
                      className="w-36"
                      alt="Urban Movi"
                      title="Urban Movi"
                    ></motion.img>
                  </motion.div>
                )}
                {isOpen2 && (
                  <div className="relative flex flex-col">
                    <motion.div
                      layout
                      initial={{ height: 200, width: 200, borderRadius: 80 }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" m-l-24  shadow-black flex h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl  duration-1000 "
                    >
                      <motion.img
                        src={movihome}
                        alt="Urban Movi"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 0,
                      }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        top: 290,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" bg-slate-100 shadow-black absolute z-50 flex h-96 w-96 flex-col items-center justify-evenly  rounded-full shadow-2xl duration-1000 "
                    >
                      <img src={movi} className="w-12 bg-cover object-cover pt-8 align-middle " />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {" "}
                          {proyects[2].Movi.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[2].Movi.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
              <button
                onClick={handleClickMovi}
                className="text-xsm shadow-black mt-10 h-10 w-32 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>
          </div>
        </div>
      )}
      ;
      {isDesktop && (
        <div className="flex flex-col self-center">
          <div className="flex h-[400px] justify-around">
            <div className="flex flex-col self-center">
              <motion.div
                ref={wrapperRef}
                layout
                data-isopen={!isOpen}
                initial={{ borderRadius: 50 }}
                onClick={() => setIsOpen(!isOpen)}
                className=" flex  items-center justify-center  "
              >
                {!isOpen && (
                  <motion.div
                    layout
                    initial={{ height: 800, width: 800, borderRadius: 50 }}
                    animate={{ height: 200, width: 200, borderRadius: 80 }}
                    transition={{
                      opacity: { ease: "linear" },
                      layout: { duration: 2 },
                    }}
                    className="bg-slate-100 shadow-black relative flex  flex-col  items-center  justify-center text-center  shadow-2xl duration-1000 "
                  >
                    <motion.img src={proyect1} className="h-24"></motion.img>
                    <span className="shadow-black absolute -top-20 text-white   text-shadow-md">
                      toca para ver mas del proyecto
                    </span>
                  </motion.div>
                )}
                {isOpen && (
                  <div className="relative flex flex-col">
                    <motion.div
                      layout
                      initial={{ height: 200, width: 200, borderRadius: 80 }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" shadow-black  flex h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl  duration-1000 "
                    >
                      <motion.img
                        src={pet}
                        alt="pet friendly universe"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 0,
                      }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        top: 290,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className="bg-slate-100  shadow-black  absolute flex h-96 w-96 flex-col items-center justify-evenly  rounded-full shadow-2xl duration-1000 "
                    >
                      <img
                        src={proyect1}
                        className="w-12 bg-cover object-cover pt-8 align-middle "
                      />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className="p-6 text-center"
                        >
                          {" "}
                          {proyects[1].PetFriendly.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className="p-6 text-center"
                        >
                          {proyects[1].PetFriendly.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
              <button
                onClick={handleClickPet}
                className="text-xsm shadow-black mt-10 h-10 w-32 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>
            <div className="flex flex-col self-center">
              <motion.div
                layout
                data-isopen={!isOpen1}
                initial={{ borderRadius: 50 }}
                className="flex  items-center justify-center  "
              >
                {!isOpen1 && (
                  <div onClick={() => setIsOpen1(!isOpen1)}>
                    <motion.div
                      ref={wrapperRef1}
                      layout
                      initial={{ height: 800, width: 800, borderRadius: 50 }}
                      animate={{ height: 200, width: 200, borderRadius: 80 }}
                      transition={{
                        opacity: { ease: "linear" },
                        layout: { duration: 2 },
                      }}
                      className="bg-slate-100 shadow-black  relative  flex h-48 w-48 flex-col items-center justify-center rounded-3xl text-center  shadow-2xl duration-1000 "
                    >
                      {" "}
                      <span className="shadow-black absolute -top-20 text-white   text-shadow-md">
                        toca para ver mas del proyecto
                      </span>
                      <motion.img
                        src={pokemon}
                        className="h-20"
                        alt="Pokemon"
                        title="Individual Proyect Pokemon"
                      ></motion.img>
                    </motion.div>
                  </div>
                )}
                {isOpen1 && (
                  <div className="relative flex flex-col">
                    <motion.div
                      layout
                      initial={{ height: 200, width: 200, borderRadius: 80 }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className="  shadow-black  flex h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl  duration-1000 "
                    >
                      <motion.img
                        src={poke}
                        alt="Pokemon Proyect"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 0,
                      }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        top: 290,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className="bg-slate-100  shadow-black absolute  z-50 flex h-96 w-96 flex-col items-center justify-evenly  rounded-full shadow-2xl duration-1000 "
                    >
                      <img
                        src={pokemon}
                        className="w-12 bg-cover object-cover pt-8 align-middle "
                      />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {" "}
                          {proyects[0].Pokemon.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[0].Pokemon.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
              <button
                onClick={handleClickPoke}
                className="text-xsm shadow-black mt-10 h-10 w-32 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>
            <div className="flex flex-col self-center">
              <motion.div
                layout
                data-isopen={!isOpen2}
                initial={{ borderRadius: 50 }}
                onClick={() => setIsOpen2(!isOpen2)}
                className=" flex  items-center justify-center  "
              >
                {!isOpen2 && (
                  <motion.div
                    ref={wrapperRef2}
                    layout
                    initial={{ height: 800, width: 800, borderRadius: 50 }}
                    animate={{ height: 200, width: 200, borderRadius: 80 }}
                    transition={{
                      opacity: { ease: "linear" },
                      layout: { duration: 2 },
                    }}
                    className="bg-slate-100 shadow-black relative  flex  h-48 w-48 flex-col items-center justify-center rounded-3xl text-center  shadow-2xl duration-1000 "
                  >
                    <motion.img
                      src={movi}
                      className="w-36"
                      alt="Urban Movi"
                      title="Urban Movi"
                    ></motion.img>
                    <span className="shadow-black absolute -top-20 text-white   text-shadow-md">
                      toca para ver mas del proyecto
                    </span>
                  </motion.div>
                )}
                {isOpen2 && (
                  <div className="relative flex flex-col">
                    <motion.div
                      layout
                      initial={{ height: 200, width: 200, borderRadius: 80 }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className="  shadow-black  flex h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl  duration-1000 "
                    >
                      <motion.img
                        src={movihome}
                        alt="Urban Movi"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 0,
                      }}
                      animate={{
                        height: 285,
                        width: 600,
                        borderRadius: 50,
                        top: 290,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className="bg-slate-100  shadow-black absolute  z-50 flex h-96 w-96 flex-col items-center justify-evenly  rounded-full shadow-2xl duration-1000 "
                    >
                      <img src={movi} className="w-12 bg-cover object-cover pt-8 align-middle " />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[2].Movi.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[2].Movi.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
              <button
                onClick={handleClickMovi}
                className="text-xsm shadow-black mt-10 h-10 w-32 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>
          </div>
        </div>
      )}
      ;
      {isLargeDesktop && (
        <div className=" flex flex-col  ">
          <div className="flex h-[600px] justify-around align-top">
            <div className="flex flex-col self-center">
              <motion.div
                ref={wrapperRef}
                layout
                data-isopen={!isOpen}
                initial={{ borderRadius: 50 }}
                className=" flex  items-center justify-center  "
              >
                {!isOpen && (
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
                  >
                    <motion.div
                      layout
                      initial={{
                        height: 385,
                        width: 800,
                        borderRadius: 50,
                      }}
                      animate={{ height: 200, width: 200, borderRadius: 80 }}
                      transition={{
                        opacity: { ease: "linear" },
                        layout: { duration: 2 },
                      }}
                      onClick={() => setIsOpen(!isOpen)}
                      className="bg-slate-100  shadow-black  relative flex cursor-pointer flex-col items-center justify-center text-center  shadow-2xl duration-1000 "
                    >
                      {language === "en" ? (
                        <motion.span className="absolute -top-12 text-white text-shadow-sm ">
                          touch here to explore the proyect
                        </motion.span>
                      ) : (
                        <motion.span className="absolute -top-12 text-white text-shadow-sm ">
                          toca para ver mas del proyecto
                        </motion.span>
                      )}
                      <motion.img src={proyect1} className="h-24"></motion.img>
                    </motion.div>
                  </motion.div>
                )}
                {isOpen && (
                  <div className="relative flex flex-col">
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                      }}
                      animate={{
                        height: 385,
                        width: 800,
                        borderRadius: 50,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" shadow-black  flex h-96 w-96 cursor-pointer flex-col items-center justify-center rounded-full shadow-2xl duration-1000 "
                    >
                      <motion.img
                        src={pet}
                        alt="pet friendly universe"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 0,
                      }}
                      animate={{
                        height: 385,
                        width: 800,
                        borderRadius: 50,
                        top: 395,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className="bg-slate-100  shadow-black  absolute z-50 flex h-96 w-96 cursor-pointer flex-col items-center justify-evenly  rounded-full shadow-2xl duration-1000 "
                    >
                      <img
                        src={proyect1}
                        className="w-24 bg-cover object-cover pt-8 align-middle"
                      />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className="p-6 text-center"
                        >
                          {" "}
                          {proyects[1].PetFriendly.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className="p-6 text-center"
                        >
                          {proyects[1].PetFriendly.description}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
              <button
                onClick={handleClickPet}
                className="text-xsm shadow-black mt-10 h-10 w-32 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>
            <div className="flex flex-col self-center">
              {" "}
              <motion.div
                layout
                data-isopen={!isOpen1}
                initial={{ borderRadius: 50 }}
                className="flex  items-center justify-center  "
              >
                {!isOpen1 && (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.5, y: "60%" },
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
                  >
                    <motion.div
                      ref={wrapperRef1}
                      layout
                      initial={{ height: 385, width: 800, borderRadius: 50 }}
                      animate={{ height: 200, width: 200, borderRadius: 80 }}
                      transition={{
                        opacity: { ease: "linear" },
                        layout: { duration: 2 },
                      }}
                      onClick={() => setIsOpen1(!isOpen)}
                      className="bg-slate-100  shadow-black  relative flex h-48 w-48 cursor-pointer flex-col items-center justify-center rounded-3xl text-center  shadow-2xl duration-1000 "
                    >
                      {" "}
                      {language === "en" ? (
                        <motion.span className="absolute -top-12 text-white text-shadow-sm ">
                          touch here to explore the proyect
                        </motion.span>
                      ) : (
                        <motion.span className="absolute -top-12 text-white text-shadow-sm ">
                          toca para ver mas del proyecto
                        </motion.span>
                      )}
                      <motion.img
                        src={pokemon}
                        className="h-20"
                        alt="Pokemon"
                        title="Individual Proyect Pokemon"
                      ></motion.img>
                    </motion.div>
                  </motion.div>
                )}
                {isOpen1 && (
                  <div className="relative flex flex-col">
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                      }}
                      animate={{
                        height: 385,
                        width: 800,
                        borderRadius: 50,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" shadow-black  flex h-96 w-96 cursor-pointer flex-col items-center justify-center rounded-full shadow-2xl duration-1000 "
                    >
                      <motion.img
                        src={poke}
                        alt="pet friendly universe"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 0,
                      }}
                      animate={{
                        height: 385,
                        width: 800,
                        borderRadius: 50,
                        top: 395,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className="bg-slate-100  shadow-black  absolute z-50 flex h-96 w-96 cursor-pointer flex-col items-center justify-evenly  rounded-full shadow-2xl duration-1000 "
                    >
                      <img src={pokemon} className="w-24 bg-cover object-cover pt-8 align-middle" />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[0].Pokemon.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className=" p-6 text-start text-xs"
                        >
                          {proyects[0].Pokemon.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
              <button
                onClick={handleClickPoke}
                className="text-xsm shadow-black mt-10 h-10 w-32 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>
            <div className="flex flex-col self-center">
              <motion.div
                layout
                data-isopen={!isOpen2}
                initial={{ borderRadius: 50 }}
                onClick={() => setIsOpen2(!isOpen2)}
                className="parent flex  items-center justify-center  "
              >
                {!isOpen2 && (
                  <motion.div
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
                      ref={wrapperRef2}
                      layout
                      initial={{ height: 385, width: 800, borderRadius: 50 }}
                      animate={{ height: 200, width: 200, borderRadius: 80 }}
                      transition={{
                        opacity: { ease: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" bg-slate-100 shadow-black relative flex h-48 w-48 cursor-pointer flex-col items-center justify-center rounded-3xl text-center  shadow-2xl duration-1000 "
                    >
                      {language === "en" ? (
                        <motion.span className="absolute -top-12 text-white text-shadow-sm ">
                          touch here to explore the proyect
                        </motion.span>
                      ) : (
                        <motion.span className="absolute -top-12 text-white text-shadow-sm ">
                          toca para ver mas del proyecto
                        </motion.span>
                      )}
                      <motion.img
                        src={movi}
                        className="w-36"
                        alt="Urban Movi"
                        title="Urban Movi"
                      ></motion.img>
                    </motion.div>
                  </motion.div>
                )}
                {isOpen2 && (
                  <div className="relative flex  flex-col">
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                      }}
                      animate={{
                        height: 385,
                        width: 800,
                        borderRadius: 50,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className=" shadow-black  flex h-96 w-96 cursor-pointer flex-col items-center justify-center rounded-full shadow-2xl duration-1000 "
                    >
                      <motion.img
                        src={movihome}
                        alt="Urban - Movie"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    </motion.div>
                    <motion.div
                      layout
                      initial={{
                        height: 200,
                        width: 200,
                        borderRadius: 80,
                        top: 0,
                      }}
                      animate={{
                        height: 385,
                        width: 800,
                        borderRadius: 50,
                        top: 395,
                        overflow: "hidden",
                      }}
                      transition={{
                        opacity: { easeInOut: "linear" },
                        layout: { duration: 2 },
                      }}
                      className="bg-slate-100  shadow-black  absolute z-50 flex h-96 w-96 cursor-pointer flex-col items-center justify-evenly  rounded-full shadow-2xl duration-1000 "
                    >
                      <img src={movi} className="w-24 bg-cover object-cover pt-8 align-middle" />
                      {language === "en" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className="p-6 text-center"
                        >
                          {proyects[2].Movi.description}
                        </motion.span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 2 }}
                          className="p-6 text-center"
                        >
                          {proyects[2].Movi.descripcion}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
              <button
                onClick={handleClickMovi}
                className="text-xsm shadow-black mt-10 h-10 w-32 cursor-pointer self-center rounded-3xl bg-blue-500 text-white shadow-md sm:w-48 sm:text-base"
              >
                {" "}
                link to the proyect
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Proyects;
