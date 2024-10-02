"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Themetoggler from "../Themetoggler";
import { Button } from "../ui/button";
import Link from "next/link";

const SiteHeader = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down, hide the header
        setHideHeader(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up, show the header
        setHideHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`${
        hideHeader
          ? "-translate-y-full"
          : "translate-y-0 py-6 dark:bg-transparent"
      } fixed top-0 left-0 w-full z-30 transition-transform duration-500 ${
        pathname === "/" ? "bg-[#fef9f5]" : "bg-white shadow-lg dark:bg-accent"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden sm:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underLineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <Themetoggler />
            <Button>
              <Link href="/festival">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
