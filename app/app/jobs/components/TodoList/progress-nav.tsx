import React from "react";
import { Progress } from "./progress";

const ProgressNav = () => {
  //   const [currentProgress, setCurrentProgress] = useState('')
  return (
    <div className="flex  justify-between">
      {Progress.map((title) => (
        <div
          key={title.type}
          className="border-4 border-white border-solid bg-blue-chalk rounded-3xl py-2 px-16"
        >
          <p className="font-bold">{title.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgressNav;
