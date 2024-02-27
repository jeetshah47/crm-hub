"use client";

import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Profile from "./Profile";
import Navbar from "../navbar/Navbar";
import {Icon} from "@iconify/react"
const Header = () => {
  return (
    <div className="flex flex-initial items-center  py-2 justify-between  w-full">
      {/* <SearchBar /> */}
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          <Icon icon="eva:menu-fill" />
        </label>

      </div>
      <Profile />
    </div>
  );
};

export default Header;
