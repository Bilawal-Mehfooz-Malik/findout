import { CategoryId } from "@/app/lib/my-data-types";
import { fetchPopularFoodList } from "../[categorySlug]/data/food-summary.repo";
import { fetchPopularResidenceList } from "../[categorySlug]/data/residence-summary.repo";
import { FoodSummary } from "../[categorySlug]/domain/food-summary";
import { ResidenceSummary } from "../[categorySlug]/domain/residence-summary";

export async function fetchPopularPlaces(
  categoryId: CategoryId
): Promise<(FoodSummary | ResidenceSummary)[]> {
  if (categoryId === 1) {
    return fetchPopularResidenceList();
  } else if (categoryId === 2) {
    return fetchPopularFoodList();
  }
  return [];
}
