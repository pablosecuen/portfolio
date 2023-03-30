import React from "react";
import foto from "../assets/img/foto1.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      class="animated-div"
      className="relative mb-96 mt-10 flex w-full  items-center justify-center align-middle"
    >
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: 0, y: 0 }}
        className="relative mt-20 h-96 w-96 rounded-3xl bg-gradient-to-b from-transparent to-slate-900 shadow-2xl shadow-black"
      >
        <img
          src={foto}
          alt="foto"
          className=" absolute left-0 bottom-0 w-72 rounded-3xl"
        />
      </motion.div>

      <div className="mt-20 h-96 w-6/12 rounded-3xl bg-slate-100 shadow-2xl shadow-black">
        <p className="shadow-3xl text-blac2 p-10 text-center shadow-black drop-shadow-2xl">
          {/* ¡Hola de nuevo! Soy Pablo Amico, y me encantaría hablar contigo sobre
          cómo podemos trabajar juntos para hacer realidad tus proyectos. Con
          más de 5 años de experiencia en el campo de la tecnologia, he
          desarrollado habilidades en diferentes áreas de IT, incluyendo diseño
          gráfico, desarrollo web, gestión de proyectos y marketing digital.
          Durante mi carrera, he trabajado con empresas de diversos tamaños y
          sectores, lo que me ha permitido adquirir una amplia visión de los
          negocios y comprender cómo el desarrollo de software puede mejorar el
          funcionamiento de las empresas. Como Fullstack developer, tengo
          experiencia en diferentes lenguajes de programación y frameworks, lo
          que me permite elegir la mejor opción para cada proyecto en
          particular. Mi objetivo es crear soluciones que sean escalables,
          eficientes y fáciles de mantener. Además de mis habilidades técnicas,
          soy un líder natural que sabe cómo motivar y guiar a un equipo para
          alcanzar los objetivos planteados. He liderado equipos de
          desarrolladores y diseñadores, y entiendo la importancia de la
          comunicación clara y efectiva en el éxito de un proyecto. Si buscas a
          alguien que no solo tenga habilidades técnicas, sino también
          habilidades de liderazgo y comprensión del negocio, no dudes en
          contactarme. ¡Estoy emocionado de hablar contigo sobre cómo podemos
          trabajar juntos! */}
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
    </div>
  );
}

export default About;
