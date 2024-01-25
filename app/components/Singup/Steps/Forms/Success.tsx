import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
const Success = () => {
  return (
    <div className="grid place-items-center justify-items-center py-6">
      <Image width={600} height={400} src={"/Illustration.svg"} alt="img" />
      <div className="py-4">
      <button className="flex items-center gap-2 bg-blue-500 rounded-lg px-6 py-2 text-white shadow-lg shadow-blue-500/50 hover:shadow-sm duration-300">
        <p>Let&apos;s Start</p>{" "}
        <Icon icon={"solar:arrow-right-outline"} fontSize={24} />
      </button>
      </div>
    </div>
  );
};

export default Success;
