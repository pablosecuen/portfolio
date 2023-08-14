import React from "react";
import { proyects } from "../data/Data";
import { motion } from "framer-motion";

console.log(proyects);
function Proyects2(props) {
  const { language } = props;

  return (
    <div className="flex h-full w-full flex-col text-white">
      <h3 className="p-24 text-center text-4xl" id="proyects">
        Proyects
      </h3>
      {proyects.map((proyect) => (
        <div key={proyect.name} className="flex flex-col items-center">
          <div
            key={proyect.name}
            className="mb-20 flex h-full w-full flex-col items-center justify-evenly rounded-xl border py-8 align-middle text-white md:mb-0 md:flex-row md:gap-20 md:border-none md:py-0"
          >
            {" "}
            <motion.div
              className="flex-end hidden h-full w-full justify-center md:flex md:w-1/2 md:justify-end "
              variants={{
                hidden: { opacity: 0, x: -300 },
                visible: { opacity: 1, x: 0, transition: { duration: 1 } },
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
              <img
                src={proyect.img}
                alt={proyect.name}
                className=" object-fil -md  h-64 rounded-xl shadow-xl shadow-white/40  md:h-64"
              />
            </motion.div>
            <div className="flex-end flex h-full w-full justify-center shadow shadow-white drop-shadow-md md:hidden md:w-1/2 md:justify-end">
              <img
                src={proyect.img}
                alt={proyect.name}
                className=" w-11/12 overflow-hidden rounded-xl object-fill md:h-64"
              />
            </div>
            <motion.div
              className="flex-end hidden h-full w-1/2 flex-col justify-end md:flex "
              variants={{
                hidden: { opacity: 0, x: 300 },
                visible: { opacity: 1, x: 0, transition: { duration: 1 } },
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
              <h3 className="w-96 pb-2 text-2xl font-bold">{proyect.name}</h3>
              <span className="m w-3/5 opacity-80">
                {language === "en" ? proyect.description : proyect.descripcion}
              </span>
            </motion.div>
            <div className="flex-end  flex h-full w-11/12 flex-col justify-end  text-center md:hidden  ">
              <h3 className="pb-8 text-center  text-2xl font-bold">{proyect.name}</h3>
              <span className="text-center opacity-80">
                {language === "en" ? proyect.description : proyect.descripcion}
              </span>
              <a
                href={proyect.url}
                target="_blank"
                rel="noreferrer"
                className="item  flex  w-full justify-center self-end  py-8 md:mb-64  md:justify-center"
              >
                <button className="text-xsm h-10  cursor-pointer self-center rounded-3xl border bg-blue-500 p-2 px-4 text-white shadow-md shadow-black sm:text-base">
                  link to the proyect
                </button>
              </a>
            </div>
          </div>

          <a
            href={proyect.url}
            target="_blank"
            rel="noreferrer"
            className="item mx-auto mb-20 hidden  w-full justify-end pt-8 md:mb-64   md:flex md:w-3/5 "
          >
            <motion.button
              className="text-xsm  h-10 cursor-pointer rounded-3xl  bg-blue-500 p-2 px-4 text-white shadow-md shadow-black sm:text-base"
              variants={{
                hidden: { opacity: 0, x: 0 },
                visible: { opacity: 1, x: 0, transition: { duration: 3 } },
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
              link to the project
            </motion.button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Proyects2;
