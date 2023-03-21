import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "./useMediaQuery";
import proyect1 from "../assets/img/logo.png";
import pokemon from "../assets/img/pokemon.png";
import rick from "../assets//img/rick.png";

function Proyects() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const isXSmallMobile = useMediaQuery("(max-width: 400px)");
  const isSmallMobile = useMediaQuery(
    "(min-width: 401px) and (max-width: 639px)"
  );
  const isMobile = useMediaQuery("(min-width: 640px) and (max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery(
    "(min-width: 1024px) and (max-width: 1279px)"
  );
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

  return (
    <div className="relative h-96 w-full">
      {isXSmallMobile && (
        <div className="flex w-full flex-col">
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
            className=" w-full pb-28 text-center text-6xl tracking-tighter  text-white"
          >
            My proyects
          </motion.h2>
          <div className="flex h-[500px] flex-col justify-around gap-10 pt-48">
            <motion.div
              ref={wrapperRef}
              layout
              data-isOpen={!isOpen}
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
                  className=" flex flex-col items-center  justify-center bg-white  text-center duration-1000 "
                >
                  <span>toca para ver mas del proyecto</span>
                  <motion.img src={proyect1} className="h-24"></motion.img>
                </motion.div>
              )}
              {isOpen && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{
                    height: 300,
                    width: 300,
                    borderRadius: 50,
                  }}
                  transition={{
                    opacity: { easeInOut: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="flex h-96 w-96 items-center justify-center rounded-full bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
            <motion.div
              layout
              data-isOpen={!isOpen1}
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
                  className=" flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-white  text-center duration-1000 "
                >
                  {" "}
                  <span>toca para ver mas del proyecto</span>
                  <motion.img
                    src={pokemon}
                    className="h-20"
                    alt="Pokemon"
                    title="Individual Proyect Pokemon"
                  ></motion.img>
                </motion.div>
              )}
              {isOpen1 && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{ height: 300, width: 300, borderRadius: 50 }}
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="child flex h-48 w-48 items-center justify-center rounded-3xl bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
            <motion.div
              layout
              data-isOpen={!isOpen2}
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
                  className=" flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-white  text-center duration-1000 "
                >
                  <span>toca para ver mas del proyecto</span>
                  <motion.img
                    src={rick}
                    className="h-24"
                    alt="Rick and Morty"
                    title="Proyect Rick and Morty"
                  ></motion.img>
                </motion.div>
              )}
              {isOpen2 && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{
                    height: 300,
                    width: 300,
                    borderRadius: 50,
                  }}
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="child flex h-48 w-48 items-center justify-center rounded-3xl bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {isSmallMobile && (
        <div className="flex w-full flex-col">
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
            className=" w-full pb-28 text-center text-6xl tracking-tighter  text-white"
          >
            My proyects
          </motion.h2>
          <div className="flex h-[500px] flex-col justify-around gap-10 pt-48">
            <motion.div
              ref={wrapperRef}
              layout
              data-isOpen={!isOpen}
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
                  className=" flex flex-col items-center  justify-center bg-white  text-center duration-1000 "
                >
                  <span>toca para ver mas del proyecto</span>
                  <motion.img src={proyect1} className="h-24"></motion.img>
                </motion.div>
              )}
              {isOpen && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{
                    height: 500,
                    width: 500,
                    borderRadius: 50,
                  }}
                  transition={{
                    opacity: { easeInOut: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="flex h-96 w-96 items-center justify-center rounded-full bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
            <motion.div
              layout
              data-isOpen={!isOpen1}
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
                  className=" flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-white  text-center duration-1000 "
                >
                  {" "}
                  <span>toca para ver mas del proyecto</span>
                  <motion.img
                    src={pokemon}
                    className="h-20"
                    alt="Pokemon"
                    title="Individual Proyect Pokemon"
                  ></motion.img>
                </motion.div>
              )}
              {isOpen1 && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{ height: 500, width: 500, borderRadius: 50 }}
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="child flex h-48 w-48 items-center justify-center rounded-3xl bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
            <motion.div
              layout
              data-isOpen={!isOpen2}
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
                  className=" flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-white  text-center duration-1000 "
                >
                  <span>toca para ver mas del proyecto</span>
                  <motion.img
                    src={rick}
                    className="h-24"
                    alt="Rick and Morty"
                    title="Proyect Rick and Morty"
                  ></motion.img>
                </motion.div>
              )}
              {isOpen2 && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{
                    height: 500,
                    width: 500,
                    borderRadius: 50,
                  }}
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="child flex h-48 w-48 items-center justify-center rounded-3xl bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex w-full flex-col">
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
            className=" w-full pb-28 text-center text-6xl tracking-tighter  text-white"
          >
            My proyects
          </motion.h2>
          <div className="flex h-[400px] justify-around">
            <motion.div
              ref={wrapperRef}
              layout
              data-isOpen={!isOpen}
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
                  className=" flex flex-col items-center  justify-center bg-white  text-center duration-1000 "
                >
                  <span>toca para ver mas del proyecto</span>
                  <motion.img src={proyect1} className="h-24"></motion.img>
                </motion.div>
              )}
              {isOpen && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{
                    height: 500,
                    width: 500,
                    borderRadius: 50,
                    x: 100,
                  }}
                  transition={{
                    opacity: { easeInOut: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="flex h-96 w-96 items-center justify-center rounded-full bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
            <motion.div
              layout
              data-isOpen={!isOpen1}
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
                  className=" flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-white  text-center duration-1000 "
                >
                  {" "}
                  <span>toca para ver mas del proyecto</span>
                  <motion.img
                    src={pokemon}
                    className="h-20"
                    alt="Pokemon"
                    title="Individual Proyect Pokemon"
                  ></motion.img>
                </motion.div>
              )}
              {isOpen1 && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{ height: 500, width: 500, borderRadius: 50 }}
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="child flex h-48 w-48 items-center justify-center rounded-3xl bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
            <motion.div
              layout
              data-isOpen={!isOpen2}
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
                  className=" flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-white  text-center duration-1000 "
                >
                  <span>toca para ver mas del proyecto</span>
                  <motion.img
                    src={rick}
                    className="h-24"
                    alt="Rick and Morty"
                    title="Proyect Rick and Morty"
                  ></motion.img>
                </motion.div>
              )}
              {isOpen2 && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{
                    height: 500,
                    width: 500,
                    borderRadius: 50,
                    x: -100,
                  }}
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="child flex h-48 w-48 items-center justify-center rounded-3xl bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {isTablet && (
        <div className="flex w-full flex-col">
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
            className=" w-full pb-28 text-center text-6xl tracking-tighter  text-white"
          >
            My proyects
          </motion.h2>
          <div className="flex h-[400px] justify-around">
            <motion.div
              ref={wrapperRef}
              layout
              data-isOpen={!isOpen}
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
                  className=" flex flex-col items-center  justify-center bg-white  text-center duration-1000 "
                >
                  <span>toca para ver mas del proyecto</span>
                  <motion.img src={proyect1} className="h-24"></motion.img>
                </motion.div>
              )}
              {isOpen && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{
                    height: 500,
                    width: 500,
                    borderRadius: 50,
                    x: 50,
                  }}
                  transition={{
                    opacity: { easeInOut: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="flex h-96 w-96 items-center justify-center rounded-full bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
            <motion.div
              layout
              data-isOpen={!isOpen1}
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
                  className=" flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-white  text-center duration-1000 "
                >
                  {" "}
                  <span>toca para ver mas del proyecto</span>
                  <motion.img
                    src={pokemon}
                    className="h-20"
                    alt="Pokemon"
                    title="Individual Proyect Pokemon"
                  ></motion.img>
                </motion.div>
              )}
              {isOpen1 && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{ height: 500, width: 500, borderRadius: 50 }}
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="child flex h-48 w-48 items-center justify-center rounded-3xl bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
            <motion.div
              layout
              data-isOpen={!isOpen2}
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
                  className=" flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-white  text-center duration-1000 "
                >
                  <span>toca para ver mas del proyecto</span>
                  <motion.img
                    src={rick}
                    className="h-24"
                    alt="Rick and Morty"
                    title="Proyect Rick and Morty"
                  ></motion.img>
                </motion.div>
              )}
              {isOpen2 && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{
                    height: 500,
                    width: 500,
                    borderRadius: 50,
                    x: -50,
                  }}
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="child flex h-48 w-48 items-center justify-center rounded-3xl bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {isDesktop && (
        <div className="flex flex-col ">
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
            className=" w-full pb-28 text-center text-6xl tracking-tighter  text-white"
          >
            My proyects
          </motion.h2>
          <div className="flex h-[400px] justify-around">
            <motion.div
              ref={wrapperRef}
              layout
              data-isOpen={!isOpen}
              initial={{ borderRadius: 50 }}
              onClick={() => setIsOpen(!isOpen)}
              className=" flex  items-center justify-center  "
            >
              {!isOpen && (
                <motion.div
                  layout
                  initial={{ height: 500, width: 500, borderRadius: 50 }}
                  animate={{ height: 200, width: 200, borderRadius: 80 }}
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 2 },
                  }}
                  className=" flex flex-col items-center  justify-center bg-white  text-center duration-1000 "
                >
                  <span>toca para ver mas del proyecto</span>
                  <motion.img src={proyect1} className="h-24"></motion.img>
                </motion.div>
              )}
              {isOpen && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{ height: 500, width: 500, borderRadius: 50 }}
                  transition={{
                    opacity: { easeInOut: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="flex h-96 w-96 items-center justify-center rounded-full bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
            <motion.div
              layout
              data-isOpen={!isOpen1}
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
                  className=" flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-white  text-center duration-1000 "
                >
                  {" "}
                  <span>toca para ver mas del proyecto</span>
                  <motion.img
                    src={pokemon}
                    className="h-20"
                    alt="Pokemon"
                    title="Individual Proyect Pokemon"
                  ></motion.img>
                </motion.div>
              )}
              {isOpen1 && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{ height: 500, width: 500, borderRadius: 50 }}
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="child flex h-48 w-48 items-center justify-center rounded-3xl bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
            <motion.div
              layout
              data-isOpen={!isOpen2}
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
                  className=" flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-white  text-center duration-1000 "
                >
                  <span>toca para ver mas del proyecto</span>
                  <motion.img
                    src={rick}
                    className="h-24"
                    alt="Rick and Morty"
                    title="Proyect Rick and Morty"
                  ></motion.img>
                </motion.div>
              )}
              {isOpen2 && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{ height: 500, width: 500, borderRadius: 50 }}
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="child flex h-48 w-48 items-center justify-center rounded-3xl bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
          </div>
        </div>
      )}
      {isLargeDesktop && (
        <div className="flex flex-col ">
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
            className=" w-full pb-28 text-center text-6xl tracking-tighter  text-white"
          >
            My proyects
          </motion.h2>
          <div className="flex h-[400px] justify-around">
            <motion.div
              ref={wrapperRef}
              layout
              data-isOpen={!isOpen}
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
                  className=" flex flex-col items-center  justify-center bg-white  text-center duration-1000 "
                >
                  <span>toca para ver mas del proyecto</span>
                  <motion.img src={proyect1} className="h-24"></motion.img>
                </motion.div>
              )}
              {isOpen && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{ height: 800, width: 800, borderRadius: 50 }}
                  transition={{
                    opacity: { easeInOut: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="flex h-96 w-96 items-center justify-center rounded-full bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
            <motion.div
              layout
              data-isOpen={!isOpen1}
              initial={{ borderRadius: 50 }}
              onClick={() => setIsOpen1(!isOpen1)}
              className="flex  items-center justify-center  "
            >
              {!isOpen1 && (
                <motion.div
                  ref={wrapperRef1}
                  layout
                  initial={{ height: 800, width: 800, borderRadius: 50 }}
                  animate={{ height: 200, width: 200, borderRadius: 80 }}
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 2 },
                  }}
                  className=" flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-white  text-center duration-1000 "
                >
                  {" "}
                  <span>toca para ver mas del proyecto</span>
                  <motion.img
                    src={pokemon}
                    className="h-20"
                    alt="Pokemon"
                    title="Individual Proyect Pokemon"
                  ></motion.img>
                </motion.div>
              )}
              {isOpen1 && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{ height: 800, width: 800, borderRadius: 50 }}
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="child flex h-48 w-48 items-center justify-center rounded-3xl bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
            <motion.div
              layout
              data-isOpen={!isOpen2}
              initial={{ borderRadius: 50 }}
              onClick={() => setIsOpen2(!isOpen2)}
              className="parent flex  items-center justify-center  "
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
                  className=" flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-white  text-center duration-1000 "
                >
                  <span>toca para ver mas del proyecto</span>
                  <motion.img
                    src={rick}
                    className="h-24"
                    alt="Rick and Morty"
                    title="Proyect Rick and Morty"
                  ></motion.img>
                </motion.div>
              )}
              {isOpen2 && (
                <motion.div
                  layout
                  initial={{ height: 200, width: 200, borderRadius: 80 }}
                  animate={{ height: 800, width: 800, borderRadius: 50 }}
                  transition={{
                    opacity: { ease: "linear" },
                    layout: { duration: 2 },
                  }}
                  className="child flex h-48 w-48 items-center justify-center rounded-3xl bg-white duration-1000 "
                ></motion.div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Proyects;
