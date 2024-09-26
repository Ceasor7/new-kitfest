"use client";
import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type CardData = {
  title: string;
  description: string;
  backgroundColor: string;
};

type PropType = {
  cards: CardData[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ cards, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (autoScroll && !autoScroll.isPlaying()) {
      autoScroll.play();
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden">
      <div className="flex overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-4">
          {cards.map((card, index) => (
            <div
              className={`flex-none w-full md:w-1/3 bg-gray-100 rounded-lg p-4 shadow-lg 
                ${index === 0 ? "ml-4" : ""} 
                ${index === cards.length - 1 ? "mr-4" : ""}`}
              key={index}
              style={{ backgroundColor: card.backgroundColor }}
            >
              <div className="p-6 h-60 text-center">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
