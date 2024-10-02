import SiteHeader from "@/components/Header/SiteHeader";
import SubHeader from "@/components/Header/SubHeader";
import OurTeam from "@/components/Team/OurTeam";
import React from "react";

const page = () => {
  return (
    <div>
      <SiteHeader />
      <SubHeader title="Meet our Team" />
      <main className="pt-[8rem]">
        {/* Adjust padding-top value as needed to ensure all headers are accounted for */}
        <h2 className="section-title mb-8 md:mb-16 text-center mx-auto">
          Festival Overview
        </h2>
        <section className="mx-auto max-w-5xl pb-20">
          <OurTeam />
        </section>
      </main>
    </div>
  );
};

export default page;
