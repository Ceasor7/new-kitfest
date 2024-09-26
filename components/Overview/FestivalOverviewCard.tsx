import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  link: string;
  backgroundColor: string;
  textColor: string; // New prop for text color
  linkText: string; // New prop for link text
};

const FestivalOverviewCard = ({
  title,
  description,
  link,
  backgroundColor,
  textColor, // Destructure new prop
  linkText, // Destructure new prop
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
        <Link
          href={link}
          className=" italic font-semibold underline"
          style={{ color: textColor }}
        >
          {" "}
          {linkText}
        </Link>
      </CardHeader>
    </Card>
  );
};

export default FestivalOverviewCard;
