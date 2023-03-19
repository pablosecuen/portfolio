import "./NavBar.css";
import logo from "../assets/logopablo.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
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

  const line1 = "Home";
  const line2 = "Proyects";
  const line3 = "Contact";

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

  const letter = {
    hidden: { opacity: 0, y: 500 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <header class="primary-header w-full items-center justify-between ">
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
              className="flex h-12 md:h-24"
            />
          </Link>
        </motion.div>
        {isMobile ? (
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="hamburger nav-icon h-10 cursor-pointer"
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
                className="absolute -right-10 flex flex-col p-10 "
              >
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <a href="#" class="nav-link">
                    <h1 className="load-screen--message pb-4">Home</h1>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <a href="#" class="nav-link">
                    <h1 className="load-screen--message " class="p2">
                      Proyects
                    </h1>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <a href="#" class="nav-link">
                    <h1 className="load-screen--message pt-4">Contact</h1>
                  </a>
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
              <a href="#" class="nav-link">
                <motion.h3
                  className="load-screen--message"
                  variants={sentence}
                  initial="hidden"
                  animate="visible"
                >
                  {line1.split("").map((char, index) => {
                    return (
                      <motion.span key={char + "-" + index} variants={letter}>
                        {char}
                      </motion.span>
                    );
                  })}
                </motion.h3>
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.0 }}
            >
              <a href="#" class="nav-link">
                <motion.h3
                  className="load-screen--message"
                  class="p2"
                  variants={sentence1}
                  initial="hidden"
                  animate="visible"
                >
                  {line2.split("").map((char, index) => {
                    return (
                      <motion.span key={char + "-" + index} variants={letter}>
                        {char}
                      </motion.span>
                    );
                  })}
                </motion.h3>
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0 }}
            >
              <a href="#" class="nav-link">
                <motion.h3
                  className="load-screen--message"
                  variants={sentence2}
                  initial="hidden"
                  animate="visible"
                >
                  {line3.split("").map((char, index) => {
                    return (
                      <motion.span key={char + "-" + index} variants={letter}>
                        {char}
                      </motion.span>
                    );
                  })}
                </motion.h3>
              </a>
            </motion.li>
          </motion.ul>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
