import { mapPlaceSummary, PlaceSummary } from "./place-summary";

export type FoodSummary = PlaceSummary;

export function mapFoodSummary(food: any) {
  return {
    ...mapPlaceSummary(food),
  };
}
