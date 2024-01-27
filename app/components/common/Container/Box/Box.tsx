import React from "react";

type BoxProps = {
  children: React.ReactNode;
};

const Box = ({ children }: BoxProps) => {
  return <div className="py-6 px-8 rounded-3xl bg-white">{children}</div>;
};

export default Box;
