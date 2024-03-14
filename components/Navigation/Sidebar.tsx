"use client";
import Link from "next/link";
import React from "react";
import SidebarList from "./SidebarList";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import useSidebar from "@/hooks/use-sidebar";

const Sidebar = () => {
  const { sidebarState, dispatch } = useSidebar();
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <>
      {sidebarState.isOpen ? (
        <div className={"md:w-96 h-screen pt-4 px-4 hidden md:block border-r"}>
          <div className="flex items-center justify-between">
            <Link href={"/app"} className="text-2xl font-semibold">
              Media Tracker
            </Link>
            <Button
              variant={"ghost"}
              size={"icon"}
              onClick={() => toggleSidebar()}>
              <ChevronLeftIcon />
            </Button>
          </div>
          <SidebarList />
        </div>
      ) : (
        <Button
          className="hidden md:flex absolute top-[72px] left-0 m-1"
          variant={"ghost"}
          size={"icon"}
          onClick={() => toggleSidebar()}>
          <ChevronRightIcon />
        </Button>
      )}
    </>
  );
};

export default Sidebar;
