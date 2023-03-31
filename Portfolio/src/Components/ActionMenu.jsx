import React from "react";
import whatsapp from "../assets/svg/whatsapp.svg";
import github from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";

function ActionMenu() {
  return (
    <div className="md:absolute md:top-96 md:flex md:h-1/2 md:w-full md:justify-end md:pr-4">
      <div className="flex flex-col">
        <a href="https://www.linkedin.com/in/pablo-j-amico/"></a>
        <img src={linkedin} className="h-0 w-0 md:my-4 md:h-12 md:w-12"></img>
        <a href="https://github.com/pablosecuen"></a>
        <img src={github} className="h-0 w-0 md:my-4 md:h-12 md:w-12"></img>
        <a href="https://wa.me/+5493417206026"></a>
        <img src={whatsapp} className="h-0 w-0 md:my-4 md:h-12 md:w-12"></img>
      </div>
    </div>
  );
}

export default ActionMenu;
