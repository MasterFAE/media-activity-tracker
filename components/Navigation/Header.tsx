"use client";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { userMock } from "@/types/mock";
import Link from "next/link";
import React from "react";
import MobileNavbar from "./MobileNavbar";
import UserAvatar from "../UserAvatar";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Header = () => {
  const scrolled = useScroll(5);
  const path = usePathname();
  const isInApp = path.includes("/app");

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
        <div className="block md:hidden">
          <MobileNavbar />
        </div>

        <div className="hidden md:block">
          {isInApp ? (
            <UserAvatar
              username={userMock.username}
              avatarUrl={userMock.avatarUrl}
            />
          ) : (
            <div className="flex space-x-2">
              <Link href={"/auth/login"}>
                <Button variant={"secondary"}>Sign Up</Button>
              </Link>
              <Link href={"/auth/login"}>
                <Button>Sign In</Button>
              </Link>
            </div>
          )}
        </div>
        {}
      </div>
    </header>
  );
};

export default Header;
