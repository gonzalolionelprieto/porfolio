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
              title: "CAR RENTAL",
              description:
                "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
              img: "https://cdn.dribbble.com/userupload/4086941/file/original-5dbaff651a1b501ea7251a530d502493.jpg?compress=1&resize=1200x900",
              technologies: ["React", "Tailwind"],
              githubLink: "https://github.com/stefvndev/car-rental",
              liveDemoLink: "https://car-rental-ten.vercel.app/",
              Reverse: false,
            },
            {
              id: "2",
              title: "Gym",
              description:
                "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
              img: "https://cdn.dribbble.com/userupload/3384714/file/original-ed7bc32e50db20b0685280f29c3ea398.png?compress=1&resize=1200x900",
              technologies: ["React", "Tailwind"],
              githubLink: "https://github.com/stefvndev/car-rental",
              liveDemoLink: "https://car-rental-ten.vercel.app/",
              Reverse: true,
            },
            {
              id: "3",
              title: "Crypto",
              description:
                "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
              img: "https://cdn.dribbble.com/userupload/4266473/file/original-5165b6634955e3a7adfa6e19f29339bb.png?compress=1&resize=1200x900",
              technologies: ["React", "Tailwind"],
              githubLink: "https://github.com/stefvndev/car-rental",
              liveDemoLink: "https://car-rental-ten.vercel.app/",
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
