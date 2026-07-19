export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  occasion: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Every course felt considered. The room, the light, the pacing — nothing was accidental.",
    name: "R. Whitfield",
    occasion: "Anniversary Dinner",
  },
  {
    id: "t2",
    quote: "The Chef's Table is unlike anything in the city. Precision and warmth in equal measure.",
    name: "M. Alavi",
    occasion: "Chef's Table",
  },
  {
    id: "t3",
    quote: "We hosted forty guests for a private celebration and every detail was flawless.",
    name: "S. Okafor",
    occasion: "Private Event",
  },
  {
    id: "t4",
    quote: "Aurelia doesn't just serve dinner. It stages an evening you remember for years.",
    name: "J. Laurent",
    occasion: "Seasonal Tasting",
  },
];
