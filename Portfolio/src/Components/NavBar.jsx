import "./NavBar.css";
import logo from "../assets/logopablo.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function NavBar() {
  const [language, setLanguage] = useState("en");
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuBackgroundWhite, setIsMenuBackgroundWhite] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isMobile = useMediaQuery({ maxWidth: 700 });

  const isSCrolling = () => {
    const headerEl = document.querySelector(".primary-header");

    let windowPosition = window.scrollY > 200;
    headerEl.classList.toggle("active", windowPosition);
  };
  window.addEventListener("scroll", isSCrolling);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);

      if (currentPosition > 200) {
        setIsMenuBackgroundWhite(true);
      } else {
        setIsMenuBackgroundWhite(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const line1 = language === "en" ? "Home" : "Inicio";
  const line2 = language === "en" ? "Projects" : "Proyectos";
  const line3 = language === "en" ? "Skills" : "Tecnologías";
  const line4 = language === "en" ? "Contact" : "Contacto";

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToProjects = () => {
    window.scrollTo({ top: 900, behavior: "smooth" });
  };

  const scrollToSkills = () => {
    window.scrollTo({ top: 1700, behavior: "smooth" });
  };

  const scrollToContact = () => {
    window.scrollTo({ top: 3500, behavior: "smooth" });
  };

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const sentence1 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.0,
        staggerChildren: 0.2,
      },
    },
  };

  const sentence2 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 3.5,
        staggerChildren: 0.2,
      },
    },
  };

  const sentence3 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 4.5,
        staggerChildren: 0.2,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 500 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const personalInfo = {
    Name: "Pablo Amico",
    Function: "Fullstack Developer",
    LinkedIn: "https://www.linkedin.com/in/pablo-j-amico/",
    Github: "https://github.com/pablosecuen",
    Whatsapp: "+54-9-3417206026",
  };

  for (const [key, value] of Object.entries(personalInfo)) {
    console.log(`${key}: ${value}`);
  }

  return (
    <header class="primary-header h-20 w-full items-center justify-between xsm:h-20 sm:h-24 ">
      <nav class="navbar container flex w-full items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3.5 }}
          className="flex w-full justify-between"
        >
          <Link to="/" className="flex text-xl font-bold text-gray-800">
            <img
              src={logo}
              alt="logo"
              class="logo"
              className="flex h-8 sm:h-12 md:h-24"
            />
          </Link>
        </motion.div>
        {isMobile ? (
          <div className="relative h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="hamburger nav-icon h-8 cursor-pointer"
              onClick={toggleMenu}
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M2,6h20M2,12h20M2,18h20"
              />
            </svg>

            {showMenu && (
              <motion.ul
                class="nav-mobile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className={`duration-800 absolute -right-10 top-[48px] flex flex-col rounded-b-xl border-2 border-white p-10 xsm:top-[48px] sm:top-[64px] ${
                  isMenuBackgroundWhite ? "bg-white" : ""
                }`}
              >
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h1
                    onClick={scrollToHome}
                    className="load-screen--message cursor-pointer pb-4"
                  >
                    {line1}
                  </h1>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <h1
                    onClick={scrollToProjects}
                    className="load-screen--message cursor-pointer"
                  >
                    {line2}
                  </h1>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <h1
                    onClick={scrollToSkills}
                    className="load-screen--message cursor-pointer pt-4"
                  >
                    {line3}
                  </h1>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2.5 }}
                >
                  <h1
                    onClick={scrollToContact}
                    className="load-screen--message cursor-pointer pt-4"
                  >
                    {line4}
                  </h1>
                </motion.li>
              </motion.ul>
            )}
          </div>
        ) : (
          <motion.ul class="nav-list">
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3.0 }}
            >
              <motion.h3
                className="load-screen--message cursor-pointer"
                variants={sentence}
                initial="hidden"
                animate="visible"
                onClick={scrollToHome}
              >
                {line1.split("").map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h3>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.0 }}
            >
              <motion.h3
                className="load-screen--message cursor-pointer"
                class="p2"
                variants={sentence1}
                initial="hidden"
                animate="visible"
                onClick={scrollToProjects}
              >
                {line2.split("").map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h3>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0 }}
            >
              <motion.h3
                className="load-screen--message cursor-pointer"
                variants={sentence2}
                initial="hidden"
                animate="visible"
                onClick={scrollToSkills}
              >
                {line3.split("").map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h3>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0 }}
            >
              <motion.h3
                className="load-screen--message cursor-pointer"
                variants={sentence3}
                initial="hidden"
                animate="visible"
                onClick={scrollToContact}
              >
                {line4.split("").map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h3>
            </motion.li>
          </motion.ul>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
