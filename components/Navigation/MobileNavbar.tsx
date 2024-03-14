import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import UserAvatar from "../UserAvatar";
import SidebarList from "./SidebarList";
import { userMock } from "@/model/mock";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {userMock.loggedIn && (
              <div className="flex space-x-2 items-center">
                <UserAvatar
                  username={userMock.username}
                  avatarUrl={userMock.avatarUrl}
                />
                <span className="ml-2">{userMock.username}</span>
              </div>
            )}
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
