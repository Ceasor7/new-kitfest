import { CircleArrowUp } from "lucide-react";
import React from "react";

const socialsLinks = [
  {
    heading: "Stay Connected",
    data: [
      { title: "Facebook", link: "https://www.facebook.com" },
      { title: "Twitter", link: "https://www.twitter.com" },
      { title: "Instagram", link: "https://www.instagram.com" },
      { title: "LinkedIn", link: "https://www.linkedin.com" },
      { title: "YouTube", link: "https://www.youtube.com" },
    ],
  },
];

const festivalOverview = [
  {
    heading: "Festival Overview",
    data: [
      { title: "Participation", link: "/participation" },
      { title: "Schedule", link: "/schedule" },
      { title: "Performers", link: "/performers" },
      { title: "Tickets", link: "/tickets" },
      { title: "Contact Us", link: "/contact" },
    ],
  },
];

const importantLinks = [
  {
    heading: "Important Links",
    data: [
      { title: "About Kitfest", link: "/about" },
      { title: "Terms of Service", link: "/terms" },
      { title: "Privacy Policy", link: "/privacy" },
      { title: "FAQ", link: "/faq" },
      { title: "Support", link: "/support" },
      { title: "Blog", link: "/blog" },
    ],
  },
];

const SiteFooter = () => {
  return (
    <div className="flex flex-col mx-auto max-w-5xl p-4">
      <div className="flex justify-center text-center items-center mb-4">
        <CircleArrowUp size={40} className="animate-bounce" />
      </div>
      <hr className=" mb-16" />
      <div className="grid grid-cols-1 lg:grid-cols-3 mb-5 gap-4">
        <div className="flex flex-col">
          <h3 className="font-bold">{socialsLinks[0].heading}</h3>
          <ul>
            {socialsLinks[0].data.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-muted-foreground hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="font-bold">{festivalOverview[0].heading}</h3>
          <ul>
            {festivalOverview[0].data.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className=" text-muted-foreground hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="font-bold">{importantLinks[0].heading}</h3>
          <ul>
            {importantLinks[0].data.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className=" text-muted-foreground hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className=" mb-10" />
      <div className=" text-center text-muted-foreground">
        &copy; 2013 — 2024 All Rights Reserved. Kenya International Theatre
        Festival Trust.
      </div>
    </div>
  );
};

export default SiteFooter;
