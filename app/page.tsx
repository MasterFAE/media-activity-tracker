import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center mx-8 md:mx-0">
      <h1 className="font-bold text-3xl md:text-5xl text-primary">
        Progress Tracker
      </h1>
      <p className="font-light mt-2 text-base md:text-lg text-muted-foreground">
        Keep track of your progress in TV Series, Books & Movies.
      </p>
      <Link href={"auth/sign-in"}>
        <Button className="mt-8">Get Started</Button>
      </Link>
    </div>
  );
}
