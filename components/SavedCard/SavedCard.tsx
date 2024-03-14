"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { SavedMock } from "@/types/mock";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import SavedCardDropdown from "./SavedCardDropdown";

dayjs.extend(relativeTime);

type Props = {
  item: SavedMock;
};

const SavedCard = ({ item }: Props) => {
  const progress = (item.totalProgress / item.duration) * 100;

  return (
    <div className="flex w-full flex-col gap-4 p-4 border rounded items-center">
      <div className="flex flex-col gap-y-2 w-full">
        {/* Header */}
        <div className="flex flex-col items-center gap-1 relative">
          <Badge variant={"secondary"}>{item.category.name}</Badge>

          <h2 className="font-medium">{item.name}</h2>
          <p className="tertiary-text">
            {dayjs(item.createdAt).format("DD MMM YY")}
          </p>
          <p className="tertiary-text">
            Last update {dayjs(item.updatedAt).fromNow()}
          </p>

          <div className="absolute top-0 right-0">
            <SavedCardDropdown item={item} />
          </div>
        </div>
        {/* Body */}
        <div className="flex items-center gap-x-4">
          <Progress value={progress} className="h-2" />
          <p className="text-sm">
            {item.totalProgress}/{item.duration}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SavedCard;
