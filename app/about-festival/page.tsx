import AboutFeatures from "@/components/About/AboutFeatures";
import AboutParallax from "@/components/About/AboutParallax";
import KitfestOrg from "@/components/About/KitfestOrg";
import React from "react";

const page = () => {
  return (
    <div>
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
