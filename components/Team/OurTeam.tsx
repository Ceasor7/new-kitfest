"use client";
import React, { useState } from "react";
import OurTeamCard from "./OurTeamCard";
import { FaFacebook, FaTwitter, FaLinkedin, FaTimes } from "react-icons/fa";
import { Button } from "../ui/button";

type TeamMember = {
  imgPath: string;
  teamName: string;
  teamTitle: string;
  description: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    imgPath: "/team/ngobia.jpg",
    teamName: "Benson Ngobia",
    teamTitle: "Director",
    description:
      "Benson Ngobia is a seasoned performing artiste, having made his acting debut in 1998 at his local church in Nakuru in the annual Presbyterian Church Festival. He has gone on to feature in tens of productions performed all over the country, with various theatre companies. ",
    socialLinks: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
    },
  },
  {
    imgPath: "/team/kevin.jpg",
    teamName: "Kevin Kimani",
    teamTitle: "Chairman",
    description:
      "Kevin Kimani Kahuro is an accomplished professional in International Cultural Relations, with expertise in management, financial acumen, strategic planning, and leadership. He currently serves as the Programs and Business Development Manager at the Kenya Cultural Centre, Chairperson of the Kenya International Theatre Festival Trust, and Secretary General of the African Theatre Union.",
    socialLinks: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
    },
  },
  {
    imgPath: "/team/hadasa.jpg",
    teamName: "Hadasa Kariuki",
    teamTitle: "Office Admin",
    description:
      "Hadasa Kariuki is a professional theatre practitioner and academic,with a career dedicated to advancing the performing arts. She is a Charismatic and Certified thespian with a Bachelor's Degree in Film and Theatre studies. She is a talented actor,writer, Director and Producer of some notable Theatre productions. She hopes that her work will seamlessly integrate practical Theatre experience with academic insight, making a lasting impact on the world of Theatre",
    socialLinks: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
    },
  },
  {
    imgPath: "/team/olwal.jpg",
    teamName: "Olwal Dickens",
    teamTitle: "Programs and Operations Officer",
    description:
      "Olwal Dickens is a self-driven professional, with a diverse background as a programs officer, operations manager, training manager, research assistant, communications officer, project coordinator, art and literature consultant, theatre and film practitioner, and creative writer, he excels in leading teams and developing strategies. His skills include research, data analysis, program evaluation, and community services. He is passionate about leveraging literature and art for social impact.",
    socialLinks: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
    },
  },
  {
    imgPath: "/team/fiona.jpg",
    teamName: "Fiona Oyugi",
    teamTitle: "Corporate Affairs officer",
    description:
      "Fiona Oyugi is a dedicated professional with a background in journalism and mass communication. Currently thriving in multiple roles as a marketer, social media manager, and media communications officer, Fiona combines her expertise to effectively engage audiences across various platforms. Her passion for the theatre industry fuels her creative pursuits, where she actively contributes to promoting and advancing performing arts initiatives.",
    socialLinks: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
    },
  },
];

const OurTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((member, index) => (
        <div key={index}>
          <OurTeamCard
            imgPath={member.imgPath}
            teamName={member.teamName}
            teamTitle={member.teamTitle}
          />
          <Button onClick={() => openModal(member)} className="mt-2 ">
            Show More
          </Button>
        </div>
      ))}

      {isModalOpen && selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white w-11/12 md:w-2/3 lg:w-1/3 p-6 rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {selectedMember.teamName}
            </h2>
            <h3 className="text-xl text-gray-700 mb-4">
              {selectedMember.teamTitle}
            </h3>
            <p className="text-gray-600 mb-6">{selectedMember.description}</p>
            <div className="flex space-x-4">
              {selectedMember.socialLinks.facebook && (
                <a
                  href={selectedMember.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700"
                >
                  <FaFacebook size={24} />
                </a>
              )}
              {selectedMember.socialLinks.twitter && (
                <a
                  href={selectedMember.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400"
                >
                  <FaTwitter size={24} />
                </a>
              )}
              {selectedMember.socialLinks.linkedin && (
                <a
                  href={selectedMember.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  <FaLinkedin size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeam;
