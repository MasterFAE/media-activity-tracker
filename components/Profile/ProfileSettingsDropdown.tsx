"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  EllipsisVerticalIcon,
  PercentIcon,
  LayoutListIcon,
  PenIcon,
  SettingsIcon,
} from "lucide-react";

type Props = {
  user: any;
};

const ProfileSettingsDropdown = (props: Props) => {
  // TODO
  /* Eğer kullanıcının kendi profiliyse ayarları, değilse şikayet vs*/

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVerticalIcon className="w-6 h-6 p-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[150px]">
        <DropdownMenuLabel>Profile Menu</DropdownMenuLabel>
        <DropdownMenuItem>
          <PenIcon className="w-3 h-3 mr-2" />
          Edit Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon className="w-3 h-3 mr-2" />
          Account Options
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileSettingsDropdown;
