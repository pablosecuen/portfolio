import React from "react";
import foto from "../assets/img/foto1.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function About() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/cv/Cv-español.pdf";
    link.download = "your-cv-file.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCVEnglish = () => {
    const link = document.createElement("a");
    link.href = "/assets/cv/Cv-english.pdf";
    link.download = "your-cv-file.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-screen w-full p-4 lg:pl-10">
      <h2 className="mt-72 font-roboto text-2xl font-bold -tracking-widest text-white shadow-black text-shadow-md lg:mt-96 lg:pl-8 lg:text-9xl">
        Fullstack Developer
      </h2>
      <div className=" mt-0 flex  w-full items-end justify-start   ">
        <p className="top-96 mt-4 w-full text-start text-xs font-bold text-white shadow-black text-shadow-md lg:mt-0 lg:w-3/5 lg:p-10 lg:text-base">
          Hello again! My name is Pablo Amico, and I would love to talk to you
          about how we can work together to bring your projects to life. With
          over 5 years of experience in the technology field, I have developed
          skills in different areas of IT, including graphic design, web
          development, project management, and digital marketing. Throughout my
          career, I have worked with companies of various sizes and industries,
          which has allowed me to gain a broad understanding of business and how
          software development can improve business operations. As a Fullstack
          developer, I have experience in different programming languages and
          frameworks, which allows me to choose the best option for each
          project. My goal is to create scalable, efficient, and
          easy-to-maintain solutions. In addition to my technical skills, I am a
          natural leader who knows how to motivate and guide a team to achieve
          the set goals. I have led teams of developers and designers and
          understand the importance of clear and effective communication in
          project success. If you are looking for someone who not only has
          technical skills but also leadership skills and business
          understanding, do not hesitate to contact me. I am excited to talk to
          you about how we can work together!
        </p>
      </div>
      <div className="mt-6 flex w-full justify-center lg:mt-0 lg:justify-start">
        <button
          className="h-10 w-48 rounded-3xl bg-blue-500 text-white shadow-md shadow-black lg:ml-10"
          onClick={handleDownloadCV}
        >
          Descargar CV
        </button>
        <button
          className="h-10 w-48 rounded-3xl bg-blue-500 text-white shadow-md shadow-black"
          onClick={handleDownloadCVEnglish}
        >
          Download CV
        </button>
      </div>
    </div>
  );
}

export default About;
