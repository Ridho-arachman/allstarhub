"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-36 w-full border-t py-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4 md:px-0">
        <div>
          <h2 className="text-2xl font-bold">AllStarHub</h2>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {["Home", "About Us", "Contact", "Support", "FAQ"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {["Blog", "Guides", "Webinars", "Case Studies", "Ebooks"].map(
              (item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Stay Connected & Subscribe */}
        <div>
          <h3 className="text-lg font-semibold">Stay Connected</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {["Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube"].map(
              (item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <h3 className="mt-6 text-lg font-semibold">Subscribe</h3>
          <p className="mt-1 text-sm">
            Join our newsletter for the latest updates and features.
          </p>
          <div className="mt-2 flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t pt-4 text-center text-sm">
        <p>&copy; 2024 All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          {[
            { icon: Facebook, href: "#" },
            { icon: Instagram, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Youtube, href: "#" },
          ].map(({ icon: Icon, href }, index) => (
            <Link
              key={index}
              href={href}
              className="text-gray-600 hover:text-black"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
        <div className="mt-2 flex justify-center space-x-4 text-sm">
          {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
            (item) => (
              <Link key={item} href="#" className="hover:underline">
                {item}
              </Link>
            ),
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
