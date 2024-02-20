import React from "react";
import FilterCard from "./FilterCard";

const FilterGroup = () => {
  const isActive = true;
  return (
    <div className="bg-white h-full rounded-3xl">
      <div>
        <p className="px-6 py-4 font-bold">Current Projects</p>
        <div className="h-px bg-blue-chalk" />
      </div>
      <div className="px-2 py-2">
        <FilterCard label="Medical App" id="PNUUID00112" isActive={true} />
        <FilterCard label="IOS App" id="PNUUID00122" isActive={false} />
        <FilterCard label="Web App" id="PNUUID0013" isActive={false} />
      </div>
    </div>
  );
};

export default FilterGroup;
