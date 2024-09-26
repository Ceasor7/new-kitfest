import React from "react";
import { Button } from "./ui/button";

const Introduction = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-full h-screen bg-intro1 bg-no-repeat bg-center bg-cover bg-fixed flex flex-col items-center justify-center text-center lg:px-20 3xl:px-0 mx-auto pb-24">
        <h1 className=" text-[#7d0000] text-5xl pb-5">
          This is the <br /> Kenya International Theatre Festival
        </h1>
        <p className=" text-white text-lg pb-5">
          At KITFest, we not only celebrate theatre but experience the culture,
          connect with people and indulge in adventure!
        </p>
        <div className=" flex justify-between gap-x-28">
          <Button>Participation</Button>
          <Button>View Experiences</Button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
