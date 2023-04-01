import React from "react";
import whatsapp from "../assets/svg/whatsapp.svg";
import github from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";

function ActionMenu() {
  return (
    <div className="absolute right-0 bottom-72 w-24">
      <div className="sticky bottom-0 flex flex-col">
        <a href="https://www.linkedin.com/in/pablo-j-amico/">
          <img
            src={linkedin}
            className="h-0 w-0 cursor-pointer md:my-4 md:h-12 md:w-12"
          ></img>
        </a>
        <a href="https://github.com/pablosecuen">
          <img
            src={github}
            className="h-0 w-0 cursor-pointer md:my-4 md:h-12 md:w-12"
          ></img>
        </a>
        <a href="https://wa.me/+5493417206026">
          <img
            src={whatsapp}
            className="h-0 w-0 cursor-pointer md:my-4 md:h-12 md:w-12"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default ActionMenu;
