import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import UserAvatar from "../UserAvatar";
import { SidebarItems } from "@/constants";
import SidebarItem from "./SidebarItem";
import SidebarList from "./SidebarList";

type Props = {};
const username = "Zırzop";
const MobileNavbar = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="flex space-x-2 items-center">
              <UserAvatar
                username={username}
                avatarUrl="https://github.com/shadcn.png"
              />
              <span className="ml-2">{username}</span>
            </div>
          </SheetTitle>
          <div className="">
            <SidebarList />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
