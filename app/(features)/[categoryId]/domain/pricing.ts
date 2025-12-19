import { PricingPeriod, PricingUnit } from "@/app/lib/my-data-types";

export type Pricing = {
  cost: number;
  unit: PricingUnit;
  period: PricingPeriod;
};

export function mapPricing(pricing: any) {
  return {
    cost: pricing.cost,
    unit: pricing.unit,
    period: pricing.period,
  };
}
