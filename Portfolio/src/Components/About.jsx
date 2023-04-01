import React from "react";

function About(props) {
  const { language } = props;

  return (
    <div className="lg h-screen w-full p-4 xsm:w-3/4 sm:w-full lg:pl-10">
      <h1 className="mt-48 font-roboto text-2xl font-bold -tracking-wider text-white shadow-black text-shadow-md sm:mt-72 sm:-tracking-widest md:text-6xl lg:mt-96 lg:pl-8 xl:text-9xl">
        Fullstack Developer
      </h1>
      <div className=" mt-0 flex  w-full items-end justify-start    ">
        <head className="top-96 mt-4 w-full text-start text-xs font-medium text-white shadow-black text-shadow-md sm:w-3/4 sm:font-bold md:w-3/4 lg:mt-0 lg:w-4/5 lg:p-10 lg:text-base">
          {language === "en" ? (
            <span>
              Hello again! My name is Pablo Amico, and I would love to talk to
              you about how we can work together to bring your projects to life.
              With over 5 years of experience in the technology field, I have
              developed skills in different areas of IT, including graphic
              design, web development, project management, and digital
              marketing. Throughout my career, I have worked with companies of
              various sizes and industries, which has allowed me to gain a broad
              understanding of business and how software development can improve
              business operations. As a Fullstack developer, I have experience
              in different programming languages and frameworks, which allows me
              to choose the best option for each project. My goal is to create
              scalable, efficient, and easy-to-maintain solutions. In addition
              to my technical skills, I am a natural leader who knows how to
              motivate and guide a team to achieve the set goals. I have led
              teams of developers and designers and understand the importance of
              clear and effective communication in project success. If you are
              looking for someone who not only has technical skills but also
              leadership skills and business understanding, do not hesitate to
              contact me. I am excited to talk to you about how we can work
              together!
            </span>
          ) : (
            <span>
              Hola de nuevo! Mi nombre es Pablo Amico y me encantaría hablar
              contigo sobre cómo podemos trabajar juntos para dar vida a tus
              proyectos. Con más de 5 años de experiencia en el campo de la
              tecnología, he desarrollado habilidades en diferentes áreas de TI,
              incluyendo diseño gráfico, desarrollo web, gestión de proyectos y
              marketing digital. A lo largo de mi carrera, he trabajado con
              empresas de diferentes tamaños e industrias, lo que me ha
              permitido obtener una comprensión amplia del negocio y cómo el
              desarrollo de software puede mejorar las operaciones comerciales.
              Como desarrollador Fullstack, tengo experiencia en diferentes
              lenguajes de programación y marcos de trabajo, lo que me permite
              elegir la mejor opción para cada proyecto. Mi objetivo es crear
              soluciones escalables, eficientes y fáciles de mantener. Además de
              mis habilidades técnicas, soy un líder natural que sabe cómo
              motivar y guiar a un equipo para alcanzar los objetivos
              establecidos. He dirigido equipos de desarrolladores y diseñadores
              y entiendo la importancia de la comunicación clara y efectiva en
              el éxito del proyecto. Si estás buscando a alguien que no sólo
              tenga habilidades técnicas sino también habilidades de liderazgo y
              comprensión del negocio, no dudes en contactarme. ¡Estoy
              emocionado de hablar contigo sobre cómo podemos trabajar juntos!
            </span>
          )}
        </head>
      </div>
      <div className="mt-6 flex w-full justify-center lg:mt-0 lg:justify-start">
        <a
          href="https://drive.google.com/file/d/1KT184mE7OYi1e756s7SBlIF2CZzq62qd/view?usp=share_link"
          target="_blank"
        >
          {" "}
          <button className="text-xsm h-10 w-32 rounded-3xl bg-blue-500 text-white shadow-md shadow-black sm:w-48 sm:text-base lg:ml-10">
            Descargar CV
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/1GELX-LyHAFCPho079-6FN-Fi_KfACC-G/view?usp=share_link"
          target="_blank"
        >
          <button className="text-xsm h-10 w-32 rounded-3xl bg-blue-500 text-white shadow-md shadow-black sm:w-48 sm:text-base lg:ml-10">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;
