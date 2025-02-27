"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const Sun = dynamic(() => import("lucide-react").then((mod) => mod.Sun), {
  ssr: false,
});

const Moon = dynamic(() => import("lucide-react").then((mod) => mod.Moon), {
  ssr: false,
});

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const hideNavbarRoutes = ["/login", "/register"];

  if (hideNavbarRoutes.includes(pathname)) {
    return null;
  }

  return (
    <header className="fixed left-0 right-0 top-0 border-b bg-background">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          AllStarHub
        </Link>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex items-center space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/dashboard" className={cn("hover:underline")}>
                  Dashboard
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className={cn("hover:underline")}>
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => router.push("/login")}
          >
            Sign-In
          </Button>
        </div>
      </div>
    </header>
  );
}
