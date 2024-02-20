"use client";
import React from "react";
import { SidebarItems } from "./constants/SidebarItem";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full py-4 px-4 text-secondary bg-white drop-shadow-sm ">
      <ul className="w-full">
        {SidebarItems.map((item) => (
          <Link
            href={"/app" + item.path}
            key={item.id}
            className={`flex items-center rounded-md px-2 gap-4 text-lg font-semibold  py-3 hover:bg-primary-blue hover:bg-opacity-10 hover:text-primary-blue ${
              pathname.includes(item.path) &&
              " bg-primary-blue text-primary-blue"
            } ${pathname.includes(item.path) && "bg-opacity-10"}`}
          >
            <Icon icon={item.icon}  />
            <p>{item.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
