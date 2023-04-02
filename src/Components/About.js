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

        <div className="p-2 flex flex-col justify-center items-center ">
          <h5 className="md:w-full text-xl font-bold text-sky-600">About me</h5>
          <h3 className="font-bold text-2xl my-4">{title}</h3>
          <p className="text-md ">{description}</p>
        </div>
      </div>
    </div>
  );
}
