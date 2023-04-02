import React from "react";

function Container({ children }) {
  return (
    <div className="contaainer  min-h-screen flex flex-col justify-center items-center mx-auto">
      <div className="w-full max-w-6xl mx-auto ">
        <div className="mx-auto flex  md:justify-center items-center">
          <div className="w-10/12 mx-auto ">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Container;
