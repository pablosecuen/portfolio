import React, { useState } from "react";
import english from "../assets/svg/english.svg";
import español from "../assets/svg/español.png";

function LanguageToggle(props) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
    props.onToggle();
  };

  return (
    <div className="absolute top-32 right-20">
      <div className="relative mr-2 inline-block w-10 select-none align-middle">
        <img
          src={language === "en" ? español : english}
          alt="language"
          onClick={toggleLanguage}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default LanguageToggle;
