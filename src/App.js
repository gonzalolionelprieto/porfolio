import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import About from "./Components/About";
import Container from "./Components/Container";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import "../src/animation.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Hero
          name={"Front-End React Developer"}
          greeting={
            "Hola, soy Gonzalo Prieto. Un apasionado desarrollador Front-end con React  "
          }
          imageSrc={"./logo.svg"}
        />

        <About
          img={
            "https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"
          }
          title={"Un desarrollador Front-end dedicado"}
          description={
            "Como desarrollador Front-End Junior, poseo  habilidades en HTML, CSS, JavaScript, React, Tailwind y SCSS. Me especializo en diseñar y mantener sitios web responsive que ofrecen una experiencia de usuario fluida. Mi experiencia radica en crear interfaces dinámicas y atractivas mediante un código limpio y optimizado.Además, soy un colaborador en equipo que disfruta de trabajar con grupos multifuncionales para crear aplicaciones web de alta calidad."
          }
        />

        <Portfolio
          projects={[
            {
              id: "1",
              title: "Rick and Morty",
              description:
                "El sitio web de Rick and Morty ha sido creado con React y utiliza fetch para conectarse a una API de datos. También utilice Tailwind para darle un diseño atractivo. Hemos utilizado los hooks de React para crear una base de código más eficiente y reutilizable. Si eres fanático de la serie animada, ¡no dudes en echar un vistazo!",
              img: "https://portafolio-gonzalo-prieto.netlify.app/img/1.png",
              technologies: ["React", "Tailwind"],
              githubLink:
                "https://github.com/gonzalolionelprieto/rick-and-morty-app",
              liveDemoLink: "https://rick-and-morty-gp.netlify.app/",
              Reverse: false,
            },
            {
              id: "2",
              title: "Adidas Ozweego",
              description:
                "En el proyecto del sitio web de Adidas Ozweego  utilicé HTML, CSS y JavaScript para crear una plataforma visualmente atractiva y moderna. También integré la biblioteca de JS Slick Full para crear un atractivo slider. La página ofrece información detallada sobre la zapatilla. Fue un proyecto emocionante y estoy orgulloso del resultado final.",
              img: "https://portafolio-gonzalo-prieto.netlify.app/img/2.jpg.png",
              technologies: ["Html", "Css", "Javascript"],
              githubLink:
                "https://github.com/gonzalolionelprieto/adidas-ozweego",
              liveDemoLink: "https://adidas-ozweego.netlify.app/",
              Reverse: true,
            },
            {
              id: "3",
              title: "Arte Mad",
              description:
                "Arte Mad es una empresa de muebles y carpintería que destaca por su enfoque en la creación de espacios personalizados y adaptados a las necesidades de sus clientes. En este proyecto se utilizó HTML, CSS ,React y Bootstrap para diseñar y desarrollar un sitio web moderno y atractivo",
              img: "https://portafolio-gonzalo-prieto.netlify.app/img/5.png",
              technologies: ["Html", "Css", "React", "Bootstrap"],
              githubLink: "https://github.com/gonzalolionelprieto/arte-madera",
              liveDemoLink: "https://arte-mad.netlify.app/",
              Reverse: false,
            },
          ]}
        />
        <Contact />
      </Container>{" "}
      <Footer />
    </Router>
  );
}

export default App;
