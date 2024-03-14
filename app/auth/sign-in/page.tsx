import React from "react";
import LoginForm from "@/components/Auth/LoginForm";
import { Separator } from "@/components/ui/separator";

const LoginPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-col space-y-4">
        <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center">
          LOGO
        </div>
        <h1 className="text-center text-3xl font-semibold mb-2">Sign In</h1>
        <Separator />
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
