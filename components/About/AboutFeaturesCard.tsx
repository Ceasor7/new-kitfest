import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
};

const AboutFeaturesCard = ({
  title,
  description,
  backgroundColor,
  textColor,
}: Props) => {
  return (
    <Card
      style={{ backgroundColor }}
      className="transition duration-300 ease-in-out transform hover:scale-105 dark:bg-gray-800"
    >
      <CardHeader>
        <CardTitle className="text-3xl" style={{ color: textColor }}>
          {" "}
          {title}
        </CardTitle>
        <p style={{ color: textColor }}>{description}</p>{" "}
      </CardHeader>
    </Card>
  );
};

export default AboutFeaturesCard;
