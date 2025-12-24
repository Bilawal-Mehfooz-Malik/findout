import { PricingPeriod, PricingUnit } from "@/app/lib/my-data-types";
import { Pricing } from "../(features)/[categorySlug]/domain/pricing";

/* -------------------------------
   Formatters
-------------------------------- */
export function formatPricing(pricing: Pricing) {
  return {
    cost: formatCurrency(pricing.cost),
    period: PRICING_PERIOD_LABEL[pricing.period],
    unit: formatPricingUnit(pricing.unit),
  };
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/* -------------------------------
   Display text maps
-------------------------------- */

export const PRICING_PERIOD_LABEL: Record<PricingPeriod, string> = {
  oneTime: "one time",
  daily: "daily",
  weekly: "weekly",
  monthly: "monthly",
  yearly: "yearly",
};

export const PRICING_UNIT_LABEL: Record<PricingUnit, string> = {
  person: "person",
  room: "room",
  unit: "unit",
};

function formatPricingUnit(unit: PricingUnit): string {
  if (unit === "unit") return "person";
  return PRICING_UNIT_LABEL[unit];
}
