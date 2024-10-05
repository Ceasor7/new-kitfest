import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className=" cursor-pointer">
      <Link href="/">
        <Image
          src="/kitfest-logo.svg"
          alt="kitfest logo"
          width={100}
          height={70}
        />
      </Link>
    </div>
  );
};

export default Logo;
