import React, { useState } from "react";
import { Icon } from "@iconify/react";

type FilterProps = {
  isActive: boolean;
  label: string;
  id: string;
};

const ProjectCard = ({ label, id, isActive }: FilterProps) => {
  return (
    <div className="py-1 cursor-pointer">
      <div
        className={`${isActive && "bg-white-back "} rounded-xl px-4 py-2 hover:bg-white-back duration-300`}
      >
        <p className="text-sm text-secondary">{id.substring(0,8)}</p>
        <p className={`text-xl py-1 ${isActive && "font-bold"}`}>{label.substring(0,15)} {( label.length > 15 && <span>....</span>)}</p>
        {isActive && (
          <div>
            <div className="flex items-center gap-0.5 text-primary-blue font-bold">
              <p>View details</p>
              <Icon icon={"mingcute:right-fill"} width={16} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;