import React from "react";
import { Button } from "../ui/button";

const KitfestOrg = () => {
  return (
    <div className="w-full text-white bg-about_knt bg-no-repeat bg-center bg-cover bg-fixed flex flex-col items-center justify-center py-48 text-center mx-auto ">
      <div className=" max-w-5xl mx-auto text-left">
        <h1> Host Organisations</h1>
        <div className=" text-left">
          <div>
            <h2>Kenya International Theatre Festival Trust (KITFT)</h2>
            <p>
              The Kenya International Theatre Festival Trust is dedicated to
              fostering the growth and development of the theatre and performing
              arts industry by providing resources and support for artists and
              projects. By investing in and promoting the arts, the trust
              recognises their value and importance, and aims to create a
              profitable inclusive community for professionals and enthusiasts
              alike.
            </p>
          </div>
          <div className=" py-7 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h3>KITFT VISION</h3>
              <p>
                To empower and inspire the performing arts community through
                innovative leadership and platform development.
              </p>
            </div>
            <div>
              <h3>KITFT MISSION</h3>
              <p>
                To create a dynamic and inclusive arts community by providing
                access to cutting-edge resources, leadership opportunities, and
                platforms for sustainable creative expression. We strive to
                drive engagement and cultivate a love for the arts through
                exhibition, education, collaboration, and community building.
              </p>
            </div>
          </div>
          <Button>Learn More</Button>
        </div>
        <hr className=" my-10" />
        <div className=" text-left">
          <div>
            <h2>
              Kenya Cultural Centre incorporating Kenya National Theatre
              (KCC/NT)
            </h2>
            <p>
              Kenya Cultural Centre incorporating Kenya National Theatre
              (KCC-NT) is a Semi-Autonomous Government Agency established by the
              Kenya Cultural Centre Act CAP 218 and mandated to provide a Centre
              for the use and enjoyment of the citizens of Kenya and to provide
              for the performance of music, drama and dancing, for the
              exhibition of works of art and craft and the holding of meetings
              for discussion of matters of literary, historical, scientific or
              educational interest or importance, and connected purposes as may
              be approved by the Governing Council. KCC-NT is the nation’s
              oldest state cultural institution and is currently administered
              under the Ministry of Sports, Culture and Heritage.
            </p>
          </div>
          <div className=" py-7 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h3>KCC-NT VISION</h3>
              <p>
                To be a distinguished international Centre for cultural
                reference, creative expression and cultural contribution to the
                Kenyan economy.
              </p>
            </div>
            <div>
              <h3>KCC-NT MISSION</h3>
              <p>
                To establish the Kenya Cultural Centre as the national centre
                for safeguarding, promoting and developing culture.
              </p>
            </div>
          </div>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default KitfestOrg;
