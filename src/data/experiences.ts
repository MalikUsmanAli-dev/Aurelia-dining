import interior from "../assets/images/interior.jpg";
import privateImg from "../assets/images/private.jpg";
import tableset from "../assets/images/tableset.png";
import desserts from "../assets/images/Desserts.png";
import out from "../assets/images/out.jpg";
import couple from "../assets/images/couple.jpg";

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const experiences: Experience[] = [
  {
    id: "e1",
    title: "Fine Dining",
    description: "An intimate, multi-course evening in our main dining room beneath candlelight and gold accents.",
    image: interior,
  },
  {
    id: "e2",
    title: "Private Events",
    description: "Reserve our private dining suite for milestone gatherings, curated for up to 24 guests.",
    image: privateImg,
  },
  {
    id: "e3",
    title: "Chef's Table",
    description: "Sit before the open kitchen and watch our culinary team compose each course by hand.",
    image: tableset,
  },
  {
    id: "e4",
    title: "Seasonal Tasting",
    description: "A nine-course menu built around the finest ingredients each season has to offer.",
    image: desserts,
  },
  {
    id: "e5",
    title: "Outdoor Dining",
    description: "Dine beneath the open sky on our terrace, lit by lanterns and the city skyline.",
    image: out,
  },
  {
    id: "e6",
    title: "Celebrations",
    description: "Anniversaries, proposals, milestone birthdays — hosted with quiet, personal elegance.",
    image: couple,
  },
];
