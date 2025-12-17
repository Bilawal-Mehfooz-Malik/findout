import { hardcoded } from "../lib/i18n";
import { Home, UtensilsCrossed } from "lucide-react";

export const CATEGORIES = {
  residences: {
    id: 1,
    name: hardcoded("Residences"),
    icon: Home,
  },
  foods: {
    id: 2,
    name: hardcoded("Foods"),
    icon: UtensilsCrossed,
  },
} as const;

export type CategoryId = keyof typeof CATEGORIES;
export type Category = (typeof CATEGORIES)[CategoryId];
