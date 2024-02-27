"use client";
import React from "react";
import { SidebarItems } from "./constants/SidebarItem";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathname = usePathname();

  return (

    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
          {SidebarItems.map((item) => (
            <li key={item.id}>
              <Link
                href={"/app" + item.path}
                key={item.id}
                className={`flex items-center rounded-md px-2 gap-4 text-lg font-semibold  py-3 hover:bg-primary-blue hover:bg-opacity-10 hover:text-primary-blue ${pathname.includes(item.path) &&
                  " bg-primary-blue text-primary-blue"
                  } ${pathname.includes(item.path) && "bg-opacity-10"}`}
              >
                <Icon icon={item.icon} />
                <p>{item.title}</p>
              </Link>
            </li>
          ))}
          {/* Sidebar content here */}


        </ul>
      </div>
    </div>


  );
};

export default Sidebar;
