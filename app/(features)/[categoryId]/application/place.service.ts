import { CategoryId, PlaceId, SubCategoryId } from "@/app/lib/my-data-types";
import {
  fetchResidenceById,
  fetchResidenceList,
  fetchResidenceListBySubCategoryId,
} from "../data/residence.repo";
import {
  fetchFoodById,
  fetchFoodList,
  fetchFoodListBySubCategoryId,
} from "../data/food.repo";
import { hardcoded } from "@/app/lib/i18n";

export async function fetchPlaceList({
  categoryId,
}: {
  categoryId: CategoryId;
}) {
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

export async function fetchPlaceListBySubCategoryId({
  categoryId,
  subCategoryId,
}: {
  categoryId: CategoryId;
  subCategoryId: SubCategoryId;
}) {
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

export async function fetchPlaceById({
  categoryId,
  placeId,
}: {
  categoryId: CategoryId;
  placeId: PlaceId;
}) {
  switch (categoryId) {
    case 1:
      return await fetchResidenceById({ placeId });
    case 2:
      return await fetchFoodById({ placeId });
    default:
      throw new Error(
        hardcoded("Invalid category. Please select a valid category.")
      );
  }
}
