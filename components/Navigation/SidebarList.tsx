import { AnonymousSidebarItems, SidebarItems } from "@/constants";
import React from "react";
import SidebarItem from "./SidebarItem";
import { userMock } from "@/model/mock";

const SidebarList = () => {
  return (
    <div className="flex flex-col space-y-2 mt-2">
      {(userMock.loggedIn ? SidebarItems : AnonymousSidebarItems).map(
        (item, index) => (
          <SidebarItem item={item} key={index} />
        )
      )}
    </div>
  );
};

export default SidebarList;
