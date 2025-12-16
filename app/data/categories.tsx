import { Home, LucideIcon, UtensilsCrossed } from "lucide-react";
import { hardcoded } from "../lib/i18n";

export type Category = {
  id: number;
  name: string;
  icon: LucideIcon;
  href: string;
};

export const homeCategories: Category[] = [
  { id: 1, name: hardcoded("Residences") , icon: Home , href: '/residences' },
  { id: 2, name: hardcoded("Food"), icon: UtensilsCrossed , href: '/foods'},
];
