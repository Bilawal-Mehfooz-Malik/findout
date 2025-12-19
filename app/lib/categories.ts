import { hardcoded } from "./i18n";
import { Home, UtensilsCrossed } from "lucide-react";
import { CategoryId } from "./my-data-types";

export const CATEGORIES = [
  {
    id: CategoryId(1),
    slug: "residences",
    name: hardcoded("Residences"),
    icon: Home,
  },
  {
    id: CategoryId(2),
    slug: "foods",
    name: hardcoded("Foods"),
    icon: UtensilsCrossed,
  },
] as const;

export type Category = (typeof CATEGORIES)[number];

export function getCategories() {
  return CATEGORIES;
}

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((category) => category.slug === slug);
}

export function getCategoryById(id: CategoryId) {
  return CATEGORIES.find((category) => category.id === id);
}
