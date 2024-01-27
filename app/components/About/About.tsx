/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import foto from "@/public/assets/img/foto.png";
import Image from "next/image";
import Button from "../button/Button";

function About(props: any) {
  const { language } = props;

  return (
    <div className="z-40 h-full w-full  max-w-screen  p-4 xsm:w-3/4 sm:w-full md:h-screen lg:pl-10">
      <h1 className="mt-48 font-roboto text-2xl font-bold -tracking-wider text-white shadow-black text-shadow-md sm:mt-72 sm:-tracking-widest md:text-6xl lg:mt-96 lg:pl-10 xl:text-6xl">
        Fullstack Developer
      </h1>

      <Image
        className="  absolute xsm:right-[32%] hidden md:block  xsm:top-0 xsm:w-32 sm:right-24 sm:top-24 sm:w-48 md:right-40 md:w-64 xl:right-64 xl:w-64 2xl:w-96"
        src={foto}
        alt="foto"
      />
      <article className=" mt-0 flex  items-end justify-start sm:w-3/4    ">
        <h2 className="top-96 mt-4 w-full text-start text-sm  text-white shadow-black text-shadow-md sm:w-3/4  md:w-3/4 lg:mt-0 lg:w-4/5 lg:p-10 lg:text-base">
          {language === "en" ? (
            <span className="opacity-90">
              Hello! I'm Pablo Amico, a seasoned professional with over 5 years in technology. I
              excel in graphic design, web development, project management, and digital marketing.
              Having collaborated with diverse companies, I grasp the impact of software on business
              operations. As a Fullstack developer, I leverage my proficiency in multiple languages
              and frameworks to craft scalable, efficient solutions. With leadership acumen and
              adept communication, I've led successful teams. Reach out if you seek a tech-savvy
              leader for your projects!
            </span>
          ) : (
            <span>
              ¡Hola! Soy Pablo Amico, un profesional con más de 5 años en tecnología. Destaco en
              diseño gráfico, desarrollo web, gestión de proyectos y marketing digital. Al haber
              colaborado con diversas empresas, comprendo el impacto del software en las operaciones
              comerciales. Como desarrollador Fullstack, aprovecho mi habilidad en varios lenguajes
              y marcos de trabajo para crear soluciones escalables y eficientes. Con habilidades de
              liderazgo y comunicación hábil, he dirigido equipos exitosos. ¡Contáctame si buscas un
              líder tecnológico para tus proyectos!
            </span>
          )}
        </h2>
      </article>
      <div className=" md:ml-10 ">
        <Link
          href="https://docs.google.com/document/d/1T5IkZt5vVJ7sLiZyEemC4lyXaPhb3PD_BsE7Q6RXjQ8/edit?usp=sharing"
          target="_blank"
          className="cursor-pointer "
          title="descarga este curriculum en español"
          rel="noreferrer"
        >
          {" "}
          <Button string="Descargar CV" />
        </Link>
        <Link
          href="https://docs.google.com/document/d/14inwpyMOWueKu98pIUm30h6GcNvJeUe0uaLxpN3_6kQ/edit?usp=sharing"
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer"
          title="Download this cv in english"
        >
          <Button string="Download CV" />
        </Link>
      </div>
    </div>
  );
}

export default About;
