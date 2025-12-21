import { CategoryId, SubCategoryId } from "@/app/lib/my-data-types";
import {
  fetchResidenceList,
  fetchResidenceListBySubCategoryId,
} from "../data/residence-summary.repo";
import {
  fetchFoodList,
  fetchFoodListBySubCategoryId,
  fetchPopularFoodList,
  fetchPopularFoodListBySubCategoryId,
} from "../data/food-summary.repo";
import { hardcoded } from "@/app/lib/i18n";
import { ResidenceSummary } from "../domain/residence-summary";
import { FoodSummary } from "../domain/food-summary";

interface Props {
  categoryId: CategoryId;
  subCategoryId?: SubCategoryId;
}

export async function fetchPlaceList({
  categoryId,
  subCategoryId,
}: Props): Promise<ResidenceSummary[] | FoodSummary[]> {
  if (subCategoryId === undefined) {
    return await fetchPlaceListByCategoryId({ categoryId });
  } else {
    return await fetchPlaceListBySubCategoryId({ categoryId, subCategoryId });
  }
}

// Private Helper Functions

async function fetchPlaceListByCategoryId({
  categoryId,
}: {
  categoryId: CategoryId;
}): Promise<ResidenceSummary[] | FoodSummary[]> {
  switch (categoryId) {
    case 1:
      return await fetchResidenceList();
    case 2:
      return await fetchFoodList();
    default:
      throw new Error(
        hardcoded("Invalid category. Please select a valid category.")
      );
  }
}

async function fetchPlaceListBySubCategoryId({
  categoryId,
  subCategoryId,
}: {
  categoryId: CategoryId;
  subCategoryId: SubCategoryId;
}): Promise<ResidenceSummary[] | FoodSummary[]> {
  switch (categoryId) {
    case 1:
      return await fetchResidenceListBySubCategoryId({ subCategoryId });
    case 2:
      return await fetchFoodListBySubCategoryId({ subCategoryId });
    default:
      throw new Error(
        hardcoded("Invalid category. Please select a valid category.")
      );
  }
}
