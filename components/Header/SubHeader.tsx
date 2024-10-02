"use client";
import React, { useEffect, useState } from "react";

type Props = {
  title: string;
};

const SubHeader = ({ title }: Props) => {
  const [showSubHeader, setShowSubHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowSubHeader(true);
      } else if (currentScrollY < lastScrollY) {
        setShowSubHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-transform duration-500 z-20 ${
        showSubHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-[#ffa54b] text-[#9f4500] py-6 mx-auto">
        <h2 className="text-lg font-semibold text-center">{title}</h2>
      </div>
      <div className="flex w-full h-2">
        <div className="flex-grow bg-[#7d0000]"></div>
        <div className="flex-grow bg-[#005925]"></div>
        <div className="flex-grow bg-[#860000]"></div>
        <div className="flex-grow bg-[#b59371]"></div>
        <div className="flex-grow bg-[#311808]"></div>
        <div className="flex-grow bg-[#b37334]"></div>
      </div>
    </div>
  );
};

export default SubHeader;
