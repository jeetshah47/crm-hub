"use client";

import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Profile from "./Profile";
import Navbar from "../navbar/Navbar";
import {Icon} from "@iconify/react"
const Header = () => {
  return (
    <div className="flex flex-initial items-center  py-2 justify-end relative w-full">
      {/* <SearchBar /> */}
      <Profile />
    </div>
  );
};

export default Header;
