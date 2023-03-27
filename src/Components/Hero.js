import React from "react";
import Test from "../Test";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Slack from "./Slack";

function Hero({ name, greeting }) {
  return (
    <div className="h-full md:h-screen flex flex-col  md:flex-col  items-center justify-center  mt-12 md:mt-0 ">
      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center   py-10 md:py-2 text-center md:text-left">
        <div className="w-11/12 md:w-6/12  ">
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
        <div className="w-11/12 md:w-6/12  flex justify-center items-center">
          <div className="w-full h-full flex justify-center items-center">
            <Test />
            <div className="h-3/6 absolute md:top-0  rotate sm:animate-none">
              <img
                src="https://i.ibb.co/vkn8mL4/3d9bebaf7f1b0b037855ce640bf91345-removebg-preview-2.png"
                alt="moon"
                className="astronaut"
              />
            </div>
          </div>
        </div>
      </div>
      <Slack />
    </div>
  );
}

export default Hero;
