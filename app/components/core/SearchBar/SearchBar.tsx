import React from "react";
import { Icon } from "@iconify/react";
const SearchBar = () => {
  return (
    <div className="bg-white w-2/5">
      <div className="rounded-xl shadow-md  py-3 px-4  flex items-center space-x-3 text-secondary">
        <Icon fontSize={24} color="black" icon="majesticons:search-line" />
        <input
          placeholder="Search"
          className="outline-none  placeholder:text-secondary"
        />
      </div>
    </div>
  );
};

export default SearchBar;
