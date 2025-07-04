"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to ButterflyOS</h1>
      <p className="text-lg text-center max-w-xl mb-6 text-muted-foreground">
        A poetic, minimal and powerful Linux experience by Butterfly STUDIO.
      </p>
      <div className="flex gap-4 mb-6">
        <Button variant="default">Download</Button>
        <Button variant="outline">Learn More</Button>
      </div>
      <Button
        variant="ghost"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        <span className="ml-2">Toggle Theme</span>
      </Button>
    </main>
  );
}