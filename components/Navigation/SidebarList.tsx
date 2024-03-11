import { SidebarItems } from "@/constants";
import React from "react";
import SidebarItem from "./SidebarItem";

const SidebarList = () => {
  return (
    <div className="flex flex-col space-y-2 mt-2">
      {SidebarItems.map((item, index) => (
        <SidebarItem item={item} key={index} />
      ))}
    </div>
  );
};

export default SidebarList;
