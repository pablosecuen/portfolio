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
import ts from "../assets/logoTecnologias/ts-logo-128.png";
import next from "../assets/logoTecnologias/next.svg";

export const arrayTech = [
  {
    name: "html",
    logo: html,
    title: "Html",
    shadowColor: "red",
    url: "https://html.com/",
  },
  {
    name: "css",
    logo: css,
    title: "Css",
    shadowColor: "blue",
    url: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    name: "typescript",
    logo: ts,
    title: "TypeScript",
    shadowColor: "blue",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "javascript",
    logo: javascript,
    title: "Javascript",
    shadowColor: "yellow",
    url: "https://www.javascript.com/",
  },
  {
    name: "react",
    logo: react,
    title: "React",
    shadowColor: "deepskyblue",
    url: "https://es.reactjs.org/",
  },
  {
    name: "next",
    logo: next,
    title: "Next Js",
    shadowColor: "indigo",
    url: "https://nextjs.org/",
  },
  {
    name: "redux",
    logo: redux,
    title: "Redux",
    shadowColor: "indigo",
    url: "https://redux.js.org/",
  },

  {
    name: "sass",
    logo: sass,
    title: "Sass",
    shadowColor: "hotpink",
    url: "https://sass-lang.com/",
  },
  {
    name: "boostrap",
    logo: boostrap,
    title: "Boostrap",
    shadowColor: "indigo",
    url: "https://getbootstrap.com/",
  },
  {
    name: "tailwind",
    logo: tailwind,
    title: "Tailwind Css",
    shadowColor: "lightseagreen",
    url: "https://tailwindcss.com//",
  },
  {
    name: "vite",
    logo: vite,
    title: "Vite",
    shadowColor: "magenta",
    url: "https://vitejs.dev/",
  },

  {
    name: "node",
    logo: node,
    title: "Node Js",
    shadowColor: "limegreen",
    url: "https://nodejs.org/en",
  },
  {
    name: "express",
    logo: express,
    title: "express",
    shadowColor: "black",
    url: "https://expressjs.com/",
  },
  {
    name: "insomnia",
    logo: insomnia,
    title: "Inomnia",
    shadowColor: "indigo",
    url: "https://insomnia.rest/",
  },
  {
    name: "webpack",
    logo: webpack,
    title: "Webpack",
    shadowColor: "blue",
    url: "https://webpack.js.org/",
  },
  {
    name: "illustrator",
    logo: illustrator,
    title: "Illustrator",
    shadowColor: "orangered",
    url: "https://www.adobe.com/products/illustrator.html",
  },
  {
    name: "photoshop",
    logo: photoshop,
    title: "Photoshop",
    shadowColor: "blue",
    url: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "git",
    logo: git,
    tittle: "Git",
    shadowColor: "red",
    url: "https://git-scm.com/",
  },
  {
    name: "github",
    logo: github,
    title: "Github",
    shadowColor: "indigo",
    url: "https://github.com/",
  },
];

export const proyects = [
  {
    Pokemon: {
      name: "Pokemon",
      description:
        "PThis project uses React, Redux, Node, and Sequelize to view and interact with Pokémon data from the pokeapi API. The main page features a search input and list of Pokémon, which can be filtered and sorted by type and attack. Pagination is included to display 12 Pokémon per page. The Pokémon detail page includes stats and additional information, and a controlled form is available for creating new Pokémon. The creation form has been validated to ensure proper data entry. The app also includes a playable Kanto Ultimate Pokémon game. The app is not responsive due to limited development time. Overall, this project serves as a way to practice and apply knowledge of various technologies.",
      descripcion:
        "Este proyecto utiliza React, Redux, Node y Sequelize para ver e interactuar con los datos de Pokémon de la API pokeapi. La página principal cuenta con una entrada de búsqueda y una lista de Pokémon, que se pueden filtrar y ordenar por tipo y ataque. Se incluye la paginación para mostrar 12 Pokémon por página. La página de detalle de Pokémon incluye estadísticas e información adicional, y hay un formulario controlado disponible para crear nuevos Pokémon. El formulario de creación ha sido validado para garantizar la entrada de datos correcta. La aplicación también incluye un juego de Pokémon Ultimate Kanto jugable. La aplicación no es responsiva debido al tiempo limitado de desarrollo. En general, este proyecto sirve como una manera de practicar y aplicar el conocimiento de varias tecnologías.",
    },
  },
  {
    PetFriendly: {
      name: "Pet Friendly",
      description:
        "Pet Friendly Universe is a multi-platform site with a fully functional e-commerce system. Any user with previous administrator authorization can create a store and upload their product catalogs. The site also provides services such as pet daycare and dog walking. Every sale made on the site must donate 3% of  its profits to our non-governmental organizations for pet protection. These organizations have their own route on our site where they can post pets for adoption and have their own administrator dashboards to completely control the Pet Friendly Universe. This includes user banning, post deletions, store creation  authorization, and much more. We used a variety of technologies to create this site, including JavaScript, React, Redux, Express, PostgreSQL, Cloudinary, JSON Web Token, third-party authorization, and several React libraries to optimize the site.",
      descripcion:
        "Universo Amigable con las Mascotas es un sitio multiplataforma con un sistema de comercio electrónico completamente funcional. Cualquier usuario con autorización de administrador previa puede crear una tienda y cargar su catálogo de productos. El sitio también ofrece servicios como guardería de mascotas y paseo de perros. Cada venta realizada en el sitio debe donar el 3% de sus ganancias a nuestras organizaciones no gubernamentales de nuestro sitio donde pueden publicar mascotas para adopción y tienen sus propios paneles de administración para controlar completamente el Universo Amigable con las Mascotas. Esto incluye la prohibición de usuarios, eliminación de publicaciones, autorización de creación de tiendas y mucho más. Utilizamos una variedad de tecnologías para crear este sitio, incluyendo JavaScript, React, Redux, Express, PostgreSQL, Cloudinary, JSON Web Token, autorización de terceros y varias bibliotecas de React para optimizar el sitio.",
    },
  },

  {
    Movi: {
      name: "Movi",
      description:
        "    Movi is the central hub for all your transportation solutions. You can order food delivery, ride-hailing, taxis, intercity buses, and even carpooling. We provide comprehensive solutions with reliable security systems, a robust backend, and an intuitive and fresh urban design. In the /admin/dashboard section, you will find a complete and thoughtfully designed admin panel down to the last detail. It is intuitive and efficient. This project is deployed on free tools, so the response times may be somewhat slow. It was developed with Firebase as the database and geolocation in mind. In terms of the technology stack, TypeScript, Node.js, Express, Babel, React, Next.js, and Tailwind were used for the styles.",
      descripcion:
        "Movi es la sede central para todas tus soluciones de transporte. Puedes pedir comida a domicilio, remises, taxis, buses intermunicipales e incluso hacer carpooling. Ofrecemos soluciones integrales con sistemas de seguridad confiables, un backend robusto y un diseño urbano intuitivo y fresco. En la sección /admin/dashboard, encontrarás un panel de administración completo y cuidadosamente diseñado hasta el Último detalle. Es intuitivo y eficiente. Este proyecto está desplegado en herramientas gratuitas, por lo que los tiempos de respuesta pueden ser algo lentos. Fue desarrollado con Firebase como base de datos y geolocalización en mente. En cuanto al stack tecnolónico, se utilizaron TypeScript, Node.js, Express, Babel, React, Next.js y Tailwind para los estilos.",
    },
  },
];
