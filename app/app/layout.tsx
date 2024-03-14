"use client";
import React from "react";
import Sidebar from "@/components/Navigation/Sidebar";

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className={`bg-white dark:bg-black min-h-screen w-full rounded-md`}>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
