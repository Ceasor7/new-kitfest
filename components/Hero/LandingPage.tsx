import { EmblaOptionsType } from "embla-carousel";
import "../../app/globals.css";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  {
    src: "/slideshow/safari1.jpg",
    title: "3-Day Maasai Mara Safari",
    description:
      "Experience the Maasai Mara's famous wildlife in a 3-day tour with game drives and luxury accommodations.",
    price: "$800",
    duration: "3 Days / 2 Nights",
  },
  {
    src: "/slideshow/safari3.jpg",
    title: "5-Day Tsavo East & West Adventure",
    description:
      "Explore Tsavo's breathtaking landscapes and wildlife in a 5-day adventure, with visits to the famous Mzima Springs.",
    price: "$1200",
    duration: "5 Days / 4 Nights",
  },
  {
    src: "/slideshow/safari4.jpg",
    title: "7-Day Kenya Wildlife Circuit",
    description:
      "Discover Kenya's top wildlife destinations, including Amboseli, Lake Nakuru, and Maasai Mara in a 7-day safari.",
    price: "$2000",
    duration: "7 Days / 6 Nights",
  },
  {
    src: "/slideshow/safari2.jpg",
    title: "Beach & Safari Combo",
    description:
      "Enjoy the best of both worlds with a beach vacation in Diani and a safari adventure in Shimba Hills.",
    price: "$1500",
    duration: "6 Days / 5 Nights",
  },
];

const LandingPage = () => {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default LandingPage;
