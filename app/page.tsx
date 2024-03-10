import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <h1 className="font-bold text-5xl">Progress Tracker</h1>
      <p className="font-light mt-2 text-lg text-neutral-600 dark:text-neutral-400">
        Keep track of your progress in TV Series, Books & Movies.
      </p>
      <Button className="mt-8">Get Started</Button>
    </div>
  );
}
