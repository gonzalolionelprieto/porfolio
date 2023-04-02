import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="w-full mx-auto h-32 flex justify-around items-center md:bg-zinc-800">
      <h3 className="bold text-slate-50 font-bold text-lg">
        Copyright © 2023. All rights are reserved
      </h3>
      <div className="flex ">
        <IoLogoGithub color="#fff" fontSize="2em" className="mx-2" />
        <IoLogoLinkedin color="#fff" fontSize="2em" className="mx-2" />
      </div>
    </div>
  );
}
