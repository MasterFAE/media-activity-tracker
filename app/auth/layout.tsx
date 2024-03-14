import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <main className="flex  justify-center min-h-screen min-w-full px-4 ">
      <div className="bg-black max-w-2xl w-full p-8 md:px-16 rounded-lg border h-fit mt-8">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
