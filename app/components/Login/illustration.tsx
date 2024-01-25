import Image from "next/image";
import React from "react";

const Illustration = () => {
  return (
    <div className="flex bg-blue-500 items-center justify-center text-white py-12">
      <div className="w-3/5">
        <p className="text-4xl  font-bold">Woorkroom</p>
        <div className="py-12">
          <p className="text-5xl font-semibold leading-normal">
            Your place to work Plan. Create. Control.
          </p>
        </div>
        <div>
            <Image width={600} height={400} src={"/Illustration.svg"} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Illustration;
