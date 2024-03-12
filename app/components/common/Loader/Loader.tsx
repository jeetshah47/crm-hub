import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center bg-slate-300 bg-opacity-40 h-full w-full">
      <ScaleLoader color="#3F8CFF" />
    </div>
  );
};

export default Loader;
