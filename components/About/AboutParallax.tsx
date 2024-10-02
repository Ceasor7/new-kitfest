import React from "react";
import Youtube from "../Youtube";

const AboutParallax = () => {
  return (
    <div className="w-full bg-about bg-no-repeat bg-center bg-cover bg-fixed flex flex-col items-center justify-center text-center lg:px-20 3xl:px-0 mx-auto pb-24">
      <div className=" grid max-w-5xl pt-16 grid-cols-1 space-x-14 md:grid-cols-2">
        <div className=" md:max-w-[550px] flex flex-col justify-center item">
          <h2 className=" text-left text-white text-4xl">About KITFest</h2>
          <p className=" text-left text-white text-lg">
            KITFest is an immersive and enlightening theatrical experience,
            where diverse performances and educational opportunities come
            together to inspire and connect artists and audiences from around
            the world, as well as enjoy the magical Kenya through tourism and
            cultural experiences.
          </p>
        </div>
        <div>
          <Youtube />
        </div>
      </div>
    </div>
  );
};

export default AboutParallax;
