import React from "react";
import FestivalOverviewCard from "./FestivalOverviewCard";

const festivalItems = [
  {
    title: "Participation",
    description:
      "You can participate in KITFest through the following ways: trainees, volunteers, audiences, vendors and partners.",
    link: "/contact",
    backgroundColor: "#b40000",
    textColor: "#ffffff",
    linkText: "Get Involved",
  },
  {
    title: "Programs & Features",
    description:
      "The focus of our programs is on the development of Kenyan theatre. Through international performances and training and workshops, we strive to enhance theatre through new ideas and progressive steps.",
    link: "/contact",
    backgroundColor: "#00913c",
    textColor: "#ffffff",
    linkText: "Explore Programs",
  },
  {
    title: "Experiences",
    description:
      "Apart from theatrical performances, the festival provides attendees with a variety of different experiences. Most activities at KITFest are curated to promote fun, knowledge sharing, collaboration, and cultural exchange.",
    link: "/contact",
    backgroundColor: "#ffa54b",
    textColor: "#000000",
    linkText: "View Experiences",
  },
  {
    title: "Partnerships",
    description:
      "With our partners, we have the resources necessary to stage a festival of the highest quality and deliver the incredible experiences we always strive to provide. You can be part of the amazing organizations that have supported KITFest over the years.",
    link: "/contact",
    backgroundColor: "#ffd0a0",
    textColor: "#000000",
    linkText: "Join Us",
  },
  {
    title: "History",
    description:
      "From humble beginnings to global reach, the story of KITFest dates back to the year 2013, when the festival was just an idea on our founder's mind. Explore the progress KITFest has made and the promise of a powerful future by going on a journey through time. Coming soon.",
    link: "/contact",
    backgroundColor: "#860000",
    textColor: "#ffffff",
    linkText: "Discover Our History",
  },
  {
    title: "The Team",
    description:
      "It is the efforts of many individuals and organizations that make this festival possible each year. KITFest's success depends, however, heavily on the main management team that provides vision and leadership. The teams' profiles coming up soon.",
    link: "/contact",
    backgroundColor: "#ff6f00",
    textColor: "#000000",
    linkText: "Meet the Team",
  },
];

const FestivalOverview = () => {
  return (
    <div className=" py-10">
      <h2 className=" section-title mb-8 md:mb-16 text-center mx-auto">
        Festival Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        {festivalItems.map((item, index) => (
          <FestivalOverviewCard
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            backgroundColor={item.backgroundColor}
            textColor={item.textColor}
            linkText={item.linkText}
          />
        ))}
      </div>
    </div>
  );
};

export default FestivalOverview;
