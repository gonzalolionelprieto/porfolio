import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GoMailRead } from "react-icons/go";

export default function Contact() {
  return (
    <div
      id="contact"
      className="h-screen md:h-[100]px flex flex-col justify-center items-center"
    >
      <div className="md:w-full flex flex-col justify-center md:justify-start mx-auto md:mr-auto">
        <h5 className="text-xl font-bold text-sky-600 dark:text-fuchsia-400">
          Contacto
        </h5>
        <h3 className="font-bold text-2xl my-4 dark:text-slate-100">
          No dudes en contactarme!
        </h3>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-start items-center flex-wrap">
        <div className=" flex flex-col md:flex-row justify-center items-center m-5">
          <div className="my-5  md:mr-5 ">
            <FaMapMarkedAlt
              color="#f1f5f9"
              fontSize="2.5em"
              className="html"
            ></FaMapMarkedAlt>
          </div>
          <div className="flex flex-col justify-center   md:justify-start items-center md:items-start dark:text-slate-100">
            <h3 className="md:text-start">Lugar</h3>
            <h3 className="text-left">Buenos Aires, Argentina</h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center m-5">
          <div className="my-5 md:mr-5">
            <GoMailRead
              color="#f1f5f9"
              fontSize="2.5em"
              className="html"
            ></GoMailRead>
          </div>
          <div className="flex flex-col justify-start dark:text-slate-100">
            <a href="mailto:Gonzalolionelprieto@gmail.com">
              Gonzalolionelprieto@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
