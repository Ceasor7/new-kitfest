import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type Props = {
  containerStyles: string;
  linkStyles: string;
  underLineStyles: string;
};

const links = [
  { path: "/", name: "home" },
  { path: "/festival", name: "about the festival" },
  { path: "/team", name: "our team" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underLineStyles }: Props) => {
  const path = usePathname();
  return (
    <nav className={containerStyles}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize ${linkStyles}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underLine"
              className={underLineStyles}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
