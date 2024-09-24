"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Themetoggler from "../Themetoggler";

const SiteHeader = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${
        pathname === "/" ? " bg-[#fef9f5]" : ""
      }`}
    >
      <div className=" max-w-5xl mx-auto">
        <div className=" flex justify-between items-center">
          <Logo />
          <div className=" flex items-center gap-x-6">
            <Nav
              containerStyles="hidden sm:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underLineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <Themetoggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
