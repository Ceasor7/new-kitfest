import ContactForm from "@/components/Contact/ContactForm";
import OfficeLocation from "@/components/Contact/OfficeLocation";
import SiteHeader from "@/components/Header/SiteHeader";
import SubHeader from "@/components/Header/SubHeader";
import React from "react";

const page = () => {
  return (
    <div>
      <SiteHeader />
      <SubHeader title=" Ask anything. We are here to assist. 📥" />
      <div className=" max-w-5xl mx-auto py-40">
        <div className=" grid lg:grid-cols-2 gap-x-20">
          <div>
            <OfficeLocation />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
