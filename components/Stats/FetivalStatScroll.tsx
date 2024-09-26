import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./embla.css";

const OPTIONS: EmblaOptionsType = { loop: true };

const CARDS = [
  {
    title: "Festival Editions",
    description: "8",
    backgroundColor: "#7d0000",
  },
  {
    title: "Kenyan Teams",
    description: "75",
    backgroundColor: "#005925",
  },
  {
    title: "International Teams",
    description: "54",
    backgroundColor: "#b37334",
  },
  {
    title: "International Guests",
    description: "143",
    backgroundColor: "#b59371",
  },
  {
    title: "Workshops & Training",
    description: "67",
    backgroundColor: "#9f4500",
  },
  {
    title: "People Reached",
    description: "2,467,665+",
    backgroundColor: "#311808",
  },
];

const FetivalStatScroll = () => {
  return (
    <div className=" max-w-5xl mx-auto py-16">
      <h2 className=" section-title mb-8 md:mb-16 text-center mx-auto">
        Festival Stats
      </h2>
      <EmblaCarousel cards={CARDS} options={OPTIONS} />
    </div>
  );
};

export default FetivalStatScroll;
