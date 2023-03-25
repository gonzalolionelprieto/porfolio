import React from "react";

function Container({ children }) {
  return (
    <div className="container min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-6xl mx-auto ">
        <div className="mx-auto flex  md:justify-center items-center">
          <div className="w-full ">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Container;
