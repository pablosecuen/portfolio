import React from "react";
import logo from "../assets/logopablo.png";

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
    <div className="flex-col">
      <div className="flex h-48 w-full bg-slate-100">
        <div className="flex w-1/3 flex-col items-center justify-center align-middle">
          <img src={logo} className="h-1/2" />
        </div>
        <div className="flex w-1/3 flex-col items-center justify-center border-l-2 border-black  ">
          {language === "en" ? (
            <p onClick={scrollToHome} className="cursor-pointer py-2">
              Home
            </p>
          ) : (
            <p onClick={scrollToHome} className="cursor-pointer py-2">
              Inicio
            </p>
          )}
          {language === "en" ? (
            <p onClick={scrollToHome} className="cursor-pointer py-2">
              About
            </p>
          ) : (
            <p onClick={scrollToHome} className="cursor-pointer py-2">
              Acerca de mí
            </p>
          )}
          {language === "en" ? (
            <p onClick={scrollToProjects} className="cursor-pointer py-2">
              Proyects
            </p>
          ) : (
            <p onClick={scrollToProjects} className="cursor-pointer py-2">
              Proyectos
            </p>
          )}
          {language === "en" ? (
            <p onClick={scrollToSkills} className="cursor-pointer py-2">
              Skills
            </p>
          ) : (
            <p onClick={scrollToSkills} className="cursor-pointer py-2">
              Tecnologías
            </p>
          )}
        </div>
        <div className="flex w-1/3  flex-col items-center justify-center border-l-2   border-black">
          {language === "en" ? (
            <p className="py-2">Get to know me</p>
          ) : (
            <p className="py-2">Conóceme</p>
          )}
          <a href="https://www.linkedin.com/in/pablo-j-amico/">
            <p className="py-2">Linkedin</p>
          </a>
          <a href="https://github.com/pablosecuen">
            {" "}
            <p className="py-2">Github</p>
          </a>
          <a href="https://wa.me/+5493417206026">
            {" "}
            <p className="py-2">Whatsapp</p>
          </a>
        </div>
      </div>
      <hr className="w-10/12 border-2 border-black"></hr>
      {language === "en" ? (
        <p className="flex w-full justify-center bg-white">
          ®2023 Pablo Amico. All Rights Reserved
        </p>
      ) : (
        <p className="flex w-full justify-center bg-white">
          ®2023 Pablo Amico. Todos los derechos reservados
        </p>
      )}
    </div>
  );
}

export default Footer;
