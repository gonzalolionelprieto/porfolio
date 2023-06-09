import React from "react";

export default function About({ img, title, description }) {
  return (
    <div
      id="about"
      className=" h-screen  rounded-lg  overflow-hidden flex justify-center items-center"
    >
      <div className="md:w-full grid md:grid-rows-1 md:grid-cols-2 md:gap-10 md:align-middle">

        <div className="w-full max-h-min flex items-center ">
          <img className="w-full rounded-xl " src={img} alt={title} />

          
        </div>

        <div className=" flex flex-col justify-center items-center ">
          <h5 className="md:w-full text-xl font-bold text-sky-600 dark:text-fuchsia-400">About me</h5>
          <h3 className="w-full font-bold text-2xl my-4 dark:text-slate-100">{title}</h3>
          <p className="text-md w-full dark:text-slate-100">{description}</p>
        </div>
      </div>
    </div>
  );
}
