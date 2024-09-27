import React from "react";
import AboutFeaturesCard from "./AboutFeaturesCard";

const festivalFeatures = [
  {
    title: "Artistic Showcases",
    description:
      "KITFest was conceived specifically to celebrate theatre and showcase the works of theatre artists from all over the world. It’s an international platform where theatre lovers have the opportunity to attend & watch performances, share artistic excellence, innovation and explore the intersections between various theatrical genres.",
    backgroundColor: "#b40000",
    textColor: "#ffffff",
  },
  {
    title: "Training & Development",
    description:
      "Training in both artistic and business acumen has been at the core of our activities. Through cross-platform and agency collaboration, we hold workshops in each KITFest venue for the local artists and groups, equipping them with skills for enhancing the value and quality of their talents.",
    backgroundColor: "#b40000",
    textColor: "#ffffff",
  },
  {
    title: "Exchange Programs",
    description:
      "The presence of an active international theatre festival in Kenya means Kenyan thespians will always have access to the global theatre scene for exposure to leading skills and knowledge, new production techniques and opportunities from across the world. KITFest is continuously facilitating exchange programs to ensure local theatre travels for both education and business opportunities.",
    backgroundColor: "#b40000",
    textColor: "#ffffff",
  },
  {
    title: "Community Theatre",
    description:
      "Kenyan theatre is characterised by a great presence in a few towns and cities, with Nairobi leading the lot by a huge margin. While the history of theatre suggests that it was one of the major community-based activities, urbanisation and formalisation of the craft have made it dwindle in rural areas. KITFest, through the County Tours and Community Theatre projects, seeks to reintroduce theatre back to the villages as a powerful advocacy tool, teaching platform, source of livelihood and a quality socio-cultural community element.",
    backgroundColor: "#b40000",
    textColor: "#ffffff",
  },
];

const AboutFeatures = () => {
  return (
    <div className=" mx-auto max-w-5xl">
      <h2 className=" section-title mb-8 md:mb-16 text-center mx-auto">
        Features of KITFest
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        {festivalFeatures.map((item, index) => (
          <AboutFeaturesCard
            key={index}
            title={item.title}
            description={item.description}
            backgroundColor={item.backgroundColor}
            textColor={item.textColor}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutFeatures;
