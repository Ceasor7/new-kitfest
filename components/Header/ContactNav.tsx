import React from "react";
import {
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const ContactNav = () => {
  return (
    <div className=" bg-[#b40000] dark:bg-transparent">
      <div className=" mx-auto max-w-5xl flex justify-between items-center py-4 px-6">
        <div className="flex text text-primary-foreground items-center gap-x-2">
          <Phone className="w-5 h-5 " />
          <span className="italic">(+254) 794 785768</span>
        </div>

        <div className="flex text-primary-foreground items-center gap-x-2">
          <MapPin className="w-5 h-5 " />
          <span className="italic">Maendeleo House, Loita Street, Nairobi</span>
        </div>

        <div className="flex text-primary-foreground gap-x-4">
          <a
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactNav;
