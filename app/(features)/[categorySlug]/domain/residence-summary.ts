import { mapPlaceSummary, PlaceSummary } from "./place-summary";
import { mapPricing, Pricing } from "./pricing";

export type ResidenceSummary = PlaceSummary & {
  pricing: Pricing;
  availability: boolean;
};

export function mapResidenceSummary(
  place: any,
  pricing: any
): ResidenceSummary {
  return {
    ...mapPlaceSummary(place),
    pricing: mapPricing(pricing),
    availability: place.availability,
  };
}
