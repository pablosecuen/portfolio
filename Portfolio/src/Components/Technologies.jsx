import html from "../assets/logoTecnologias/html.png";
import css from "../assets/logoTecnologias/css.svg";
import javascript from "../assets/logoTecnologias/js.svg";
import react from "../assets/logoTecnologias/react.svg";
import redux from "../assets/logoTecnologias/redux.svg";
import sass from "../assets/logoTecnologias/sass.svg";
import boostrap from "../assets/logoTecnologias/boostrap.svg";
import tailwind from "../assets/logoTecnologias/tailwind.svg";
import node from "../assets/logoTecnologias/node.svg";
import express from "../assets/logoTecnologias/express.svg";
import insomnia from "../assets/logoTecnologias/insomnia.svg";
import webpack from "../assets/logoTecnologias/webpack.svg";
import illustrator from "../assets/logoTecnologias/illustrator.png";
import photoshop from "../assets/logoTecnologias/photoshop2.svg";
import git from "../assets/logoTecnologias/git.svg";
import github from "../assets/logoTecnologias/github.svg";
import vite from "../assets/logoTecnologias/vitejs.svg";
import anime from "animejs/lib/anime.es.js";
import "./Technologies.module.css";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Technologies() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const [selectedTech, setSelectedTech] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const arrayTech = [
    {
      name: "html",
      logo: html,
      description:
        "HTML (HyperText Markup Language) is a standar markup language used for creating web pages and other web-basec and other web-based documents. It provides the structure and content of web pages by defining various elements such as headings, paragraphs, links, images,                 tables, and more. HTML works in conjunction with other technologies such as CSS and JavaScript to create rich, dynamic web pages. HTML documents are composed of tags and attributes that are used to define the various elements of a page. HTML documents can be created and edited using a text editor or specialized HTML editor software.",
      title: "Html",
      shadowColor: "red",
      url: "https://html.com/",
    },
    {
      name: "css",
      logo: css,
      description:
        " CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation and layout of web pages written in HTML or XML. It separates the presentation of a web page from its content, allowing designers to create visually appealing and consistent designs across multiple web pages. CSS provides awide range of styling options such as fonts, colors, backgrounds, margins, padding, and more. It allows designers to create complex layouts and responsive designs that adapt to different screen sizes and devices. CSS works by targeting HTML elements with selectors and applying specific styles to them using declarations. ",
      title: "Css",
      shadowColor: "blue",
      url: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "javascript",
      logo: javascript,
      description:
        "    JavaScript is a programming language used for creating interactive and dynamic web pages. It is a client-side scripting language, meaning it runs on the user's web browser rather than the server. JavaScript can be used to add interactivity to web pages, validate form data, create animations and effects, manipulate the Document Object Model (DOM), and much more. It can also be used in conjunction with HTML and CSS to create dynamic web applications. JavaScript is a versatile language that can be used both on the front-end and back-end of web development.",
      title: "Javascript",
      shadowColor: "yellow",
      url: "https://www.javascript.com/",
    },
    {
      name: "react",
      logo: react,
      description:
        "    React is an open-source JavaScript library used for building user interfaces for web and mobile applications. Developed by Facebook, React allows developers to create reusable UI components that can be used to build complex and interactive web    applications. React uses a declarative programming approach, allowing developers to describe how a component should look and behave, and React takes are of rendering it in the browser. This makes it easier to manage and maintain large codebases. React also uses a virtual DOM (Document Object Model), which allows it to efficiently update only the parts of the UI that have changed, leading to improved performance.",
      title: "React",
      shadowColor: "deepskyblue",
      url: "https://es.reactjs.org/",
    },
    {
      name: "redux",
      logo: redux,
      description:
        "Redux is an open-source JavaScript library used for managing application state in web and mobile applications. It is often used in conjunction with React to create scalable and maintainable applications. Redux provides a centralized store for application state, which can be accessed and updated by components throughout the application. Redux uses a predictable state container, which means that changes to the state can be easily tracked and traced. Redux also provides middleware, which allows developers to add additional functionality to the state management process, such as logging, API requests, and more.",
      title: "Redux",
      shadowColor: "indigo",
      url: "https://redux.js.org/",
    },

    {
      name: "sass",
      logo: sass,
      description:
        " Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language used to extend and enhance the capabilities of CSS. It provides additional features such as variables, nesting, mixins, inheritance, and more, which make it easier to write and manage complex CSS stylesheets. Sass files are compiled into standard CSS files, which can be used in web pages like regular CSS files. Sass can be used in conjunction with other front-end tools such as Bootstrap and React to create scalable and maintainable applications. Sass is highly customizable, allowing developers to define their own variables and functions, and reuse them throughout the stylesheet.",
      title: "Sass",
      shadowColor: "hotpink",
      url: "https://sass-lang.com/",
    },
    {
      name: "boostrap",
      logo: boostrap,
      description:
        "    Bootstrap is an open-source front-end framework used for creating responsive and mobile-first web pages and applications. It provides a collection of pre-built CSS and JavaScript components, such as navigation bars, forms, buttons, modals, and more, that can be easily integrated into web pages. Bootstrap also includes a grid system, which helps to create complex layouts that adapt to different screen sizes and devices. This makes it easier to create visually appealing and consistent designs across different web pages and devices.",
      title: "Boostrap",
      shadowColor: "indigo",
      url: "https://getbootstrap.com/",
    },
    {
      name: "tailwind",
      logo: tailwind,
      description:
        "Tailwind CSS is a utility-first CSS framework used for building modern and responsive web interfaces. It provides a set of pre-built CSS classes that can be used to style HTML elements, such as text, spacing, colors, borders, and more. Tailwind CSS allows developers to easily customize the look and feel of web interfaces without having to write custom CSS code. It also provides responsive design features, making it easy to create layouts that adapt to different screen sizes and devices. Tailwind CSS uses a modular and composable approach, allowing developers to build custom designs by combining different",
      title: "Tailwind Css",
      shadowColor: "lightseagreen",
      url: "https://tailwindcss.com//",
    },
    {
      name: "vite",
      logo: vite,
      description:
        "Vitejs is a lightweight and efficient development tool that aims to improve the developer experience for modern web development. It provides a fast development server that uses native ES modules, allowing for quick and incremental building of projects. It also supports hot module replacement, making it easy to see changes in real-time without having to manually refresh the page. In addition to its development server, Vitejs also offers a production-ready build process that can generate optimized and minified code for deployment. It supports a variety of languages and frameworks, including JavaScript, TypeScript, Vue.js, React, and more.",
      title: "Vite",
      shadowColor: "magenta",
      url: "https://vitejs.dev/",
    },

    {
      name: "node",
      logo: node,
      description:
        "Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run javaScript code outside of a web browser. It provides a set of built-in modules that can be used to create server-side web applications, command-line tools, and more. Node.js is built on the V8 JavaScript engine, which is the same engine used by Google Chrome, making it fast and efficient. Node.js uses an event-driven, non-blocking I/O model, which allows it to handle a large number of concurrent requests without blocking the execution of other code. This makes it ideal for building scalable and high-performance web applications.",
      title: "Node Js",
      shadowColor: "limegreen",
      url: "https://nodejs.org/en",
    },
    {
      name: "express",
      logo: express,
      description:
        " Express is a minimalist and flexible web application framework for Node.js. It provides a set of features for building web applications, such as routing, middleware, templating engines, and more. Express is designed to be lightweight and easy to use, allowing developers to quickly build web applications and APIs. It follows the model-view-controller (MVC) pattern, allowing for a separation of concerns between the data model, presentation, and control logic. Express can be used in conjunction with other tools and frameworks, such as React and MongoDB, to create scalable and robust web applications.",
      title: "express",
      shadowColor: "black",
      url: "https://expressjs.com/",
    },
    {
      name: "insomnia",
      logo: insomnia,
      description:
        "Insomnia is an open-source cross-platform REST API client used for testing and debugging HTTP requests and responses. It provides a simple and intuitive interface for making HTTP requests, allowing developers to quickly test their APIs and    identify issues. Insomnia supports various authentication  methods, request types, and response formats, making it easy to work with a wide range of APIs. It also supports environment variables, allowing developers to easily switch between different environments, such as development, staging, and    production. Insomnia includes a powerful set of features such as request chaining, response validation, code generation, and more.",
      title: "Inomnia",
      shadowColor: "indigo",
      url: "https://insomnia.rest/",
    },
    {
      name: "webpack",
      logo: webpack,
      description:
        "Webpack is an open-source module bundler used for building web applications. It allows developers to bundle JavaScript files, CSS files, images, and other assets into a single optimized file, improving the performance of web applications. Webpack    uses a configuration file to define entry points, loaders, plugins, and output configurations. Loaders are used to transform files, such as transpiling ES6 code into ES5 code, while plugins are used to perform additional tasks, such as optimizing assets and code splitting. Webpack also supports a hot module replacement feature, which allows developers to see changes in the browser without refreshing the page.",
      title: "Webpack",
      shadowColor: "blue",
      url: "https://webpack.js.org/",
    },
    {
      name: "illustrator",
      logo: illustrator,
      description:
        "Adobe Illustrator is a vector graphics editor used for creating and editing vector graphics. It provides a set of tools for drawing, manipulating, and transforming shapes, paths, and other vector objects. Illustrator allows designers to create logos, icons, illustrations, and other graphic designs that can be used in print or digital media. It supports a wide range of file formats, including SVG, EPS, AI, PDF, and more, making it easy to export and share designs. Illustrator also includes a powerful set of features, such as artboards, layers, gradients, patterns, and more, allowing designers to create complex and detailed designs. It has a large and active community, with many resources available for learning and development.",
      title: "Illustrator",
      shadowColor: "orangered",
      url: "https://www.adobe.com/products/illustrator.html",
    },
    {
      name: "photoshop",
      logo: photoshop,
      description:
        "Adobe Photoshop is a raster graphics editor used for creating and editing digital images. It provides a set of tools for manipulating and editing images, including retouching, cropping, resizing, color correction, and more. Photoshop allows designers to create and edit images that can be used in print or digital media. It supports a wide range of file formats, including JPEG, PNG, PSD, and more, making it easy to export and share designs. Photoshop also includes a powerful set of features, such as layers, filters, masks, and more, allowing designers to create complex and detailed designs. It also supports 3D graphics and animation, making it a versatile tool for digital media creation.",
      title: "Photoshop",
      shadowColor: "blue",
      url: "https://www.adobe.com/products/photoshop.html",
    },
    {
      name: "git",
      logo: git,
      description:
        "Git is a distributed version control system that allows developers to track changes in their codebase and collaborate with other team members. It uses a series of snapshots to keep track of changes and allows developers to work on separate branches before merging their code back into the main branch. Git also enables users to revert to previous versions of their code and track who made each change.",
      tittle: "Git",
      shadowColor: "red",
      url: "https://git-scm.com/",
    },
    {
      name: "github",
      logo: github,
      description:
        "GitHub, is a web-based platform that provides a centralized location for hosting and collaborating on Git repositories. It offers features such as pull requests, code reviews, and issue tracking to facilitate collaboration among developers. Additionally, GitHub provides a wide range of tools and integrations that can enhance a developer's workflow, including continuous integration and deployment. As one of the largest communities for open-source projects, GitHub also allows developers to showcase their work and connect with others in their field.",
      title: "Github",
      shadowColor: "indigo",
      url: "https://github.com/",
    },
  ];

  // funcion que absorbe las propiedades del array de technologia y aplica efectos de sombra a cada elemento de manera personalizada
  function animateCSS(name, filterValues, options) {
    const target = "." + name.toLowerCase(); // creamos un selector para targetear basado en el nombre
    const shadowColor = filterValues[0].shadowColor || "blue"; // absorbemos el color de la propiedad shadowColor y si no tiene uzamos la azul por defecto
    const filter = filterValues.map((value) => {
      return {
        value: value.value.replace("blue", shadowColor),
        duration: value.duration,
      };
    }); // remplazamos el filtro base color "blue" en el filter value
    anime({
      targets: target,
      filter: filter,
      easing: options.easing || "linear",
      direction: options.direction || "alternate",
      loop: options.loop || true,
    });
  }

  arrayTech.forEach((element) => {
    animateCSS(
      element.name,
      [
        {
          value: `drop-shadow(0px 0px 4px ${element.shadowColor})`,
          duration: 500,
          shadowColor: element.shadowColor,
        },
        {
          value: `drop-shadow(0px 0px 6px ${element.shadowColor})`,
          duration: 500,
          shadowColor: element.shadowColor,
        },

        {
          value: `drop-shadow(0px 0px 10px ${element.shadowColor})`,
          duration: 800,
          shadowColor: element.shadowColor,
        },
        {
          value: `drop-shadow(0px 0px 6px ${element.shadowColor})`,
          duration: 500,
          shadowColor: element.shadowColor,
        },
        {
          value: `drop-shadow(0px 0px 4px ${element.shadowColor})`,
          duration: 500,
          shadowColor: element.shadowColor,
        },
      ],
      { easing: "easeInOutQuad", direction: "normal", loop: true }
    );
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleExitComplete = () => {
    anime({
      targets: ".box",
      scale: [1, 0],
      duration: 1000,
      easing: "easeOutQuad",
    });
    setSelectedTech(null);
  };

  const handleOnClick = (i) => {
    setExpandedIndex(i === expandedIndex ? null : i);
  };

  return (
    <div className="absolute top-[850px] w-full">
      <div className="flex w-full justify-center">
        {!isMobile ? (
          <div className="mx-40 flex w-full flex-wrap  justify-around gap-y-28 gap-x-10 font-roboto sm:justify-center md:justify-center lg:justify-around">
            {arrayTech.map((t, i) => {
              return (
                <motion.div
                  initial={{ height: 150, width: 150 }}
                  animate={{
                    height: expandedIndex === i ? 400 : 150,
                    width: expandedIndex === i ? 400 : 250,
                  }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleOnClick(i)}
                  className=" relative"
                  key={i}
                >
                  {expandedIndex === i && (
                    <motion.article
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute z-50 h-96 w-96 rounded-xl p-6 pt-20 text-sm text-white"
                    >
                      {t.description}
                    </motion.article>
                  )}
                  <motion.img
                    src={t.logo}
                    alt={t.name}
                    title={t.title}
                    class={`${t.name} h-24 hover:cursor-pointer`}
                    className={`${t.name} absolute -top-12 z-50 h-24 text-white hover:cursor-pointer`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />

                  {/* este div tiene el texto */}
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-box  h-96 w-96 rounded-xl p-4 pt-20 text-white"
                    ></motion.div>
                  )}
                  {/* abajo esta el fondo gradiente con el efecto */}
                  {expandedIndex === i && (
                    <motion.div
                      variants={{
                        visible: {
                          opacity: 1,
                          borderRadius: ["0%", "20%", "50%", "50%", "20%"],
                        },
                      }}
                      initial="hidden"
                      whileHover="visible"
                      transition={{
                        duration: 3,
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: 0,
                      }}
                      className=" box absolute top-0 left-0 h-96 w-96 rounded-xl  bg-gradient-to-b from-transparent to-slate-900 p-4 pt-20"
                    ></motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className=" flex h-full w-full flex-col flex-wrap items-center justify-between  gap-10   font-roboto">
            {arrayTech.map((t, i) => {
              return (
                <div
                  className="- flex w-full  items-center justify-between bg-white p-6  tracking-widest sm:w-3/4"
                  key={i}
                >
                  <a href={t.url}>
                    <img
                      src={t.logo}
                      alt={t.name}
                      title={t.description}
                      class={`${t.name} h-24 hover:cursor-pointer`}
                      className={`${t.name} -top-12  h-24 max-w-[150px] text-white hover:cursor-pointer`}
                    />
                  </a>
                  <h4
                    title={t.description}
                    className=" inline-block text-xl leading-4 tracking-widest"
                  >
                    {t.name.toLocaleUpperCase()}
                  </h4>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Technologies;
