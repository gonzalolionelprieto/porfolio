import React from "react";
import Test from "../Test";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoHtml5,
} from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

function Hero({ name, greeting, imageSrc }) {
  return (
    <div className="h-screen flex flex-col  items-center justify-center  ">
      <div className="w-full flex flex-col md:flex-row justify-center items-center  px-6 py-10 md:py-2 text-center md:text-left">
        <div className="w-6/12  ">
          <h1 className=" w-full font-bold text-5xl leading-tight text-gray-900 ">
            {name}
          </h1>

          <p className=" w-full mt-4 text-xl font-semibold text-gray-800 ">
            {greeting}
          </p>
          <div className="w-full flex flex-row md:justify-start  items-center ">
            <a
              href="/#"
              className="container-icon py-5  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 "
            >
              <IoLogoLinkedin
                color="#292929"
                fontSize="2.5em"
                className="icon"
              />
            </a>
            <a
              href="/#"
              className="container-icon py-5 mx-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 "
            >
              <IoLogoGithub color="#292929" fontSize="2.5em" className="html" />
            </a>
          </div>
        </div>
        <div className="w-6/12  flex justify-center items-center">
          <div>
            <Test />
            <div className="absolute top-0  rotate">
              <img
                src="https://i.ibb.co/vkn8mL4/3d9bebaf7f1b0b037855ce640bf91345-removebg-preview-2.png"
                alt="moon"
                className="astronaut"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-start items-center">
        <h3 className="px-5 text-lg font-bold text-gray-800">
          Tech Stack <span className="px-5"> |</span>
        </h3>

        <div className="w-10/12 flex justify-start">
          <a
            href="/#"
            className="container-icon py-5 px-5  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 "
          >
            <IoLogoHtml5 color="#292929" fontSize="2.5em" className="html" />
          </a>
          <a
            href="/#"
            className="container-icon py-5 px-5 mx-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 "
          >
            <IoLogoCss3 color="#292929" fontSize="2.5em" className="icon" />
          </a>
          <a
            href="/#"
            className="container-icon py-5 px-5 mx-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 "
          >
            <IoLogoJavascript
              color="#292929"
              fontSize="2.5em"
              className="javascript"
            />
          </a>
          <a
            href="/#"
            className="container-icon py-5 px-5 mx-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 "
          >
            <IoLogoReact color="#292929" fontSize="2.5em" className="icon" />
          </a>
          <a
            href="/#"
            className="container-icon py-5 px-5 mx-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 "
          >
            <SiTailwindcss color="#292929" fontSize="2.5em" className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
