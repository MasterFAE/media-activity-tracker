"use client";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { userMock } from "@/model/mock";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const scrolled = useScroll(5);
  return (
    <header
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b`,
        {
          "backdrop-blur-lg": scrolled,
        }
      )}>
      <div className="flex h-[60px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center">
            <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
            <span className="font-bold text-xl flex ">Logo</span>
          </Link>
        </div>

        {userMock.loggedIn ? (
          <div className="hidden md:block">
            <Avatar>
              <AvatarImage src={userMock.avatarUrl} />
              <AvatarFallback>{userMock.username}</AvatarFallback>
            </Avatar>
          </div>
        ) : (
          <div className="hidden md:block">
            <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
              <span className="font-semibold text-sm">Login</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
