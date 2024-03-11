"use client";
import Link from "next/link";
import React from "react";
import SidebarList from "./SidebarList";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="hidden md:block md:w-96 h-screen pt-4 px-4">
      <Link href={"/app"} className="text-2xl font-semibold">
        Media Tracker
      </Link>
      <SidebarList />
    </div>
  );
};

export default Sidebar;
