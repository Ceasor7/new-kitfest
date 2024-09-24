import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src="/kitfest-logo.svg"
        alt="kitfest logo"
        width={100}
        height={70}
      />
    </div>
  );
};

export default Logo;
