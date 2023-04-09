import React from "react";
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoHtml5,
} from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

export default function Slack() {
  return (
    <div className=" w-full flex flex-wrap flex-column md:flex-row  justify-center md:justify-start items-center md:mr-auto">
      <div className="mx-auto md:mx-0  flex justify-center items-center">
        <h3 className="w-full  text-lg font-bold text-gray-800 dark:text-slate-100 flex justify-center md:justify-start py-5 md:pr-5 border-b-2 border-b-slate-700   md:border-b-0 md:border-r-2 md:dark:border-r-fuchsia-400">
          Tech Stack
        </h3>
      </div>
      <div className=" flex flex-wrap md:flex-nowrap justify-center mx-auto md:mx-0 mt-5 md:mt-0">
        <div className="container-icon py-2 md:pl-8 px-2   ">
          <div className="w-full flex flex-col justify-center items-center relative transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <IoLogoHtml5 color="#f1f5f9" fontSize="2.5em" className="html" />
            <p className="tracking-widest opacity-0 absolute inset-0 flex justify-center items-center transition-opacity duration-200 bg-fuchsia-500 bg-opacity-100 text-white hover:opacity-100 font-bold">
              HTML
            </p>
          </div>
        </div>
        <div className="container-icon py-2 px-2 mx-3  ">
          <div className="w-full flex flex-col justify-center items-center relative transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <IoLogoCss3 color="#f1f5f9" fontSize="2.5em" className="icon" />
            <p className="tracking-widest opacity-0 absolute inset-0 flex justify-center items-center transition-opacity duration-200 bg-fuchsia-500 bg-opacity-100 text-white hover:opacity-100 font-bold">
              CSS
            </p>
          </div>
        </div>
        <div className="container-icon py-2 px-2 mx-3  ">
          <div className="w-full flex flex-col justify-center items-center relative transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <IoLogoJavascript
              color="#f1f5f9"
              fontSize="2.5em"
              className="javascript"
            />
            <p className="tracking-widest opacity-0 absolute inset-0 flex justify-center items-center transition-opacity duration-200 bg-fuchsia-500 bg-opacity-100 text-white hover:opacity-100 font-bold">
              JAVASCRIPT
            </p>
          </div>
        </div>
        <div className="container-icon py-2 px-2 mx-3  ">
          <div className="w-full flex flex-col justify-center items-center relative transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <IoLogoReact color="#f1f5f9" fontSize="2.5em" className="icon" />
            <p className="tracking-widest opacity-0 absolute inset-0 flex justify-center items-center transition-opacity duration-200 bg-fuchsia-500 bg-opacity-100 text-white hover:opacity-100 font-bold">
              REACT
            </p>
          </div>
        </div>
        <div className="container-icon py-2 px-2 mx-3  ">
          <div className="w-full flex flex-col justify-center items-center relative transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <SiTailwindcss color="#f1f5f9" fontSize="2.5em" className="icon" />
            <p className="tracking-widest opacity-0 absolute inset-0 flex justify-center items-center transition-opacity duration-200 bg-fuchsia-500 bg-opacity-100 text-white hover:opacity-100 font-bold">
              TAILNDWIND
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
