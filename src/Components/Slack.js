import React from 'react';
import {
    
    IoLogoCss3,
    IoLogoJavascript,
    IoLogoReact,
    IoLogoHtml5,
  } from "react-icons/io5";
  import { SiTailwindcss } from "react-icons/si";

export default function Slack() {
  return (
    <div className=" md:w-10/12 flex flex-wrap flex-column md:flex-row  justify-center md:justify-start items-center md:mr-auto">
        <div className="mx-auto md:mx-0  flex justify-center items-center">
          <h3 className="w-full  text-lg font-bold text-gray-800 flex justify-center md:justify-start py-5 md:px-5 border-b-2 border-b-slate-700 md:border-b-0 md:border-r-2 md:border-r-slate-700">
            Tech Stack
          </h3>
        </div>
        <div className=" flex flex-wrap md:flex-nowrap justify-center mx-auto md:mx-0 mt-5 md:mt-0">
          <a
            href="/#"
            className="container-icon py-2 md:pl-8 px-2  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 "
          >
            <IoLogoHtml5 color="#292929" fontSize="2.5em" className="html" />
          </a>
          <a
            href="/#"
            className="container-icon py-2 px-2 mx-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 "
          >
            <IoLogoCss3 color="#292929" fontSize="2.5em" className="icon" />
          </a>
          <a
            href="/#"
            className="container-icon py-2 px-2 mx-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 "
          >
            <IoLogoJavascript
              color="#292929"
              fontSize="2.5em"
              className="javascript"
            />
          </a>
          <a
            href="/#"
            className="container-icon py-2 px-2 mx-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 "
          >
            <IoLogoReact color="#292929" fontSize="2.5em" className="icon" />
          </a>
          <a
            href="/#"
            className="container-icon py-2 px-2 mx-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 "
          >
            <SiTailwindcss color="#292929" fontSize="2.5em" className="icon" />
          </a>
        </div>
      </div>
  )
}
