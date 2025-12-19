import { mapPlaceSummary, PlaceSummary } from "./place-summary";
import { mapPricing, Pricing } from "./pricing";

export type ResidenceSummary = PlaceSummary & {
  pricing: Pricing;
};

export function mapResidenceSummary(place: any, pricing: any) {
  return {
    ...mapPlaceSummary(place),
    pricing: mapPricing(pricing),
  };
}
