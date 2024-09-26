"use client";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type PropType = {
  slides: {
    src: string;
    title: string;
    description: string;
    price: string;
    duration: string;
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="w-full h-screen mx-auto flex items-center">
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div className="relative flex-none w-full h-full" key={index}>
              <Image
                className="object-cover"
                src={slide.src}
                alt={`Slide ${index + 1}`}
                layout="fill"
              />

              {selectedIndex === index && (
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  key={index}
                >
                  <div className=" bg-black bg-opacity-50 mx-auto p-2 mb-1">
                    <h2 className=" text-2xl lg:text-4xl text-white font-bold">
                      {slide.title}
                    </h2>
                    <p className=" text-white">{slide.description}</p>
                  </div>
                  <div className=" flex flex-col sm:flex-row justify-between gap-x-5">
                    <p className=" bg-black font-bold bg-opacity-50 p-2 text-[#ffde59]">
                      Price: {slide.price}
                    </p>
                    <p className=" bg-black font-bold bg-opacity-50 p-2 text-[#ffde59]">
                      Duration: {slide.duration}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
