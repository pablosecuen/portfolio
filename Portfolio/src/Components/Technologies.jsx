import React from "react";
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
import anime from "animejs/lib/anime.es.js";
import "./Technologies.module.css";

function Technologies() {
  anime({
    targets: [".html"],
    filter: "drop-shadow(0px 0px 10px red)",
  });

  anime({
    targets: [".css"],
    filter: "drop-shadow(0px 0px 10px blue)",
  });

  anime({
    targets: [".javascript"],
    filter: "drop-shadow(0px 0px 10px yellow)",
  });

  anime({
    targets: [".react"],
    filter: "drop-shadow(0px 0px 20px deepskyblue)",
  });

  anime({
    targets: [".sass"],
    filter: "drop-shadow(0px 0px 10px 	hotpink)",
  });

  anime({
    targets: [".boostrap"],
    filter: "drop-shadow(0px 0px 10px 	indigo)",
  });

  anime({
    targets: [".tailwind"],
    filter: "drop-shadow(0px 0px 10px 	lightseagreen)",
  });

  anime({
    targets: [".node"],
    filter: "drop-shadow(0px 0px 10px 	limegreen)",
  });

  anime({
    targets: [".express"],
    filter: "drop-shadow(0px 0px 10px black)",
  });

  anime({
    targets: [".insomnia"],
    filter: "drop-shadow(0px 0px 10px 	blueviolet)",
  });

  anime({
    targets: [".webpack"],
    filter: "drop-shadow(0px 0px 10px 	deepskyblue)",
  });

  anime({
    targets: [".illustrator"],
    filter: "drop-shadow(0px 0px 10px 	orangered)",
  });

  anime({
    targets: [".photoshop"],
    filter: "drop-shadow(0px 0px 10px 	dodgerblue)",
    duration: 1000,
  });

  anime({
    targets: [".redux"],
    filter: "drop-shadow(0px 0px 10px 	blueviolet)",
    duration: 1000,
  });

  return (
    <div className="absolute top-[1200px] w-full">
      <div className="flex w-full justify-center">
        <div className=" flex w-3/4 flex-wrap  justify-center gap-20 font-roboto">
          <div className="relative h-96 w-96 rounded-xl bg-gradient-to-b from-transparent to-white p-4 pt-20">
            <img
              src={html}
              alt="html"
              title="html"
              class="html h-24 hover:cursor-pointer"
              className="html absolute  -top-12 h-24 text-white hover:cursor-pointer"
            />
            <p className="text-sm">
              HTML (HyperText Markup Language) is a standard markup language
              used for creating web pages and other web-based documents. It
              provides the structure and content of web pages by defining
              various elements such as headings, paragraphs, links, images,
              tables, and more. HTML works in conjunction with other
              technologies such as CSS and JavaScript to create rich, dynamic
              web pages. HTML documents are composed of tags and attributes that
              are used to define the various elements of a page. HTML documents
              can be created and edited using a text editor or specialized HTML
              editor software.
            </p>
          </div>
          <div className="relative h-96 w-96 rounded-xl bg-gradient-to-b from-transparent to-white p-4 pt-20">
            <img
              src={css}
              alt="css"
              title="css"
              class="css h-24 hover:cursor-pointer"
              className="css absolute  -top-12 h-24 text-white hover:cursor-pointer"
            />
            <p className="text-sm">
              CSS (Cascading Style Sheets) is a style sheet language used for
              describing the presentation and layout of web pages written in
              HTML or XML. It separates the presentation of a web page from its
              content, allowing designers to create visually appealing and
              consistent designs across multiple web pages. CSS provides a wide
              range of styling options such as fonts, colors, backgrounds,
              margins, padding, and more. It allows designers to create complex
              layouts and responsive designs that adapt to different screen
              sizes and devices. CSS works by targeting HTML elements with
              selectors and applying specific styles to them using declarations.
              Styles can be defined inline, internally within the HTML document,
              or externally in a separate CSS file.
            </p>
          </div>
          <div className="relative h-96 w-96 rounded-xl bg-gradient-to-b from-transparent to-white  p-4 pt-20">
            <img
              src={javascript}
              alt="javascript"
              title="javascript"
              class="javascript h-24 "
              className="javascript absolute -top-12 h-24 text-white hover:cursor-pointer"
            />
            <p className="text-sm">
              JavaScript is a programming language used for creating interactive
              and dynamic web pages. It is a client-side scripting language,
              meaning it runs on the user's web browser rather than the server.
              JavaScript can be used to add interactivity to web pages, validate
              form data, create animations and effects, manipulate the Document
              Object Model (DOM), and much more. It can also be used in
              conjunction with HTML and CSS to create dynamic web applications.
              JavaScript is a versatile language that can be used both on the
              front-end and back-end of web development.
            </p>
          </div>
          <div className="relative h-96 w-96 rounded-xl bg-gradient-to-b from-transparent to-white p-4 pt-20">
            <img
              src={react}
              alt="react"
              title="react"
              class="react h-24 hover:cursor-pointer"
              className="react absolute -top-12 h-24 text-white hover:cursor-pointer"
            />
            <p className="text-sm">
              React is an open-source JavaScript library used for building user
              interfaces for web and mobile applications. Developed by Facebook,
              React allows developers to create reusable UI components that can
              be used to build complex and interactive web applications. React
              uses a declarative programming approach, allowing developers to
              describe how a component should look and behave, and React takes
              care of rendering it in the browser. This makes it easier to
              manage and maintain large codebases. React also uses a virtual DOM
              (Document Object Model), which allows it to efficiently update
              only the parts of the UI that have changed, leading to improved
              performance.
            </p>
          </div>
          <div className="relative h-96 w-96 rounded-xl bg-gradient-to-b from-transparent to-white p-4 pt-20">
            <img
              src={redux}
              alt="redux"
              title="redux"
              class="redux h-24 hover:cursor-pointer"
              className="redux redux absolute -top-12 h-24 text-white hover:cursor-pointer"
            />
            <p className="text-sm">
              Redux is an open-source JavaScript library used for managing
              application state in web and mobile applications. It is often used
              in conjunction with React to create scalable and maintainable
              applications. Redux provides a centralized store for application
              state, which can be accessed and updated by components throughout
              the application. This helps to simplify the management of complex
              state and allows for easier debugging and testing. Redux uses a
              predictable state container, which means that changes to the state
              can be easily tracked and traced. Redux also provides middleware,
              which allows developers to add additional functionality to the
              state management process, such as logging, API requests, and more.
            </p>
          </div>
          <div className="relative h-96 w-96 rounded-xl bg-gradient-to-b from-transparent to-white p-4 pt-20">
            <img
              src={sass}
              alt="sass"
              title="sass"
              class="sass h-24 hover:cursor-pointer"
              className="sass absolute -top-12 h-24 text-white hover:cursor-pointer"
            />
            <p className="text-sm">
              {" "}
              Sass (Syntactically Awesome Style Sheets) is a preprocessor
              scripting language used to extend and enhance the capabilities of
              CSS. It provides additional features such as variables, nesting,
              mixins, inheritance, and more, which make it easier to write and
              manage complex CSS stylesheets. Sass files are compiled into
              standard CSS files, which can be used in web pages like regular
              CSS files. Sass can be used in conjunction with other front-end
              tools such as Bootstrap and React to create scalable and
              maintainable applications. Sass is highly customizable, allowing
              developers to define their own variables and functions, and reuse
              them throughout the stylesheet. It also helps to reduce code
              duplication and improve the readability of the stylesheet.
            </p>
          </div>
          <div className="relative h-96 w-96 rounded-xl bg-gradient-to-b from-transparent to-white p-4 pt-20">
            <img
              src={boostrap}
              alt="boostrap"
              title="boostrap"
              class="boostrap h-24 hover:cursor-pointer"
              className="boostrap absolute -top-12 h-24 text-white hover:cursor-pointer"
            />
            <p className="text-sm">
              Bootstrap is an open-source front-end framework used for creating
              responsive and mobile-first web pages and applications. It
              provides a collection of pre-built CSS and JavaScript components,
              such as navigation bars, forms, buttons, modals, and more, that
              can be easily integrated into web pages. Bootstrap also includes a
              grid system, which helps to create complex layouts that adapt to
              different screen sizes and devices. This makes it easier to create
              visually appealing and consistent designs across different web
              pages and devices.
            </p>
          </div>
          <div className="relative h-96 w-96 rounded-xl bg-gradient-to-b from-transparent to-white p-4 pt-20">
            <img
              src={tailwind}
              alt="tailwind"
              title="tailwind"
              class="tailwind h-24 hover:cursor-pointer"
              className="tailwind absolute -top-12 h-20  text-white hover:cursor-pointer"
            />
            <p className="text-sm">
              Tailwind CSS is a utility-first CSS framework used for building
              modern and responsive web interfaces. It provides a set of
              pre-built CSS classes that can be used to style HTML elements,
              such as text, spacing, colors, borders, and more. Tailwind CSS
              allows developers to easily customize the look and feel of web
              interfaces without having to write custom CSS code. It also
              provides responsive design features, making it easy to create
              layouts that adapt to different screen sizes and devices. Tailwind
              CSS uses a modular and composable approach, allowing developers to
              build custom designs by combining different classes together.
            </p>
          </div>
          <div className="relative h-96 w-96 rounded-xl bg-gradient-to-b from-transparent to-white p-4 pt-20">
            <img
              src={node}
              alt="node"
              title="node"
              class="node h-24 hover:cursor-pointer"
              className="node absolute -top-12 h-24 text-white hover:cursor-pointer"
            />
            <p className="text-sm">
              Node.js is an open-source, cross-platform JavaScript runtime
              environment that allows developers to run JavaScript code outside
              of a web browser. It provides a set of built-in modules that can
              be used to create server-side web applications, command-line
              tools, and more. Node.js is built on the V8 JavaScript engine,
              which is the same engine used by Google Chrome, making it fast and
              efficient. Node.js uses an event-driven, non-blocking I/O model,
              which allows it to handle a large number of concurrent requests
              without blocking the execution of other code. This makes it ideal
              for building scalable and high-performance web applications.
            </p>
          </div>
          <div className="relative h-96 w-96 rounded-xl bg-gradient-to-b from-transparent to-white p-4 pt-20">
            <img
              src={express}
              alt="express"
              title="express"
              class="express h-24 hover:cursor-pointer"
              className="express absolute -top-12 h-24 text-white hover:cursor-pointer"
            />
            <p className="text-sm">
              Express is a minimalist and flexible web application framework for
              Node.js. It provides a set of features for building web
              applications, such as routing, middleware, templating engines, and
              more. Express is designed to be lightweight and easy to use,
              allowing developers to quickly build web applications and APIs. It
              follows the model-view-controller (MVC) pattern, allowing for a
              separation of concerns between the data model, presentation, and
              control logic. Express can be used in conjunction with other tools
              and frameworks, such as React and MongoDB, to create scalable and
              robust web applications. It also supports a wide range of plugins
              and extensions, making it highly customizable and adaptable to
              different use cases.
            </p>
          </div>
          <div className="relative h-96 w-96 rounded-xl bg-gradient-to-b from-transparent to-white p-4 pt-20">
            <img
              src={insomnia}
              alt="insomnia"
              title="insomnia"
              class="insomnia h-24 hover:cursor-pointer"
              className="insomnia absolute -top-12 h-24 text-white hover:cursor-pointer"
            />
            <p className="text-sm">
              Insomnia is an open-source cross-platform REST API client used for
              testing and debugging HTTP requests and responses. It provides a
              simple and intuitive interface for making HTTP requests, allowing
              developers to quickly test their APIs and identify issues.
              Insomnia supports various authentication methods, request types,
              and response formats, making it easy to work with a wide range of
              APIs. It also supports environment variables, allowing developers
              to easily switch between different environments, such as
              development, staging, and production. Insomnia includes a powerful
              set of features such as request chaining, response validation,
              code generation, and more, making it a valuable tool for building
              and testing APIs.
            </p>
          </div>
          <div className="relative h-96 w-96 rounded-xl bg-gradient-to-b from-transparent to-white p-4 pt-20">
            {" "}
            <img
              src={webpack}
              alt="webpack"
              title="webpack"
              class="webpack h-24 hover:cursor-pointer"
              className="webpack absolute -top-12 h-24 text-white hover:cursor-pointer"
            />
            <p className="text-sm">
              Webpack is an open-source module bundler used for building web
              applications. It allows developers to bundle JavaScript files, CSS
              files, images, and other assets into a single optimized file,
              improving the performance of web applications. Webpack uses a
              configuration file to define entry points, loaders, plugins, and
              output configurations. Loaders are used to transform files, such
              as transpiling ES6 code into ES5 code, while plugins are used to
              perform additional tasks, such as optimizing assets and code
              splitting. Webpack also supports a hot module replacement feature,
              which allows developers to see changes in the browser without
              refreshing the page.
            </p>
          </div>
          <div className="relative h-96 w-96 rounded-xl bg-gradient-to-b from-transparent to-white p-4 pt-20">
            {" "}
            <img
              src={illustrator}
              alt="illustrator"
              title="illustrator"
              class="illustrator h-24 hover:cursor-pointer"
              className="illustrator absolute -top-12 h-24 text-white hover:cursor-pointer"
            />
            <p className="text-sm">
              Adobe Illustrator is a vector graphics editor used for creating
              and editing vector graphics. It provides a set of tools for
              drawing, manipulating, and transforming shapes, paths, and other
              vector objects. Illustrator allows designers to create logos,
              icons, illustrations, and other graphic designs that can be used
              in print or digital media. It supports a wide range of file
              formats, including SVG, EPS, AI, PDF, and more, making it easy to
              export and share designs. Illustrator also includes a powerful set
              of features, such as artboards, layers, gradients, patterns, and
              more, allowing designers to create complex and detailed designs.
              It has a large and active community, with many resources available
              for learning and development.
            </p>
          </div>
          <div className="pt-18 relative h-96 w-96 rounded-xl bg-gradient-to-b from-transparent to-white p-4 pt-20">
            {" "}
            <img
              src={photoshop}
              alt="photoshop"
              title="photoshop"
              class="photoshop h-24 hover:cursor-pointer"
              className="photoshop absolute -top-12 h-24 text-white hover:cursor-pointer"
            />
            <p className="text-sm">
              Adobe Photoshop is a raster graphics editor used for creating and
              editing digital images. It provides a set of tools for
              manipulating and editing images, including retouching, cropping,
              resizing, color correction, and more. Photoshop allows designers
              to create and edit images that can be used in print or digital
              media. It supports a wide range of file formats, including JPEG,
              PNG, PSD, and more, making it easy to export and share designs.
              Photoshop also includes a powerful set of features, such as
              layers, filters, masks, and more, allowing designers to create
              complex and detailed designs. It also supports 3D graphics and
              animation, making it a versatile tool for digital media creation.
              Photoshop has a large and active community, with many resources
              available for learning and development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
