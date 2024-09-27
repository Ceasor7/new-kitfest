import OurTeam from "@/components/Team/OurTeam";
import React from "react";

const page = () => {
  return (
    <div>
      <h2 className=" section-title mb-8 md:mb-16 text-center mx-auto">
        Festival Overview
      </h2>
      <section>
        <OurTeam />
      </section>
    </div>
  );
};

export default page;
