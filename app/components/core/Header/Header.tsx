"use client";

import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Profile from "./Profile";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div className="flex flex-initial items-center  py-2 justify-between  w-full">
      {/* <SearchBar /> */}
      <Navbar />
      <Profile />
    </div>
  );
};

export default Header;
