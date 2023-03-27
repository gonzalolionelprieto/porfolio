import React from "react";

export default function About({ img, title, description }) {
  return (
    <div className="bg-white rounded-lg  overflow-hidden grid md:grid-rows-1 md:grid-cols-2 md:gap-10 py-5">
      <div className="bg-white  md:h-auto md:w-full  rounded-3xl p-3  ">
        <img className="w-full rounded-xl " src={img} alt={title} />

        <div className="circle sm:hidden md:flex">
          <img src="https://stefantopalovicdev.vercel.app/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg" alt="" />
        </div>
      </div>
      <div className="p-2 flex flex-col  items-center align-middle">
        <h5 className="md:w-full text-xl font-bold text-sky-600">About me</h5>
        <h3 className="font-bold text-2xl my-4">{title}</h3>
        <p className="text-md ">{description}</p>
      </div>
    </div>
  );
}
