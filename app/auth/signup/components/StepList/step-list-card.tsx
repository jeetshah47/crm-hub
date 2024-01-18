import React from "react";

type StepListCardProps = {
  id: number;
  label: string;
  activeId: number;
};

const StepListCard = ({ label, activeId, id }: StepListCardProps) => {
  return (
    <div className={Number(activeId) === id ? "opacity-100" : "opacity-50"}>
      <div className="flex flex-1 items-center space-x-5 py-3">
        <div className="w-6 h-6 rounded-full border-2 border-white bg-white bg-opacity-25" />
        <div>
          <p className="text-white">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default StepListCard;
