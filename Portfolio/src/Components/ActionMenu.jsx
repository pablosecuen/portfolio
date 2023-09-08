import React from "react";
import whatsapp from "../assets/svg/whatsapp.svg";
import github from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";

function ActionMenu(props) {
  const { language } = props;

  const title1 =
    language === "en" ? "Access to my Linkedin" : "Acceso a mi Linkedin";
  const title2 =
    language === "en" ? " Access to my Github" : "Acceso a mi Github";
  const title3 = language === "en" ? "Chatea conmigo" : "Chat with me";

  return (
    <div className="fixed right-0  bottom-72 w-24 ">
      <div className="sticky bottom-0 flex flex-col">
        <a href="https://www.linkedin.com/in/pablo-j-amico/" title={title1}>
          <img
            src={linkedin}
            alt="Linkedin"
            className="h-0 w-0 cursor-pointer md:my-4 md:h-12 md:w-12"
          ></img>
        </a>
        <a href="https://github.com/pablosecuen">
          <img
            src={github}
            alt="github"
            className="h-0 w-0 cursor-pointer md:my-4 md:h-12 md:w-12 "
            title={title2}
          ></img>
        </a>
        <a href="https://wa.me/+5493417206026">
          <img
            alt="whatsapp"
            src={whatsapp}
            className="h-0 w-0 cursor-pointer md:my-4 md:h-12 md:w-12"
            title={title3}
          ></img>
        </a>
      </div>
    </div>
  );
}

export default ActionMenu;
