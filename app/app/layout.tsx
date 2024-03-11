import Sidebar from "@/components/Navigation/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <div className="flex ">
      <Sidebar />

      <main className=" bg-white dark:bg-black min-h-screen w-full  lg:my-3 border rounded-md">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
