import { CategoryId } from "@/app/lib/my-data-types";
import { FoodSummary } from "../[categorySlug]/domain/food-summary";
import { ResidenceSummary } from "../[categorySlug]/domain/residence-summary";
import { fetchPopularResidenceList } from "../data/popular-residence.repo";
import { fetchPopularFoodList } from "../data/popular-food.repo";

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
