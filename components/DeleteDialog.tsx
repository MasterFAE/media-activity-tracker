import React from "react";
import { TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
import DialogWithDrawer from "./DialogWithDrawer";

type Props = {
  handleDelete: any;
  message?: string;
  title?: string;
};

const DeleteDialog = ({ handleDelete, message, title }: Props) => {
  return (
    <DialogWithDrawer
      title={title || "Are you sure?"}
      children={
        message ||
        "This action cannot be undone. This will permanently delete everything related to this item."
      }
      footer={
        <Button variant={"destructive"} onClick={handleDelete}>
          Delete
        </Button>
      }
      trigger={
        <div className="flex items-center w-full">
          <TrashIcon className="w-3 h-3 mr-2" />
          Delete
        </div>
      }></DialogWithDrawer>
  );
};

export default DeleteDialog;
