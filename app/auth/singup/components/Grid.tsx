import React from "react";

type GridProps = {
    children: React.ReactNode
}
const Grid = ({ children }: GridProps) => {
    return (<div className="grid grid-cols-5 gap-6 h-screen bg-white-back p-5">{children}</div>);
}

export default Grid;