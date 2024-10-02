import AboutFeatures from "@/components/About/AboutFeatures";
import AboutParallax from "@/components/About/AboutParallax";
import KitfestOrg from "@/components/About/KitfestOrg";
import SiteHeader from "@/components/Header/SiteHeader";
import SubHeader from "@/components/Header/SubHeader";
import React from "react";

const page = () => {
  return (
    <div>
      <SiteHeader />
      <SubHeader title="About The Festival" />
      <section>
        <AboutParallax />
      </section>
      <section className=" py-8">
        <AboutFeatures />
      </section>
      <section>
        <KitfestOrg />
      </section>
    </div>
  );
};

export default page;
