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
} from "lucide-react";
import { SavedMock } from "@/types/mock";
import DeleteDialog from "../DeleteDialog";
import UpdateMediaDialog from "../Profile/UpdateMediaDialog";

type Props = {
  item: SavedMock;
};

const SavedCardDropdown = ({ item }: Props) => {
  const handleDelete = () => {};
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVerticalIcon className="w-6 h-6 p-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[150px]">
        <DropdownMenuLabel>Progress Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PercentIcon className="w-3 h-3 mr-2" />
          Change Status
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LayoutListIcon className="w-3 h-3 mr-2" />
          See Details
        </DropdownMenuItem>
        {/* 
          If preventDefault is not set,
          * dialog will close after clicking this
          * input inside the children will lose focus everytime the mouse moves
        */}
        <DropdownMenuItem
          onPointerLeave={(event) => event.preventDefault()}
          onPointerMove={(event) => event.preventDefault()}
          onSelect={(e) => e.preventDefault()}>
          <UpdateMediaDialog item={item} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          className="text-red-600 ">
          <DeleteDialog handleDelete={handleDelete} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SavedCardDropdown;
