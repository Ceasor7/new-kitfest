import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imgPath: string;
  teamName: string;
  teamTitle: string;
  link: string;
  linkText: string;
  textColor: string;
};

const OurTeamCard = ({
  imgPath,
  teamName,
  teamTitle,
  link,
  linkText,
  textColor,
}: Props) => {
  return (
    <Card>
      <CardHeader>
        <Image src={imgPath} alt={teamName} width={120} height={160} />
        <h2>{teamName}</h2>
        <CardDescription>{teamTitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={link}
          className=" italic font-semibold underline"
          style={{ color: textColor }}
        >
          {" "}
          {linkText}
        </Link>
      </CardContent>
    </Card>
  );
};

export default OurTeamCard;
