import React from "react";
import preloader from "../assets/Loader.svg";

const Loader = () => {
  return (
    <div className="w-full flex justify-center">
      <img
        src={preloader}
        alt="preloader"
        width={40}
        height={40}
        className="text-center"
      />
    </div>
  );
};

export default Loader;
