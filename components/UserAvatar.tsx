import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {
  username: string;
  avatarUrl: string;
};

const UserAvatar = ({ username, avatarUrl }: Props) => {
  return (
    <Avatar>
      <AvatarImage src={avatarUrl} />
      <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
