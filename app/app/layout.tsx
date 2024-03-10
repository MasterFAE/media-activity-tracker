import React from "react";

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <main className="lg:w-[80%] bg-white dark:bg-black min-h-screen mx-auto lg:my-6 border rounded-md">
      {children}
    </main>
  );
};

export default AppLayout;
