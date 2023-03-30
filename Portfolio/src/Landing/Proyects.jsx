import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "./useMediaQuery";
import proyect1 from "../assets/img/logo.png";
import pokemon from "../assets/img/pokemon.png";
import rick from "../assets/img/Rick.png";
import pet from "../assets/img/petfriendly.png";
import petsm from "../assets/img/petfriendlysm.png";
import poke from "../assets/img/pokeApp.png";

function Proyects(props) {
  const { language } = props;
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

  const handleClickButton = () => {
    navigate("https://petfriendlyuniverse.vercel.app/");
  };

  return (
    <div className="relative mt-96 w-full lg:mt-64">
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
          className=" -mt-96 mb-48 w-full cursor-pointer p-4 text-center text-2xl  -tracking-widest text-white shadow-black text-shadow-md xsm:text-xl lg:-mt-48 lg:mb-0 lg:text-6xl   "
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
          className=" -mt-96 mb-48 w-full cursor-pointer p-4 text-center text-2xl  -tracking-widest text-white shadow-black text-shadow-md xsm:text-xl lg:-mt-48 lg:mb-0 lg:text-6xl   "
        >
          Mis proyectos
        </motion.h2>
      )}
      {isXSmallMobile && (
        <div className="flex w-full  flex-col">
          <div className="flex h-[500px] flex-col justify-around gap-10 pt-48 ">
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
                  className="relative mb-20 flex flex-col items-center justify-center bg-slate-100 text-center shadow-2xl   shadow-black duration-1000 "
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
              )}
              {isOpen && (
                <div className="relative flex flex-col">
                  <motion.div
                    layout
                    initial={{ height: 200, width: 200, borderRadius: 40 }}
                    animate={{
                      height: 560,
                      width: 280,
                      borderRadius: 80,
                      overflow: "hidden",
                    }}
                    transition={{
                      opacity: { easeInOut: "linear" },
                      layout: { duration: 2 },
                    }}
                    className=" mt-96  flex h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl shadow-black  duration-1000 "
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
                      top: 930,
                      overflow: "hidden",
                    }}
                    transition={{
                      opacity: { easeInOut: "linear" },
                      layout: { duration: 2 },
                    }}
                    className=" absolute z-50 flex h-96 w-96 flex-col items-center justify-evenly rounded-full bg-slate-100  shadow-2xl shadow-black duration-1000 "
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
                        Pet Friendly Universe is a multi-platform site with a
                        fully functional e-commerce system. Any user with
                        previous administrator authorization can create a store
                        and upload their product catalogs. The site also
                        provides services such as pet daycare and dog walking.
                        Every sale made on the site must donate 3% of its
                        profits to our non-governmental organizations for pet
                        protection. These organizations have their own route on
                        our site where they can post pets for adoption and have
                        their own administrator dashboards to completely control
                        the Pet Friendly Universe. This includes user banning,
                        post deletions, store creation authorization, and much
                        more. We used a variety of technologies to create this
                        site, including JavaScript, React, Redux, Express,
                        PostgreSQL, Cloudinary, JSON Web Token, third-party
                        authorization (such as Google, Vite, and Tailwind), and
                        several React libraries to optimize the site.{" "}
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="p-6 text-center"
                      >
                        Universo Amigable con las Mascotas es un sitio
                        multiplataforma con un sistema de comercio electrónico
                        completamente funcional. Cualquier usuario con
                        autorización de administrador previa puede crear una
                        tienda y cargar su catálogo de productos. El sitio
                        también ofrece servicios como guardería de mascotas y
                        paseo de perros. Cada venta realizada en el sitio debe
                        donar el 3% de sus ganancias a nuestras organizaciones
                        no gubernamentales de protección de mascotas. Estas
                        organizaciones tienen su propia sección en nuestro sitio
                        donde pueden publicar mascotas para adopción y tienen
                        sus propios paneles de administración para controlar
                        completamente el Universo Amigable con las Mascotas.
                        Esto incluye la prohibición de usuarios, eliminación de
                        publicaciones, autorización de creación de tiendas y
                        mucho más. Utilizamos una variedad de tecnologías para
                        crear este sitio, incluyendo JavaScript, React, Redux,
                        Express, PostgreSQL, Cloudinary, JSON Web Token,
                        autorización de terceros (como Google, Vite y Tailwind)
                        y varias bibliotecas de React para optimizar el sitio.
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              )}
            </motion.div>
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
                  className="relative mb-20 flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-slate-100 text-center shadow-2xl  shadow-black duration-1000 "
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
              )}
              {isOpen1 && (
                <div className="relative flex flex-col">
                  <motion.div
                    layout
                    initial={{ height: 200, width: 200, borderRadius: 40 }}
                    animate={{
                      height: 560,
                      width: 280,
                      borderRadius: 80,
                      overflow: "hidden",
                    }}
                    transition={{
                      opacity: { easeInOut: "linear" },
                      layout: { duration: 2 },
                    }}
                    className=" mt-96  flex  flex-col items-center justify-center rounded-full   duration-1000 "
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
                      top: 735,
                      overflow: "hidden",
                    }}
                    transition={{
                      opacity: { easeInOut: "linear" },
                      layout: { duration: 2 },
                    }}
                    className=" absolute z-50 flex h-96 w-96 flex-col items-center justify-evenly rounded-full bg-slate-100  shadow-2xl shadow-black duration-1000 "
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
                        This project uses React, Redux, Node, and Sequelize to
                        view and interact with Pokémon data from the pokeapi
                        API. The main page features a search input and list of
                        Pokémon, which can be filtered and sorted by type and
                        attack. Pagination is included to display 12 Pokémon per
                        page. The Pokémon detail page includes stats and
                        additional information, and a controlled form is
                        available for creating new Pokémon. The creation form
                        has been validated to ensure proper data entry. The app
                        also includes a playable Kanto Ultimate Pokémon game.
                        The app is not responsive due to limited development
                        time. Overall, this project serves as a way to practice
                        and apply knowledge of various technologies.
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className=" p-6 text-start text-xs"
                      >
                        Este proyecto utiliza React, Redux, Node y Sequelize
                        para ver e interactuar con los datos de Pokémon de la
                        API pokeapi. La página principal cuenta con una entrada
                        de búsqueda y una lista de Pokémon, que se pueden
                        filtrar y ordenar por tipo y ataque. Se incluye la
                        paginación para mostrar 12 Pokémon por página. La página
                        de detalle de Pokémon incluye estadísticas e información
                        adicional, y hay un formulario controlado disponible
                        para crear nuevos Pokémon. El formulario de creación ha
                        sido validado para garantizar la entrada de datos
                        correcta. La aplicación también incluye un juego de
                        Pokémon Ultimate Kanto jugable. La aplicación no es
                        responsiva debido al tiempo limitado de desarrollo. En
                        general, este proyecto sirve como una manera de
                        practicar y aplicar el conocimiento de varias
                        tecnologías.
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              )}
            </motion.div>
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
                  className="relative flex  h-48 w-48 flex-col items-center justify-center rounded-3xl bg-slate-100 text-center shadow-2xl  shadow-black duration-1000 "
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
                  className=" child z-50 mb-40 flex h-48 w-48 items-center justify-center rounded-3xl bg-white shadow-2xl shadow-black duration-1000 "
                ></motion.div>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {isSmallMobile && (
        <div className="flex w-full flex-col">
          <div className="flex h-[500px] flex-col justify-around gap-10 pt-48">
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
                  className=" flex flex-col items-center  justify-center bg-slate-100  text-center duration-1000 "
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
              )}
              {isOpen && (
                <div className="relative flex flex-col">
                  <motion.div
                    layout
                    initial={{ height: 200, width: 200, borderRadius: 40 }}
                    animate={{
                      height: 600,
                      width: 300,
                      borderRadius: 80,
                      overflow: "hidden",
                    }}
                    transition={{
                      opacity: { easeInOut: "linear" },
                      layout: { duration: 2 },
                    }}
                    className=" mt-96 flex h-96 w-96 flex-col items-center justify-center rounded-full  duration-1000 "
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
                      top: 970,
                      overflow: "hidden",
                    }}
                    transition={{
                      opacity: { easeInOut: "linear" },
                      layout: { duration: 2 },
                    }}
                    className="absolute flex h-96 w-96 flex-col items-center justify-evenly  rounded-full bg-slate-100 duration-1000 "
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
                        Pet Friendly Universe is a multi-platform site with a
                        fully functional e-commerce system. Any user with
                        previous administrator authorization can create a store
                        and upload their product catalogs. The site also
                        provides services such as pet daycare and dog walking.
                        Every sale made on the site must donate 3% of its
                        profits to our non-governmental organizations for pet
                        protection. These organizations have their own route on
                        our site where they can post pets for adoption and have
                        their own administrator dashboards to completely control
                        the Pet Friendly Universe. This includes user banning,
                        post deletions, store creation authorization, and much
                        more. We used a variety of technologies to create this
                        site, including JavaScript, React, Redux, Express,
                        PostgreSQL, Cloudinary, JSON Web Token, third-party
                        authorization (such as Google, Vite, and Tailwind), and
                        several React libraries to optimize the site.{" "}
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="p-6 text-center"
                      >
                        Universo Amigable con las Mascotas es un sitio
                        multiplataforma con un sistema de comercio electrónico
                        completamente funcional. Cualquier usuario con
                        autorización de administrador previa puede crear una
                        tienda y cargar su catálogo de productos. El sitio
                        también ofrece servicios como guardería de mascotas y
                        paseo de perros. Cada venta realizada en el sitio debe
                        donar el 3% de sus ganancias a nuestras organizaciones
                        no gubernamentales de protección de mascotas. Estas
                        organizaciones tienen su propia sección en nuestro sitio
                        donde pueden publicar mascotas para adopción y tienen
                        sus propios paneles de administración para controlar
                        completamente el Universo Amigable con las Mascotas.
                        Esto incluye la prohibición de usuarios, eliminación de
                        publicaciones, autorización de creación de tiendas y
                        mucho más. Utilizamos una variedad de tecnologías para
                        crear este sitio, incluyendo JavaScript, React, Redux,
                        Express, PostgreSQL, Cloudinary, JSON Web Token,
                        autorización de terceros (como Google, Vite y Tailwind)
                        y varias bibliotecas de React para optimizar el sitio.
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              )}
            </motion.div>
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
                  className=" flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-slate-100  text-center duration-1000 "
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
              )}
              {isOpen1 && (
                <div className="relative flex flex-col">
                  <motion.div
                    layout
                    initial={{ height: 200, width: 200, borderRadius: 40 }}
                    animate={{
                      height: 600,
                      width: 300,
                      borderRadius: 80,
                      overflow: "hidden",
                    }}
                    transition={{
                      opacity: { easeInOut: "linear" },
                      layout: { duration: 2 },
                    }}
                    className=" mt-96 flex h-96 w-96 flex-col items-center justify-center rounded-full  duration-1000 "
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
                      top: 760,
                      overflow: "hidden",
                    }}
                    transition={{
                      opacity: { easeInOut: "linear" },
                      layout: { duration: 2 },
                    }}
                    className="absolute flex h-96 w-96 flex-col items-center justify-evenly  rounded-full bg-slate-100 duration-1000 "
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
                        This project uses React, Redux, Node, and Sequelize to
                        view and interact with Pokémon data from the pokeapi
                        API. The main page features a search input and list of
                        Pokémon, which can be filtered and sorted by type and
                        attack. Pagination is included to display 12 Pokémon per
                        page. The Pokémon detail page includes stats and
                        additional information, and a controlled form is
                        available for creating new Pokémon. The creation form
                        has been validated to ensure proper data entry. The app
                        also includes a playable Kanto Ultimate Pokémon game.
                        The app is not responsive due to limited development
                        time. Overall, this project serves as a way to practice
                        and apply knowledge of various technologies.
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className=" p-6 text-start text-xs"
                      >
                        Este proyecto utiliza React, Redux, Node y Sequelize
                        para ver e interactuar con los datos de Pokémon de la
                        API pokeapi. La página principal cuenta con una entrada
                        de búsqueda y una lista de Pokémon, que se pueden
                        filtrar y ordenar por tipo y ataque. Se incluye la
                        paginación para mostrar 12 Pokémon por página. La página
                        de detalle de Pokémon incluye estadísticas e información
                        adicional, y hay un formulario controlado disponible
                        para crear nuevos Pokémon. El formulario de creación ha
                        sido validado para garantizar la entrada de datos
                        correcta. La aplicación también incluye un juego de
                        Pokémon Ultimate Kanto jugable. La aplicación no es
                        responsiva debido al tiempo limitado de desarrollo. En
                        general, este proyecto sirve como una manera de
                        practicar y aplicar el conocimiento de varias
                        tecnologías.
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              )}
            </motion.div>
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
                  className=" flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-slate-100  text-center duration-1000 "
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
                  className="child flex h-48 w-48 items-center justify-center rounded-3xl bg-slate-100 duration-1000 "
                ></motion.div>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex w-full flex-col">
          <div className="mt-48 flex h-[400px] flex-col justify-around gap-20">
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
                  className=" flex  flex-col items-center justify-center bg-slate-100  text-center shadow-2xl  shadow-black duration-1000 "
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
                    className=" m-l-24  flex h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl shadow-black  duration-1000 "
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
                    className=" absolute  flex h-96 w-96 flex-col items-center justify-evenly rounded-full bg-slate-100  shadow-2xl shadow-black duration-1000 "
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
                        Pet Friendly Universe is a multi-platform site with a
                        fully functional e-commerce system. Any user with
                        previous administrator authorization can create a store
                        and upload their product catalogs. The site also
                        provides services such as pet daycare and dog walking.
                        Every sale made on the site must donate 3% of its
                        profits to our non-governmental organizations for pet
                        protection. These organizations have their own route on
                        our site where they can post pets for adoption and have
                        their own administrator dashboards to completely control
                        the Pet Friendly Universe. This includes user banning,
                        post deletions, store creation authorization, and much
                        more. We used a variety of technologies to create this
                        site, including JavaScript, React, Redux, Express,
                        PostgreSQL, Cloudinary, JSON Web Token, third-party
                        authorization (such as Google, Vite, and Tailwind), and
                        several React libraries to optimize the site.{" "}
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="p-6 text-center"
                      >
                        Universo Amigable con las Mascotas es un sitio
                        multiplataforma con un sistema de comercio electrónico
                        completamente funcional. Cualquier usuario con
                        autorización de administrador previa puede crear una
                        tienda y cargar su catálogo de productos. El sitio
                        también ofrece servicios como guardería de mascotas y
                        paseo de perros. Cada venta realizada en el sitio debe
                        donar el 3% de sus ganancias a nuestras organizaciones
                        no gubernamentales de protección de mascotas. Estas
                        organizaciones tienen su propia sección en nuestro sitio
                        donde pueden publicar mascotas para adopción y tienen
                        sus propios paneles de administración para controlar
                        completamente el Universo Amigable con las Mascotas.
                        Esto incluye la prohibición de usuarios, eliminación de
                        publicaciones, autorización de creación de tiendas y
                        mucho más. Utilizamos una variedad de tecnologías para
                        crear este sitio, incluyendo JavaScript, React, Redux,
                        Express, PostgreSQL, Cloudinary, JSON Web Token,
                        autorización de terceros (como Google, Vite y Tailwind)
                        y varias bibliotecas de React para optimizar el sitio.
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              )}
            </motion.div>
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
                  className=" flex  h-48 w-48 flex-col items-center justify-center rounded-3xl bg-slate-100 text-center shadow-2xl  shadow-black duration-1000 "
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
                    className=" m-l-24  flex h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl shadow-black  duration-1000 "
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
                    className=" absolute  flex h-96 w-96 flex-col items-center justify-evenly rounded-full bg-slate-100  shadow-2xl shadow-black duration-1000 "
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
                        This project uses React, Redux, Node, and Sequelize to
                        view and interact with Pokémon data from the pokeapi
                        API. The main page features a search input and list of
                        Pokémon, which can be filtered and sorted by type and
                        attack. Pagination is included to display 12 Pokémon per
                        page. The Pokémon detail page includes stats and
                        additional information, and a controlled form is
                        available for creating new Pokémon. The creation form
                        has been validated to ensure proper data entry. The app
                        also includes a playable Kanto Ultimate Pokémon game.
                        The app is not responsive due to limited development
                        time. Overall, this project serves as a way to practice
                        and apply knowledge of various technologies.
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className=" p-6 text-start text-xs"
                      >
                        Este proyecto utiliza React, Redux, Node y Sequelize
                        para ver e interactuar con los datos de Pokémon de la
                        API pokeapi. La página principal cuenta con una entrada
                        de búsqueda y una lista de Pokémon, que se pueden
                        filtrar y ordenar por tipo y ataque. Se incluye la
                        paginación para mostrar 12 Pokémon por página. La página
                        de detalle de Pokémon incluye estadísticas e información
                        adicional, y hay un formulario controlado disponible
                        para crear nuevos Pokémon. El formulario de creación ha
                        sido validado para garantizar la entrada de datos
                        correcta. La aplicación también incluye un juego de
                        Pokémon Ultimate Kanto jugable. La aplicación no es
                        responsiva debido al tiempo limitado de desarrollo. En
                        general, este proyecto sirve como una manera de
                        practicar y aplicar el conocimiento de varias
                        tecnologías.
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              )}
            </motion.div>
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
                  className="relative flex  h-48 w-48 flex-col items-center justify-center rounded-3xl bg-slate-100 text-center shadow-2xl  shadow-black duration-1000 "
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
                  className=" child  flex h-48 w-48 items-center justify-center rounded-3xl bg-slate-100 shadow-2xl shadow-black duration-1000 "
                ></motion.div>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {isTablet && (
        <div className="flex w-full flex-col">
          <div className="mt-48 flex h-[400px] flex-col justify-around gap-20">
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
                  className="relative flex  flex-col items-center justify-center bg-slate-100  text-center shadow-2xl  shadow-black duration-1000 "
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
                    className=" m-l-24  flex h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl shadow-black  duration-1000 "
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
                    className=" absolute  flex h-96 w-96 flex-col items-center justify-evenly rounded-full bg-white  shadow-2xl shadow-black duration-1000 "
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
                        Pet Friendly Universe is a multi-platform site with a
                        fully functional e-commerce system. Any user with
                        previous administrator authorization can create a store
                        and upload their product catalogs. The site also
                        provides services such as pet daycare and dog walking.
                        Every sale made on the site must donate 3% of its
                        profits to our non-governmental organizations for pet
                        protection. These organizations have their own route on
                        our site where they can post pets for adoption and have
                        their own administrator dashboards to completely control
                        the Pet Friendly Universe. This includes user banning,
                        post deletions, store creation authorization, and much
                        more. We used a variety of technologies to create this
                        site, including JavaScript, React, Redux, Express,
                        PostgreSQL, Cloudinary, JSON Web Token, third-party
                        authorization (such as Google, Vite, and Tailwind), and
                        several React libraries to optimize the site.{" "}
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="p-6 text-center"
                      >
                        Universo Amigable con las Mascotas es un sitio
                        multiplataforma con un sistema de comercio electrónico
                        completamente funcional. Cualquier usuario con
                        autorización de administrador previa puede crear una
                        tienda y cargar su catálogo de productos. El sitio
                        también ofrece servicios como guardería de mascotas y
                        paseo de perros. Cada venta realizada en el sitio debe
                        donar el 3% de sus ganancias a nuestras organizaciones
                        no gubernamentales de protección de mascotas. Estas
                        organizaciones tienen su propia sección en nuestro sitio
                        donde pueden publicar mascotas para adopción y tienen
                        sus propios paneles de administración para controlar
                        completamente el Universo Amigable con las Mascotas.
                        Esto incluye la prohibición de usuarios, eliminación de
                        publicaciones, autorización de creación de tiendas y
                        mucho más. Utilizamos una variedad de tecnologías para
                        crear este sitio, incluyendo JavaScript, React, Redux,
                        Express, PostgreSQL, Cloudinary, JSON Web Token,
                        autorización de terceros (como Google, Vite y Tailwind)
                        y varias bibliotecas de React para optimizar el sitio.
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              )}
            </motion.div>
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
                  className="relative flex  h-48 w-48 flex-col items-center justify-center rounded-3xl bg-slate-100 text-center shadow-2xl shadow-black duration-1000 "
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
                    className=" m-l-24  flex h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl shadow-black  duration-1000 "
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
                    className=" absolute  flex h-96 w-96 flex-col items-center justify-evenly rounded-full bg-slate-100  shadow-2xl shadow-black duration-1000 "
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
                        This project uses React, Redux, Node, and Sequelize to
                        view and interact with Pokémon data from the pokeapi
                        API. The main page features a search input and list of
                        Pokémon, which can be filtered and sorted by type and
                        attack. Pagination is included to display 12 Pokémon per
                        page. The Pokémon detail page includes stats and
                        additional information, and a controlled form is
                        available for creating new Pokémon. The creation form
                        has been validated to ensure proper data entry. The app
                        also includes a playable Kanto Ultimate Pokémon game.
                        The app is not responsive due to limited development
                        time. Overall, this project serves as a way to practice
                        and apply knowledge of various technologies.
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className=" p-6 text-start text-xs"
                      >
                        Este proyecto utiliza React, Redux, Node y Sequelize
                        para ver e interactuar con los datos de Pokémon de la
                        API pokeapi. La página principal cuenta con una entrada
                        de búsqueda y una lista de Pokémon, que se pueden
                        filtrar y ordenar por tipo y ataque. Se incluye la
                        paginación para mostrar 12 Pokémon por página. La página
                        de detalle de Pokémon incluye estadísticas e información
                        adicional, y hay un formulario controlado disponible
                        para crear nuevos Pokémon. El formulario de creación ha
                        sido validado para garantizar la entrada de datos
                        correcta. La aplicación también incluye un juego de
                        Pokémon Ultimate Kanto jugable. La aplicación no es
                        responsiva debido al tiempo limitado de desarrollo. En
                        general, este proyecto sirve como una manera de
                        practicar y aplicar el conocimiento de varias
                        tecnologías.
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              )}
            </motion.div>
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
                  className="relative z-50 flex h-48 w-48 flex-col items-center justify-center rounded-3xl bg-slate-100 text-center shadow-2xl  shadow-black duration-1000 "
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
                  className="child z-50 flex  h-48 w-48 items-center justify-center rounded-3xl bg-slate-100 shadow-2xl shadow-black duration-1000 "
                ></motion.div>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {isDesktop && (
        <div className="flex flex-col ">
          <div className="flex h-[400px] justify-around">
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
                  className="relative flex flex-col items-center  justify-center  bg-slate-100  text-center shadow-2xl  shadow-black duration-1000 "
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
                    className=" flex  h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl shadow-black  duration-1000 "
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
                    className="absolute  flex  h-96 w-96 flex-col items-center justify-evenly rounded-full bg-slate-100  shadow-2xl shadow-black duration-1000 "
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
                        Pet Friendly Universe is a multi-platform site with a
                        fully functional e-commerce system. Any user with
                        previous administrator authorization can create a store
                        and upload their product catalogs. The site also
                        provides services such as pet daycare and dog walking.
                        Every sale made on the site must donate 3% of its
                        profits to our non-governmental organizations for pet
                        protection. These organizations have their own route on
                        our site where they can post pets for adoption and have
                        their own administrator dashboards to completely control
                        the Pet Friendly Universe. This includes user banning,
                        post deletions, store creation authorization, and much
                        more. We used a variety of technologies to create this
                        site, including JavaScript, React, Redux, Express,
                        PostgreSQL, Cloudinary, JSON Web Token, third-party
                        authorization (such as Google, Vite, and Tailwind), and
                        several React libraries to optimize the site.{" "}
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="p-6 text-center"
                      >
                        Universo Amigable con las Mascotas es un sitio
                        multiplataforma con un sistema de comercio electrónico
                        completamente funcional. Cualquier usuario con
                        autorización de administrador previa puede crear una
                        tienda y cargar su catálogo de productos. El sitio
                        también ofrece servicios como guardería de mascotas y
                        paseo de perros. Cada venta realizada en el sitio debe
                        donar el 3% de sus ganancias a nuestras organizaciones
                        no gubernamentales de protección de mascotas. Estas
                        organizaciones tienen su propia sección en nuestro sitio
                        donde pueden publicar mascotas para adopción y tienen
                        sus propios paneles de administración para controlar
                        completamente el Universo Amigable con las Mascotas.
                        Esto incluye la prohibición de usuarios, eliminación de
                        publicaciones, autorización de creación de tiendas y
                        mucho más. Utilizamos una variedad de tecnologías para
                        crear este sitio, incluyendo JavaScript, React, Redux,
                        Express, PostgreSQL, Cloudinary, JSON Web Token,
                        autorización de terceros (como Google, Vite y Tailwind)
                        y varias bibliotecas de React para optimizar el sitio.
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              )}
            </motion.div>
            <motion.div
              layout
              data-isopen={!isOpen1}
              initial={{ borderRadius: 50 }}
              className="flex  items-center justify-center  "
            >
              {!isOpen1 && (
                <button onClick={() => setIsOpen1(!isOpen1)}>
                  <motion.div
                    ref={wrapperRef1}
                    layout
                    initial={{ height: 800, width: 800, borderRadius: 50 }}
                    animate={{ height: 200, width: 200, borderRadius: 80 }}
                    transition={{
                      opacity: { ease: "linear" },
                      layout: { duration: 2 },
                    }}
                    className="relative flex  h-48  w-48 flex-col items-center justify-center rounded-3xl bg-slate-100 text-center shadow-2xl  shadow-black duration-1000 "
                  >
                    {" "}
                    <span className="absolute -top-20 text-white shadow-black   text-shadow-md">
                      toca para ver mas del proyecto
                    </span>
                    <motion.img
                      src={pokemon}
                      className="h-20"
                      alt="Pokemon"
                      title="Individual Proyect Pokemon"
                    ></motion.img>
                  </motion.div>
                </button>
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
                    className="  flex  h-96 w-96 flex-col items-center justify-center rounded-full shadow-2xl shadow-black  duration-1000 "
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
                    className="absolute  flex  h-96 w-96 flex-col items-center justify-evenly rounded-full bg-slate-100  shadow-2xl shadow-black duration-1000 "
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
                        This project uses React, Redux, Node, and Sequelize to
                        view and interact with Pokémon data from the pokeapi
                        API. The main page features a search input and list of
                        Pokémon, which can be filtered and sorted by type and
                        attack. Pagination is included to display 12 Pokémon per
                        page. The Pokémon detail page includes stats and
                        additional information, and a controlled form is
                        available for creating new Pokémon. The creation form
                        has been validated to ensure proper data entry. The app
                        also includes a playable Kanto Ultimate Pokémon game.
                        The app is not responsive due to limited development
                        time. Overall, this project serves as a way to practice
                        and apply knowledge of various technologies.
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className=" p-6 text-start text-xs"
                      >
                        Este proyecto utiliza React, Redux, Node y Sequelize
                        para ver e interactuar con los datos de Pokémon de la
                        API pokeapi. La página principal cuenta con una entrada
                        de búsqueda y una lista de Pokémon, que se pueden
                        filtrar y ordenar por tipo y ataque. Se incluye la
                        paginación para mostrar 12 Pokémon por página. La página
                        de detalle de Pokémon incluye estadísticas e información
                        adicional, y hay un formulario controlado disponible
                        para crear nuevos Pokémon. El formulario de creación ha
                        sido validado para garantizar la entrada de datos
                        correcta. La aplicación también incluye un juego de
                        Pokémon Ultimate Kanto jugable. La aplicación no es
                        responsiva debido al tiempo limitado de desarrollo. En
                        general, este proyecto sirve como una manera de
                        practicar y aplicar el conocimiento de varias
                        tecnologías.
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              )}
            </motion.div>
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
                  className="relative flex h-48  w-48  flex-col items-center justify-center rounded-3xl bg-slate-100 text-center shadow-2xl  shadow-black duration-1000 "
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
                  className="child  flex  h-48 w-48 items-center justify-center rounded-3xl bg-slate-100 shadow-2xl shadow-black duration-1000 "
                ></motion.div>
              )}
            </motion.div>
          </div>
        </div>
      )}
      {isLargeDesktop && (
        <div className=" flex flex-col  ">
          <div className="flex h-[600px] justify-around align-top">
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
                    className="relative  flex  cursor-pointer flex-col items-center justify-center bg-slate-100 text-center shadow-2xl  shadow-black duration-1000 "
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
                    className=" flex  h-96 w-96 cursor-pointer flex-col items-center justify-center rounded-full shadow-2xl shadow-black duration-1000 "
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
                    className="absolute  z-50  flex h-96 w-96 cursor-pointer flex-col items-center justify-evenly rounded-full bg-slate-100  shadow-2xl shadow-black duration-1000 "
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
                        Pet Friendly Universe is a multi-platform site with a
                        fully functional e-commerce system. Any user with
                        previous administrator authorization can create a store
                        and upload their product catalogs. The site also
                        provides services such as pet daycare and dog walking.
                        Every sale made on the site must donate 3% of its
                        profits to our non-governmental organizations for pet
                        protection. These organizations have their own route on
                        our site where they can post pets for adoption and have
                        their own administrator dashboards to completely control
                        the Pet Friendly Universe. This includes user banning,
                        post deletions, store creation authorization, and much
                        more. We used a variety of technologies to create this
                        site, including JavaScript, React, Redux, Express,
                        PostgreSQL, Cloudinary, JSON Web Token, third-party
                        authorization (such as Google, Vite, and Tailwind), and
                        several React libraries to optimize the site.{" "}
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="p-6 text-center"
                      >
                        Universo Amigable con las Mascotas es un sitio
                        multiplataforma con un sistema de comercio electrónico
                        completamente funcional. Cualquier usuario con
                        autorización de administrador previa puede crear una
                        tienda y cargar su catálogo de productos. El sitio
                        también ofrece servicios como guardería de mascotas y
                        paseo de perros. Cada venta realizada en el sitio debe
                        donar el 3% de sus ganancias a nuestras organizaciones
                        no gubernamentales de protección de mascotas. Estas
                        organizaciones tienen su propia sección en nuestro sitio
                        donde pueden publicar mascotas para adopción y tienen
                        sus propios paneles de administración para controlar
                        completamente el Universo Amigable con las Mascotas.
                        Esto incluye la prohibición de usuarios, eliminación de
                        publicaciones, autorización de creación de tiendas y
                        mucho más. Utilizamos una variedad de tecnologías para
                        crear este sitio, incluyendo JavaScript, React, Redux,
                        Express, PostgreSQL, Cloudinary, JSON Web Token,
                        autorización de terceros (como Google, Vite y Tailwind)
                        y varias bibliotecas de React para optimizar el sitio.
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              )}
            </motion.div>
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
                    className="relative  flex  h-48 w-48 cursor-pointer flex-col items-center justify-center rounded-3xl bg-slate-100 text-center shadow-2xl  shadow-black duration-1000 "
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
                    className=" flex  h-96 w-96 cursor-pointer flex-col items-center justify-center rounded-full shadow-2xl shadow-black duration-1000 "
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
                    className="absolute  z-50  flex h-96 w-96 cursor-pointer flex-col items-center justify-evenly rounded-full bg-slate-100  shadow-2xl shadow-black duration-1000 "
                  >
                    <img
                      src={pokemon}
                      className="w-24 bg-cover object-cover pt-8 align-middle"
                    />
                    {language === "en" ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className=" p-6 text-start text-xs"
                      >
                        {" "}
                        This project uses React, Redux, Node, and Sequelize to
                        view and interact with Pokémon data from the pokeapi
                        API. The main page features a search input and list of
                        Pokémon, which can be filtered and sorted by type and
                        attack. Pagination is included to display 12 Pokémon per
                        page. The Pokémon detail page includes stats and
                        additional information, and a controlled form is
                        available for creating new Pokémon. The creation form
                        has been validated to ensure proper data entry. The app
                        also includes a playable Kanto Ultimate Pokémon game.
                        The app is not responsive due to limited development
                        time. Overall, this project serves as a way to practice
                        and apply knowledge of various technologies.
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className=" p-6 text-start text-xs"
                      >
                        Este proyecto utiliza React, Redux, Node y Sequelize
                        para ver e interactuar con los datos de Pokémon de la
                        API pokeapi. La página principal cuenta con una entrada
                        de búsqueda y una lista de Pokémon, que se pueden
                        filtrar y ordenar por tipo y ataque. Se incluye la
                        paginación para mostrar 12 Pokémon por página. La página
                        de detalle de Pokémon incluye estadísticas e información
                        adicional, y hay un formulario controlado disponible
                        para crear nuevos Pokémon. El formulario de creación ha
                        sido validado para garantizar la entrada de datos
                        correcta. La aplicación también incluye un juego de
                        Pokémon Ultimate Kanto jugable. La aplicación no es
                        responsiva debido al tiempo limitado de desarrollo. En
                        general, este proyecto sirve como una manera de
                        practicar y aplicar el conocimiento de varias
                        tecnologías.
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              )}
            </motion.div>
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
                    className=" relative flex h-48 w-48 cursor-pointer flex-col items-center justify-center rounded-3xl bg-slate-100 text-center shadow-2xl  shadow-black duration-1000 "
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
                      src={rick}
                      className="h-24"
                      alt="Rick and Morty"
                      title="Proyect Rick and Morty"
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
                    className=" flex  h-96 w-96 cursor-pointer flex-col items-center justify-center rounded-full shadow-2xl shadow-black duration-1000 "
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
                    className="absolute  z-50  flex h-96 w-96 cursor-pointer flex-col items-center justify-evenly rounded-full bg-slate-100  shadow-2xl shadow-black duration-1000 "
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
                        Pet Friendly Universe is a multi-platform site with a
                        fully functional e-commerce system. Any user with
                        previous administrator authorization can create a store
                        and upload their product catalogs. The site also
                        provides services such as pet daycare and dog walking.
                        Every sale made on the site must donate 3% of its
                        profits to our non-governmental organizations for pet
                        protection. These organizations have their own route on
                        our site where they can post pets for adoption and have
                        their own administrator dashboards to completely control
                        the Pet Friendly Universe. This includes user banning,
                        post deletions, store creation authorization, and much
                        more. We used a variety of technologies to create this
                        site, including JavaScript, React, Redux, Express,
                        PostgreSQL, Cloudinary, JSON Web Token, third-party
                        authorization (such as Google, Vite, and Tailwind), and
                        several React libraries to optimize the site.{" "}
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="p-6 text-center"
                      >
                        Universo Amigable con las Mascotas es un sitio
                        multiplataforma con un sistema de comercio electrónico
                        completamente funcional. Cualquier usuario con
                        autorización de administrador previa puede crear una
                        tienda y cargar su catálogo de productos. El sitio
                        también ofrece servicios como guardería de mascotas y
                        paseo de perros. Cada venta realizada en el sitio debe
                        donar el 3% de sus ganancias a nuestras organizaciones
                        no gubernamentales de protección de mascotas. Estas
                        organizaciones tienen su propia sección en nuestro sitio
                        donde pueden publicar mascotas para adopción y tienen
                        sus propios paneles de administración para controlar
                        completamente el Universo Amigable con las Mascotas.
                        Esto incluye la prohibición de usuarios, eliminación de
                        publicaciones, autorización de creación de tiendas y
                        mucho más. Utilizamos una variedad de tecnologías para
                        crear este sitio, incluyendo JavaScript, React, Redux,
                        Express, PostgreSQL, Cloudinary, JSON Web Token,
                        autorización de terceros (como Google, Vite y Tailwind)
                        y varias bibliotecas de React para optimizar el sitio.
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Proyects;
