import React from "react";
import logo from "../assets/logoblanco.png";

function Footer(props) {
  const { language } = props;

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

  return (
    <div className="flex-col border-2 border-white">
      <div className="flex h-48 w-full ">
        <div className="flex w-1/3 flex-col items-center justify-center align-middle">
          <img src={logo} className="h-1/2" />
        </div>
        <div className="flex w-1/3 flex-col items-center justify-center border-l-2 border-white  ">
          {language === "en" ? (
            <p
              onClick={scrollToHome}
              className="cursor-pointer py-2 text-white"
            >
              Home
            </p>
          ) : (
            <p
              onClick={scrollToHome}
              className="cursor-pointer py-2 text-white"
            >
              Inicio
            </p>
          )}
          {language === "en" ? (
            <p
              onClick={scrollToHome}
              className="cursor-pointer py-2 text-white"
            >
              About
            </p>
          ) : (
            <p
              onClick={scrollToHome}
              className="cursor-pointer py-2 text-white"
            >
              Acerca de mí
            </p>
          )}
          {language === "en" ? (
            <p
              onClick={scrollToProjects}
              className="cursor-pointer py-2 text-white"
            >
              Proyects
            </p>
          ) : (
            <p
              onClick={scrollToProjects}
              className="cursor-pointer py-2 text-white"
            >
              Proyectos
            </p>
          )}
          {language === "en" ? (
            <p
              onClick={scrollToSkills}
              className="cursor-pointer py-2 text-white"
            >
              Skills
            </p>
          ) : (
            <p
              onClick={scrollToSkills}
              className="cursor-pointer py-2 text-white"
            >
              Tecnologías
            </p>
          )}
        </div>
        <div className="flex w-1/3  flex-col items-center justify-center border-l-2   border-white">
          {language === "en" ? (
            <p className="py-2 text-white">Get to know me</p>
          ) : (
            <p className="py-2 text-white">Conóceme</p>
          )}
          <a href="https://www.linkedin.com/in/pablo-j-amico/">
            <p className="py-2 text-white">Linkedin</p>
          </a>
          <a href="https://github.com/pablosecuen">
            {" "}
            <p className="py-2 text-white">Github</p>
          </a>
          <a href="https://wa.me/+5493417206026">
            {" "}
            <p className="py-2 text-white">Whatsapp</p>
          </a>
        </div>
      </div>
      <hr className="w-full border-2 border-white align-middle"></hr>
      {language === "en" ? (
        <p className="flex w-full justify-center bg-black text-white">
          ®2023 Pablo Amico. All Rights Reserved
        </p>
      ) : (
        <p className="flex w-full justify-center bg-black text-white">
          ®2023 Pablo Amico. Todos los derechos reservados
        </p>
      )}
    </div>
  );
}

export default Footer;
