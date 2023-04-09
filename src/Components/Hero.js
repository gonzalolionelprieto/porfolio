import React from "react";
import Test from "../Test";
import { IoLogoLinkedin, IoReader } from "react-icons/io5";
import Slack from "./Slack";
import { Link } from "react-router-dom";

function Hero({ name, greeting }) {
  return (
    <div className="h-full md:h-screen flex flex-col  md:flex-col  items-center justify-center  mt-12 md:mt-0  ">
      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center   py-10 md:py-2 text-center md:text-left">
        <div className="w-11/12   ">
          <h1 className=" w-10/12 font-bold text-5xl leading-tight text-gray-900 dark:text-slate-100 dark:md:border-spacing-3 dark:border-b-2 dark:border-b-fuchsia-400 py-4">
            {name}
          </h1>

          <p className=" w-full md:w-10/12  text-xl font-semibold text-gray-800 dark:text-slate-100   py-5">
            {greeting}
          </p>
          <div className="w-4/12 flex flex-row md:justify-start  items-center  md:border-spacing-3 dark:border-t-2 dark:border-t-fuchsia-400">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/gonzalolionelprieto/"
              className="container-icon py-5  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 "
            >
              <IoLogoLinkedin fontSize="2.5em" className="icon" />
            </Link>
            <Link
              target="_blank"
              to={
                "https://drive.google.com/file/d/1Nljq-XUTE1D9gLpQZQJc6Kht5Cx145WS/view?usp=share_link"
              }
              href="/#"
              className="container-icon ml-3 py-5  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 "
            >
              <IoReader fontSize="2.5em" className="icon" />
            </Link>
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
