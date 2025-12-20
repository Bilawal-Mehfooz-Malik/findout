import { hardcoded } from "@/app/lib/i18n";
import { CategoryId } from "@/app/lib/my-data-types";
import { Home, UtensilsCrossed } from "lucide-react";

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
