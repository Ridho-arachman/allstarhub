"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

const Sun = dynamic(() => import("lucide-react").then((mod) => mod.Sun), {
  ssr: false,
});

const Moon = dynamic(() => import("lucide-react").then((mod) => mod.Moon), {
  ssr: false,
});

const link = [
  {
    name: "Home Page",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "More Options",
    href: "",
  },
];

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const handleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-10 border-b bg-background shadow-inner">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          AllStarHub
        </Link>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex items-center space-x-4">
            {link.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild>
                  <Link href={item.href} className="hover:underline">
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={handleDarkMode}>
            {theme === "light" ? <Moon /> : <Sun />}
          </Button>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="sm">
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center justify-between">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div>
                <NavigationMenu>
                  <NavigationMenuList className="flex flex-col space-y-4">
                    {link.map((item, index) => (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink asChild>
                          <Link href={item.href} className="hover:underline">
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <SheetFooter className="grid w-full grid-cols-2 gap-4">
                <Button
                  className="text-white"
                  onClick={() => router.push("/login")}
                >
                  Sign-In
                </Button>
                <Button
                  className="text-white"
                  onClick={() => router.push("/register")}
                >
                  Sign-Up
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Button
            variant="default"
            size="sm"
            onClick={() => router.push("/login")}
            className="hidden text-white md:block"
          >
            Sign-In
          </Button>
        </div>
      </div>
    </header>
  );
}
