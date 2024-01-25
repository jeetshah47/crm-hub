import React from "react";

type ColProps = {
  children: React.ReactNode;
};

const Col = ({ children }: ColProps) => {
  return <div className="grid grid-cols-2 h-screen">{children}</div>;
};

export default Col;
