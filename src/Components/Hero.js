import React from "react";
import Test from "../Test";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

function Hero({ name, greeting, imageSrc }) {
  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center md:justify-between ">
      <div className=" md:w-6/12 flex flex-col justify-center items-center  px-6 py-10 md:py-2 text-center md:text-left">
        <h1 className=" w-full font-bold text-5xl leading-tight text-gray-900 ">
          {name}
        </h1>
        <p className=" w-full mt-4 text-xl font-semibold text-gray-800 ">
          {greeting}
        </p>
        <div className="w-full flex flex-row md:justify-start  items-center ">
          <a href="/#" className="container-icon py-5  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 ">
            <IoLogoLinkedin color="#292929" fontSize="2.5em"  className="icon"/>
          </a>
          <a href="/#" className="container-icon py-5 mx-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 ">
            <IoLogoGithub color="#292929" fontSize="2.5em" className="icon"/>
          </a>
        </div>
      </div>
      <div className="md:w-6/12   flex justify-center items-center">
        <Test />
      </div>
    </div>
  );
}

export default Hero;
