"use client";

import React from "react";
import { SidebarItems } from "./constants/SidebarItem";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  return (
    <div className="h-screen grid grid-cols-1 justify-items-center py-4 text-secondary ">
      <ul>
        {SidebarItems.map((item) => (
          <li key={item.id} className="flex items-center gap-4 text-lg py-3">
            <Icon icon={item.icon} />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
