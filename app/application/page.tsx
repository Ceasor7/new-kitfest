import SiteHeader from "@/components/Header/SiteHeader";
import SubHeader from "@/components/Header/SubHeader";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <SiteHeader />
      <SubHeader title=" Application for KITFest 2025" />
      <div className=" max-w-5xl mx-auto py-40 min-h-screen">Hello World</div>
    </div>
  );
};

export default page;
