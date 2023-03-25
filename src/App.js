import React from "react";
import About from "./Components/About";

import Container from "./Components/Container";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import "../src/animation.css";
function App() {
  return (
    <div className="bg-white ">
      <Navbar />
      <Container>
        
        <Hero
          name={"Front-End React Developer"}
          greeting={
            "Hi, I'm Stefan Topalovic. A passionate Front-end React Developer based in Belgrade, Serbia. "
          }
          imageSrc={"./logo.svg"}
        />

        <About
          img={
            "https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"
          }
          title={"A dedicated Front-end Developer based in Belgrade, Serbia"}
          description={
            "As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications."
          }
        />

        <Portfolio
          projects={[
            {
              id: "1",
              title: "CAR RENTAL",
              description:
                "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
              img: "https://cdn.dribbble.com/userupload/4155030/file/original-5053a06e2f183c6a8faded17c4270da8.jpg?compress=1&resize=1200x900",
              technologies: ["React", "Tailwind"],
              githubLink: "https://github.com/stefvndev/car-rental",
              liveDemoLink: "https://car-rental-ten.vercel.app/",
              Reverse: false,
            },
            {
              id: "2",
              title: "Cars",
              description:
                "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
              img: "https://cdn.dribbble.com/userupload/4155030/file/original-5053a06e2f183c6a8faded17c4270da8.jpg?compress=1&resize=1200x900",
              technologies: ["React", "Tailwind"],
              githubLink: "https://github.com/stefvndev/car-rental",
              liveDemoLink: "https://car-rental-ten.vercel.app/",
              Reverse: true,
            },
            {
              id: "3",
              title: "Cars",
              description:
                "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
              img: "https://cdn.dribbble.com/userupload/4155030/file/original-5053a06e2f183c6a8faded17c4270da8.jpg?compress=1&resize=1200x900",
              technologies: ["React", "Tailwind"],
              githubLink: "https://github.com/stefvndev/car-rental",
              liveDemoLink: "https://car-rental-ten.vercel.app/",
              Reverse: false,
            },
          ]}
        />
      </Container>
    </div>
  );
}

export default App;
