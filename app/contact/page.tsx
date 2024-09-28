import ContactForm from "@/components/Contact/ContactForm";
import OfficeLocation from "@/components/Contact/OfficeLocation";
import React from "react";

const page = () => {
  return (
    <div>
      <div className=" max-w-5xl mx-auto py-7">
        <div className=" flex flex-col py-5 justify-center">
          <div className=" flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className=" w-[30px] h-[2px] bg-primary"></span>
            Get in Touch 📥
          </div>
        </div>

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
