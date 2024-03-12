"use client";
import React, { useEffect, useRef } from "react";
import { SidebarItems } from "./constants/SidebarItem";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLInputElement>(null);

  return (

    <div className="h-full py-4 px-4 text-secondary bg-white border border-blue-500 drop-shadow-sm">
    <ul className="w-full">
      {SidebarItems.map((item) => (
        <Link
          href={"/app" + item.path}
          key={item.id}
          className={`flex items-center rounded-md px-8 gap-4 font-semibold text-lg py-3 hover:bg-primary-blue hover:bg-opacity-10 hover:text-primary-blue ${
            pathname.includes(item.path) &&
            " bg-primary-blue text-primary-blue"
          } ${pathname.includes(item.path) && " bg-opacity-10"}`}
        >
          <Icon icon={item.icon} />
          <p>{item.title}</p>
        </Link>
      ))}
    </ul>
  </div>


  );
};

export default Sidebar;
