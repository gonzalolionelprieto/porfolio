import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full mx-auto h-32 flex justify-around items-center md:bg-zinc-800">
      <h3 className="bold text-slate-50 font-bold text-lg">
       Creado por Gonzalo Prieto
      </h3>
      <div className="flex ">
        <Link to={"https://github.com/gonzalolionelprieto"}>
        <IoLogoGithub color="#fff" fontSize="2em" className="mx-2" />
        </Link>
        
        <Link to={"https://www.linkedin.com/in/gonzalolionelprieto/"}>
        <IoLogoLinkedin color="#fff" fontSize="2em" className="mx-2" />
        </Link>
        
      </div>
    </div>
  );
}
