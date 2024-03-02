import React, { useState } from "react";
import FilterCard from "./FilterCard";
import { Icon } from "@iconify/react";
import Link from "next/link";

const FilterGroup = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [filters, setFilters] = useState([
    {
      id: "PUUUDI256",
      label: "Medical App",
      isActive: true,
    },
    {
      id: "PUUUDI287",
      label: "Testing Backend",
      isActive: false,
    },
    {
      id: "PUUUDI268",
      label: "Production Deployement",
      isActive: false,
    },
  ]);
  return (
    <div className="bg-white h-full rounded-3xl">
      <div>
        <div className="px-6 py-4 flex items-center justify-between">
          <p className=" font-bold">Current Projects</p>
          <Link
            className="bg-primary-blue text-white p-2 rounded-xl"
            href={"/app/jobs/add-job"}
          >
            <Icon icon={"streamline:add-1-solid"} />
          </Link>
        </div>
        <div className="h-px bg-blue-chalk" />
      </div>
      <div className="px-2 py-2">
        {filters.map((filter) => (
          <FilterCard
            key={filter.id}
            label={filter.label}
            id={filter.id}
            isActive={filter.isActive}
          />
        ))}
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default FilterGroup;
