import Login from "@/components/Application/Login";
import SiteHeader from "@/components/Header/SiteHeader";
import SubHeader from "@/components/Header/SubHeader";
import React from "react";

const page = () => {
  return (
    <div>
      <SiteHeader />
      <SubHeader title="Login " />
      <div className=" lg:py-40">
        <Login />
      </div>
    </div>
  );
};

export default page;
