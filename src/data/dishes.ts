import gourmet from "../assets/images/gourmet.png";
import signatures from "../assets/images/signatures.png";
import appetizer from "../assets/images/appetizer.png";
import desserts from "../assets/images/Desserts.png";
import main from "../assets/images/main.png";
import drinks from "../assets/images/drinks.png";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "Appetizers" | "Mains" | "Desserts" | "Drinks";
  image: string;
}

export const dishes: Dish[] = [
  {
    id: "d1",
    name: "Seared Chilean Sea Bass",
    description: "Crisp-skinned sea bass, avocado emulsion, heirloom tomato relish, smoked chili oil.",
    price: "$58",
    category: "Mains",
    image: gourmet,
  },
  {
    id: "d2",
    name: "Aurelia Tasting Plate",
    description: "Chef's rotating composition of the season's finest ingredients, plated as art.",
    price: "$72",
    category: "Mains",
    image: signatures,
  },
  {
    id: "d3",
    name: "Cucumber & Smoked Salmon Rolls",
    description: "Delicate cucumber ribbons, whipped herb cream, cured salmon, citrus zest.",
    price: "$24",
    category: "Appetizers",
    image: appetizer,
  },
  {
    id: "d4",
    name: "Golden Caramel Tart",
    description: "Salted caramel custard, strawberry compote, gold leaf, vanilla bean crumble.",
    price: "$19",
    category: "Desserts",
    image: desserts,
  },
  {
    id: "d5",
    name: "Pan-Seared Halibut",
    description: "Crisp-skinned halibut fillet, charred citrus glaze, herb oil, micro greens.",
    price: "$54",
    category: "Mains",
    image: main,
  },
  {
    id: "d6",
    name: "The Aurelia Old Fashioned",
    description: "Small-batch bourbon, orange bitters, smoked demerara, flamed citrus peel.",
    price: "$22",
    category: "Drinks",
    image: drinks,
  },
];

export const categories = ["All", "Appetizers", "Mains", "Desserts", "Drinks"] as const;
