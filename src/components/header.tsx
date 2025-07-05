"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";


export function Header() {
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();

    const [mounted, setMounted] = useState(false);

      const routeNameMap: Record<string, string> = {
    "/": "Home",
    "/panoramica": "Panoramica",
    "/assistenza": "Assistenza",
    "/contatti": "Contatti",
  };

  const currentPage = routeNameMap[pathname] ?? "Naviga";

    useEffect(() => {
      setMounted(true);
    }, []);

    return(
<header className="w-full px-6 py-4 border-b">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <Image src="/img/logo.png" alt="ButterflyOS logo" width={32} height={32} unoptimized/>
            <span className="font-semibold text-lg hidden md:inline">ButterflyOS</span>
          </div>
          {/*Desktop*/}
          <div className="hidden md:flex justify-center flex-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className={pathname === "/" ? "text-primary font-semibold" : "text-foreground"}
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/panoramica"
                    className={pathname === "/panoramica" ? "text-primary font-semibold" : "text-foreground"}
                  >
                    Panoramica
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/assistenza"
                    className={pathname === "/assistenza" ? "text-primary font-semibold" : "text-foreground"}
                  >
                    Assistenza
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/contatti"
                    className={pathname === "/contatti" ? "text-primary font-semibold" : "text-foreground"}
                  >
                    Contatti
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* Mobile */}
        <div className="md:hidden">
          <Select onValueChange={(value) => window.location.href = value}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={currentPage} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="/">Home</SelectItem>
              <SelectItem value="/panoramica">Panoramica</SelectItem>
              <SelectItem value="/assistenza">Assistenza</SelectItem>
              <SelectItem value="/contatti">Contatti</SelectItem>
            </SelectContent>
          </Select>
        </div>
          <div className="flex justify-end flex-1">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </Button>
            )}
          </div>
        </div>
      </header>
    );
}