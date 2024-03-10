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
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import {
  EllipsisVerticalIcon,
  PercentIcon,
  LayoutListIcon,
  TrashIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { DialogHeader, DialogFooter } from "../ui/dialog";
import { SavedMock } from "@/model/mock";

type Props = {
  item: SavedMock;
};

const SavedCardDropdown = ({ item }: Props) => {
  const handleDelete = () => {
    console.log("Deleted");
  };

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
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          className="text-red-600">
          <Dialog>
            <DialogTrigger>
              <div className="flex items-center">
                <TrashIcon className="w-3 h-3 mr-2" />
                Delete
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  everything related to this item.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant={"destructive"} onClick={handleDelete}>
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SavedCardDropdown;
