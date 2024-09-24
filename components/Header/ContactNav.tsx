import React from "react";
import {
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const ContactNav = () => {
  return (
    <div className=" mx-auto max-w-5xl">
      <div className="flex justify-between items-center py-4 px-6">
        <div className="flex items-center gap-x-2">
          <Phone className="w-5 h-5 text-primary " />
          <span className=" italic text-primary">+254 700 000 000</span>
        </div>

        <div className="flex gap-x-4">
          <a
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-5 h-5 " />
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-5 h-5 " />
          </a>
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 h-5 " />
          </a>
          <a
            href={siteConfig.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-5 h-5 " />
          </a>
          <a
            href={siteConfig.links.email}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 h-5 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactNav;
