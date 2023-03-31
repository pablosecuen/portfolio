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
import vite from "../assets/logoTecnologias/vite.svg";
import anime from "animejs/lib/anime.es.js";
import "./Technologies.module.css";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useState } from "react";

function Technologies(props) {
  const { language } = props;
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
      descripcion:
        "HTML (Lenguaje de Marcado de Hipertexto) es un lenguaje de marcado estándar utilizado para crear páginas web y otros documentos basados en la web. Proporciona la estructura y el contenido de las páginas web mediante la definición de varios elementos como encabezados, párrafos, enlaces, imágenes, tablas y más. HTML trabaja en conjunto con otras tecnologías como CSS y JavaScript para crear páginas web ricas y dinámicas. Los documentos HTML están compuestos por etiquetas y atributos que se utilizan para definir los diversos elementos de una página. Los documentos HTML se pueden crear y editar utilizando un editor de texto o un software especializado de edición de HTML.",
      title: "Html",
      shadowColor: "red",
      url: "https://html.com/",
    },
    {
      name: "css",
      logo: css,
      description:
        " CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation and layout of web pages written in HTML or XML. It separates the presentation of a web page from its content, allowing designers to create visually appealing and consistent designs across multiple web pages. CSS provides awide range of styling options such as fonts, colors, backgrounds, margins, padding, and more. It allows designers to create complex layouts and responsive designs that adapt to different screen sizes and devices. CSS works by targeting HTML elements with selectors and applying specific styles to them using declarations. ",
      descripcion:
        "CSS (Hojas de Estilo en Cascada) es un lenguaje de hojas de estilo utilizado para describir la presentación y el diseño de páginas web escritas en HTML o XML. Separa la presentación de una página web de su contenido, permitiendo a los diseñadores crear diseños visualmente atractivos y consistentes en múltiples páginas web. CSS proporciona una amplia gama de opciones de estilo como fuentes, colores, fondos, márgenes, rellenos y más. Permite a los diseñadores crear diseños complejos y diseños responsivos que se adaptan a diferentes tamaños de pantalla y dispositivos. CSS funciona apuntando a los elementos HTML con selectores y aplicando estilos específicos a ellos mediante declaraciones.",
      title: "Css",
      shadowColor: "blue",
      url: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "javascript",
      logo: javascript,
      description:
        "    JavaScript is a programming language used for creating interactive and dynamic web pages. It is a client-side scripting language, meaning it runs on the user's web browser rather than the server. JavaScript can be used to add interactivity to web pages, validate form data, create animations and effects, manipulate the Document Object Model (DOM), and much more. It can also be used in conjunction with HTML and CSS to create dynamic web applications. JavaScript is a versatile language that can be used both on the front-end and back-end of web development.",
      descripcion:
        "JavaScript es un lenguaje de programación utilizado para crear páginas web interactivas y dinámicas. Es un lenguaje de scripting del lado del cliente, lo que significa que se ejecuta en el navegador web del usuario en lugar del servidor. JavaScript se puede utilizar para agregar interactividad a las páginas web, validar los datos de los formularios, crear animaciones y efectos, manipular el Modelo de Objetos del Documento (DOM) y mucho más. También se puede utilizar en conjunto con HTML y CSS para crear aplicaciones web dinámicas. JavaScript es un lenguaje versátil que se puede utilizar tanto en el front-end como en el back-end del desarrollo web.",
      title: "Javascript",
      shadowColor: "yellow",
      url: "https://www.javascript.com/",
    },
    {
      name: "react",
      logo: react,
      description:
        "    React is an open-source JavaScript library used for building user interfaces for web and mobile applications. Developed by Facebook, React allows developers to create reusable UI components that can be used to build complex and interactive web    applications. React uses a declarative programming approach, allowing developers to describe how a component should look and behave, and React takes are of rendering it in the browser. This makes it easier to manage and maintain large codebases. React also uses a virtual DOM (Document Object Model), which allows it to efficiently update only the parts of the UI that have changed, leading to improved performance.",
      descripcion:
        "React es una biblioteca de JavaScript de código abierto utilizada para construir interfaces de usuario para aplicaciones web y móviles. Desarrollada por Facebook, React permite a los desarrolladores crear componentes de UI reutilizables que se pueden utilizar para construir aplicaciones web complejas e interactivas. React utiliza un enfoque de programación declarativa, lo que permite a los desarrolladores describir cómo debe verse y comportarse un componente, y React se encarga de renderizarlo en el navegador. Esto facilita la gestión y el mantenimiento de grandes bases de código. React también utiliza un DOM virtual (Modelo de Objetos del Documento), lo que le permite actualizar eficientemente solo las partes de la IU que han cambiado, lo que lleva a una mejora en el rendimiento.",
      title: "React",
      shadowColor: "deepskyblue",
      url: "https://es.reactjs.org/",
    },
    {
      name: "redux",
      logo: redux,
      description:
        "Redux is an open-source JavaScript library used for managing application state in web and mobile applications. It is often used in conjunction with React to create scalable and maintainable applications. Redux provides a centralized store for application state, which can be accessed and updated by components throughout the application. Redux uses a predictable state container, which means that changes to the state can be easily tracked and traced. Redux also provides middleware, which allows developers to add additional functionality to the state management process, such as logging, API requests, and more.",
      descripcion:
        "Redux es una biblioteca de JavaScript de código abierto utilizada para gestionar el estado de la aplicación en aplicaciones web y móviles. A menudo se utiliza en conjunto con React para crear aplicaciones escalables y fáciles de mantener. Redux proporciona una tienda centralizada para el estado de la aplicación, al que pueden acceder y actualizar los componentes en toda la aplicación. Redux utiliza un contenedor de estado predecible, lo que significa que los cambios en el estado se pueden rastrear y seguir fácilmente. Redux también proporciona middleware, que permite a los desarrolladores agregar funcionalidades adicionales al proceso de gestión del estado, como el registro, solicitudes a API y más.",
      title: "Redux",
      shadowColor: "indigo",
      url: "https://redux.js.org/",
    },

    {
      name: "sass",
      logo: sass,
      description:
        " Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language used to extend and enhance the capabilities of CSS. It provides additional features such as variables, nesting, mixins, inheritance, and more, which make it easier to write and manage complex CSS stylesheets. Sass files are compiled into standard CSS files, which can be used in web pages like regular CSS files. Sass can be used in conjunction with other front-end tools such as Bootstrap and React to create scalable and maintainable applications. Sass is highly customizable, allowing developers to define their own variables and functions, and reuse them throughout the stylesheet.",
      descripcion:
        "Sass (Syntactically Awesome Style Sheets) es un lenguaje de secuencias de comandos preprocesador utilizado para extender y mejorar las capacidades de CSS. Proporciona características adicionales como variables, anidación, mixins, herencia y más, lo que facilita la escritura y gestión de hojas de estilo CSS complejas. Los archivos Sass se compilan en archivos CSS estándar, que se pueden utilizar en páginas web como archivos CSS normales. Sass se puede utilizar en conjunto con otras herramientas de front-end como Bootstrap y React para crear aplicaciones escalables y mantenibles. Sass es altamente personalizable, lo que permite a los desarrolladores definir sus propias variables y funciones y reutilizarlas en toda la hoja de estilos.",
      title: "Sass",
      shadowColor: "hotpink",
      url: "https://sass-lang.com/",
    },
    {
      name: "boostrap",
      logo: boostrap,
      description:
        "    Bootstrap is an open-source front-end framework used for creating responsive and mobile-first web pages and applications. It provides a collection of pre-built CSS and JavaScript components, such as navigation bars, forms, buttons, modals, and more, that can be easily integrated into web pages. Bootstrap also includes a grid system, which helps to create complex layouts that adapt to different screen sizes and devices. This makes it easier to create visually appealing and consistent designs across different web pages and devices.",
      descripcion:
        "Bootstrap es un marco de front-end de código abierto utilizado para crear páginas web y aplicaciones responsivas y de primera calidad para dispositivos móviles. Proporciona una colección de componentes preconstruidos de CSS y JavaScript, como barras de navegación, formularios, botones, modales y más, que se pueden integrar fácilmente en páginas web. Bootstrap también incluye un sistema de cuadrícula que ayuda a crear diseños complejos que se adaptan a diferentes tamaños de pantalla y dispositivos. Esto facilita la creación de diseños visualmente atractivos y coherentes en diferentes páginas web y dispositivos.",
      title: "Boostrap",
      shadowColor: "indigo",
      url: "https://getbootstrap.com/",
    },
    {
      name: "tailwind",
      logo: tailwind,
      description:
        "Tailwind CSS is a utility-first CSS framework used for building modern and responsive web interfaces. It provides a set of pre-built CSS classes that can be used to style HTML elements, such as text, spacing, colors, borders, and more. Tailwind CSS allows developers to easily customize the look and feel of web interfaces without having to write custom CSS code. It also provides responsive design features, making it easy to create layouts that adapt to different screen sizes and devices. Tailwind CSS uses a modular and composable approach, allowing developers to build custom designs by combining different",
      descripcion:
        "Tailwind CSS es un marco de trabajo CSS basado en la utilidad que se utiliza para crear interfaces web modernas y con capacidad de respuesta. Proporciona un conjunto de clases CSS predefinidas que pueden utilizarse para dar estilo a elementos HTML, como texto, espaciado, colores, bordes, etc. Tailwind CSS permite a los desarrolladores personalizar fácilmente el aspecto de las interfaces web sin tener que escribir código CSS personalizado. También ofrece funciones de diseño adaptativo, lo que facilita la creación de diseños que se adaptan a distintos tamaños de pantalla y dispositivos. Tailwind CSS utiliza un enfoque modular y componible, lo que permite a los desarrolladores crear diseños personalizados mediante la combinación de diferentes elementos.",
      title: "Tailwind Css",
      shadowColor: "lightseagreen",
      url: "https://tailwindcss.com//",
    },
    {
      name: "vite",
      logo: vite,
      description:
        "Vitejs is a lightweight and efficient development tool that aims to improve the developer experience for modern web development. It provides a fast development server that uses native ES modules, allowing for quick and incremental building of projects. It also supports hot module replacement, making it easy to see changes in real-time without having to manually refresh the page. In addition to its development server, Vitejs also offers a production-ready build process that can generate optimized and minified code for deployment. It supports a variety of languages and frameworks, including JavaScript, TypeScript, Vue.js, React, and more.",
      descripcion:
        "Vitejs es una herramienta de desarrollo ligera y eficiente que pretende mejorar la experiencia del desarrollador para el desarrollo web moderno. Proporciona un servidor de desarrollo rápido que utiliza módulos ES nativos, permitiendo la construcción rápida e incremental de proyectos. También admite la sustitución de módulos en caliente, lo que facilita ver los cambios en tiempo real sin tener que actualizar manualmente la página. Además de su servidor de desarrollo, Vitejs también ofrece un proceso de construcción listo para producción que puede generar código optimizado y minificado para su despliegue. Es compatible con una variedad de lenguajes y frameworks, incluyendo JavaScript, TypeScript, Vue.js, React, y más.",
      title: "Vite",
      shadowColor: "magenta",
      url: "https://vitejs.dev/",
    },

    {
      name: "node",
      logo: node,
      description:
        "Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run javaScript code outside of a web browser. It provides a set of built-in modules that can be used to create server-side web applications, command-line tools, and more. Node.js is built on the V8 JavaScript engine, which is the same engine used by Google Chrome, making it fast and efficient. Node.js uses an event-driven, non-blocking I/O model, which allows it to handle a large number of concurrent requests without blocking the execution of other code. This makes it ideal for building scalable and high-performance web applications.",
      descripcion:
        "Node.js es un entorno de ejecución de JavaScript multiplataforma y de código abierto que permite a los desarrolladores ejecutar código JavaScript fuera de un navegador web. Proporciona un conjunto de módulos integrados que pueden utilizarse para crear aplicaciones web del lado del servidor, herramientas de línea de comandos y mucho más. Node.js se basa en el motor JavaScript V8, el mismo que utiliza Google Chrome, por lo que es rápido y eficiente. Node.js utiliza un modelo de E/S basado en eventos y no bloqueante, lo que le permite gestionar un gran número de peticiones concurrentes sin bloquear la ejecución de otro código. Esto lo hace ideal para crear aplicaciones web escalables y de alto rendimiento.",
      title: "Node Js",
      shadowColor: "limegreen",
      url: "https://nodejs.org/en",
    },
    {
      name: "express",
      logo: express,
      description:
        " Express is a minimalist and flexible web application framework for Node.js. It provides a set of features for building web applications, such as routing, middleware, templating engines, and more. Express is designed to be lightweight and easy to use, allowing developers to quickly build web applications and APIs. It follows the model-view-controller (MVC) pattern, allowing for a separation of concerns between the data model, presentation, and control logic. Express can be used in conjunction with other tools and frameworks, such as React and MongoDB, to create scalable and robust web applications.",
      descripcion:
        "Express es un framework de aplicaciones web minimalista y flexible para Node.js. Proporciona un conjunto de características para la construcción de aplicaciones web, tales como enrutamiento, middleware, motores de plantillas, y mucho más. Express está diseñado para ser ligero y fácil de usar, lo que permite a los desarrolladores crear rápidamente aplicaciones web y API. Sigue el patrón modelo-vista-controlador (MVC), lo que permite separar las preocupaciones entre el modelo de datos, la presentación y la lógica de control. Express se puede utilizar junto con otras herramientas y frameworks, como React y MongoDB, para crear aplicaciones web escalables y robustas.",
      title: "express",
      shadowColor: "black",
      url: "https://expressjs.com/",
    },
    {
      name: "insomnia",
      logo: insomnia,
      description:
        "Insomnia is an open-source cross-platform REST API client used for testing and debugging HTTP requests and responses. It provides a simple and intuitive interface for making HTTP requests, allowing developers to quickly test their APIs and    identify issues. Insomnia supports various authentication  methods, request types, and response formats, making it easy to work with a wide range of APIs. It also supports environment variables, allowing developers to easily switch between different environments, such as development, staging, and    production. Insomnia includes a powerful set of features such as request chaining, response validation, code generation, and more.",
      descripcion:
        "Insomnia es un cliente de API REST multiplataforma de código abierto que se utiliza para probar y depurar solicitudes y respuestas HTTP. Proporciona una interfaz sencilla e intuitiva para realizar solicitudes HTTP, lo que permite a los desarrolladores probar rápidamente sus API e identificar problemas. Insomnia admite varios métodos de autenticación, tipos de solicitud y formatos de respuesta, lo que facilita el trabajo con una amplia gama de API. También es compatible con variables de entorno, lo que permite a los desarrolladores cambiar fácilmente entre diferentes entornos, como desarrollo, puesta en escena y producción. Insomnia incluye un potente conjunto de funciones como el encadenamiento de peticiones, la validación de respuestas, la generación de código, etc.lications.",
      title: "Inomnia",
      shadowColor: "indigo",
      url: "https://insomnia.rest/",
    },
    {
      name: "webpack",
      logo: webpack,
      description:
        "Webpack is an open-source module bundler used for building web applications. It allows developers to bundle JavaScript files, CSS files, images, and other assets into a single optimized file, improving the performance of web applications. Webpack    uses a configuration file to define entry points, loaders, plugins, and output configurations. Loaders are used to transform files, such as transpiling ES6 code into ES5 code, while plugins are used to perform additional tasks, such as optimizing assets and code splitting. Webpack also supports a hot module replacement feature, which allows developers to see changes in the browser without refreshing the page.",
      descripcion:
        "Webpack es un agrupador de módulos de código abierto que se utiliza para crear aplicaciones web. Permite a los desarrolladores agrupar archivos JavaScript, archivos CSS, imágenes y otros activos en un único archivo optimizado, lo que mejora el rendimiento de las aplicaciones web. Webpack utiliza un archivo de configuración para definir puntos de entrada, cargadores, plugins y configuraciones de salida. Los cargadores se utilizan para transformar archivos, como la transpilación de código ES6 en código ES5, mientras que los plugins se utilizan para realizar tareas adicionales, como la optimización de activos y la división de código. Webpack también admite una función de sustitución de módulos en caliente, que permite a los desarrolladores ver los cambios en el navegador sin actualizar la página.",
      title: "Webpack",
      shadowColor: "blue",
      url: "https://webpack.js.org/",
    },
    {
      name: "illustrator",
      logo: illustrator,
      description:
        "Adobe Illustrator is a vector graphics editor used for creating and editing vector graphics. It provides a set of tools for drawing, manipulating, and transforming shapes, paths, and other vector objects. Illustrator allows designers to create logos, icons, illustrations, and other graphic designs that can be used in print or digital media. It supports a wide range of file formats, including SVG, EPS, AI, PDF, and more, making it easy to export and share designs. Illustrator also includes a powerful set of features, such as artboards, layers, gradients, patterns, and more, allowing designers to create complex and detailed designs. It has a large and active community, with many resources available for learning and development.",
      descripcion:
        "Adobe Illustrator es un editor de gráficos vectoriales utilizado para crear y editar gráficos vectoriales. Proporciona un conjunto de herramientas para dibujar, manipular y transformar formas, trazados y otros objetos vectoriales. Illustrator permite a los diseñadores crear logotipos, iconos, ilustraciones y otros diseños gráficos que pueden utilizarse en medios impresos o digitales. Es compatible con una amplia gama de formatos de archivo, como SVG, EPS, AI, PDF, etc., lo que facilita la exportación y el intercambio de diseños. Illustrator también incluye un potente conjunto de funciones, como mesas de trabajo, capas, degradados, patrones, etc., que permiten a los diseñadores crear diseños complejos y detallados. Cuenta con una comunidad grande y activa, con muchos recursos disponibles para el aprendizaje y el desarrollo.",
      title: "Illustrator",
      shadowColor: "orangered",
      url: "https://www.adobe.com/products/illustrator.html",
    },
    {
      name: "photoshop",
      logo: photoshop,
      description:
        "Adobe Photoshop is a raster graphics editor used for creating and editing digital images. It provides a set of tools for manipulating and editing images, including retouching, cropping, resizing, color correction, and more. Photoshop allows designers to create and edit images that can be used in print or digital media. It supports a wide range of file formats, including JPEG, PNG, PSD, and more, making it easy to export and share designs. Photoshop also includes a powerful set of features, such as layers, filters, masks, and more, allowing designers to create complex and detailed designs. It also supports 3D graphics and animation, making it a versatile tool for digital media creation.",
      descripcion:
        "Adobe Photoshop es un editor de gráficos de trama utilizado para crear y editar imágenes digitales. Proporciona un conjunto de herramientas para manipular y editar imágenes, incluyendo retoque, recorte, cambio de tamaño, corrección de color y mucho más. Photoshop permite a los diseñadores crear y editar imágenes que pueden utilizarse en medios impresos o digitales. Es compatible con una amplia gama de formatos de archivo, como JPEG, PNG, PSD, etc., lo que facilita la exportación y el intercambio de diseños. Photoshop también incluye un potente conjunto de funciones, como capas, filtros, máscaras, etc., que permiten a los diseñadores crear diseños complejos y detallados. También admite gráficos y animaciones en 3D, lo que lo convierte en una herramienta versátil para la creación de medios digitales.",
      title: "Photoshop",
      shadowColor: "blue",
      url: "https://www.adobe.com/products/photoshop.html",
    },
    {
      name: "git",
      logo: git,
      description:
        "Git is a distributed version control system that allows developers to track changes in their codebase and collaborate with other team members. It uses a series of snapshots to keep track of changes and allows developers to work on separate branches before merging their code back into the main branch. Git also enables users to revert to previous versions of their code and track who made each change.",
      descripcion:
        "Git es un sistema de control de versiones distribuido que permite a los desarrolladores hacer un seguimiento de los cambios en su código base y colaborar con otros miembros del equipo. Utiliza una serie de instantáneas para hacer un seguimiento de los cambios y permite a los desarrolladores trabajar en ramas separadas antes de fusionar su código en la rama principal. Git también permite a los usuarios volver a versiones anteriores de su código y saber quién hizo cada cambio.",
      tittle: "Git",
      shadowColor: "red",
      url: "https://git-scm.com/",
    },
    {
      name: "github",
      logo: github,
      description:
        "GitHub, is a web-based platform that provides a centralized location for hosting and collaborating on Git repositories. It offers features such as pull requests, code reviews, and issue tracking to facilitate collaboration among developers. Additionally, GitHub provides a wide range of tools and integrations that can enhance a developer's workflow, including continuous integration and deployment. As one of the largest communities for open-source projects, GitHub also allows developers to showcase their work and connect with others in their field.",
      descripcion:
        "GitHub es una plataforma web que proporciona una ubicación centralizada para alojar y colaborar en repositorios Git. Ofrece funciones como pull requests, revisiones de código y seguimiento de incidencias para facilitar la colaboración entre desarrolladores. Además, GitHub proporciona una amplia gama de herramientas e integraciones que pueden mejorar el flujo de trabajo de un desarrollador, incluida la integración y el despliegue continuos. Como una de las mayores comunidades de proyectos de código abierto, GitHub también permite a los desarrolladores mostrar su trabajo y conectarse con otros en su campo.",
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

  const handleOnClick = (i) => {
    setExpandedIndex(i === expandedIndex ? null : i);
  };

  return (
    <div className="mt-96 h-full w-full lg:mt-0">
      <motion.h3
        variants={{
          hidden: { opacity: 0, scale: 0.5, x: "-40%" },
          visible: { opacity: 1, scale: 1, x: 0 },
        }}
        viewport={{ once: false, amount: 0.5 }}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 1.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="  mt-40 -mb-24 w-full p-4 text-center text-2xl text-white shadow-black text-shadow-md md:text-4xl   lg:-mb-0 lg:text-6xl"
      >
        {" "}
        My Skills
      </motion.h3>
      <div className="flex w-full justify-center">
        {!isMobile ? (
          <div className="mx-20 flex w-full flex-wrap  justify-center gap-y-28 gap-x-10 font-roboto sm:justify-center md:justify-center lg:justify-around">
            {arrayTech.map((t, i) => {
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.5, x: "40%" },
                    visible: { opacity: 1, scale: 1, x: 0 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{
                    duration: 1.8,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <motion.div
                    initial={{ height: 150, width: 150 }}
                    animate={{
                      height: expandedIndex === i ? 400 : 150,
                      width: expandedIndex === i ? 400 : 250,
                    }}
                    transition={{ duration: 0.5 }}
                    onClick={() => handleOnClick(i)}
                    className=" relative mt-40 flex justify-center"
                    key={i}
                  >
                    {expandedIndex === i && (
                      <>
                        {language === "en" ? (
                          <motion.article
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute z-50 h-96 w-96 rounded-xl p-6 pt-20 text-sm text-white"
                          >
                            {t.description}
                          </motion.article>
                        ) : (
                          <motion.article
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute z-50 h-96 w-96 rounded-xl p-6 pt-20 text-sm text-white"
                          >
                            {t.descripcion}
                          </motion.article>
                        )}
                      </>
                    )}
                    <motion.img
                      variants={{
                        hidden: { opacity: 0, scale: 0.2, x: "-40%" },
                        visible: { opacity: 1, scale: 1, x: 0 },
                      }}
                      viewport={{ once: false, amount: 0.5 }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{
                        duration: 1.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      src={t.logo}
                      alt={t.name}
                      title={t.title}
                      class={`${t.name} h-24 hover:cursor-pointer`}
                      className={`${t.name} absolute -top-12 z-50 h-32 pr-8 text-white hover:cursor-pointer`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />

                    {/* este div tiene el texto */}
                    {expandedIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
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
                            borderRadius: ["50%", "50%", "50%", "50%"],
                          },
                        }}
                        initial="hidden"
                        whileHover="visible"
                        transition={{
                          duration: 3,
                          times: [0, 0.2, 0.5, 0.8, 1],
                          repeat: 0,
                        }}
                        className=" box absolute top-0 left-0 h-96 w-96 rounded-2xl  bg-gradient-to-b from-transparent to-slate-900 p-4 pt-20"
                      ></motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className=" mt-40 flex h-full w-full flex-col flex-wrap items-center justify-between gap-10  font-roboto">
            {arrayTech.map((t, i) => {
              return (
                <div
                  className="- flex w-full items-center justify-between p-6 pr-10 tracking-widest text-white shadow-black text-shadow-md sm:w-3/4"
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
