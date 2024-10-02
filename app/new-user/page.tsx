import Register from "@/components/Application/Register";
import SiteHeader from "@/components/Header/SiteHeader";
import SubHeader from "@/components/Header/SubHeader";
import React from "react";

const page = () => {
  return (
    <div>
      <SiteHeader />
      <SubHeader title="Register " />
      <div className=" py-40 mx-auto max-w-5xl">
        <Register />
      </div>
    </div>
  );
};

export default page;
