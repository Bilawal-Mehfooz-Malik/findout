import { CategoryId, PlaceId, SubCategoryId } from "@/app/lib/my-data-types";
import {
  fetchResidenceBySlug as fetchResidenceBySlug,
  fetchResidenceList,
  fetchResidenceListBySubCategoryId,
} from "../data/residence-summary.repo";
import {
  fetchFoodBySlug,
  fetchFoodList,
  fetchFoodListBySubCategoryId,
} from "../data/food-summary.repo";
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

export async function fetchPlaceBySlug({
  categoryId,
  placeSlug,
}: {
  categoryId: CategoryId;
  placeSlug: string;
}) {
  switch (categoryId) {
    case 1:
      return await fetchResidenceBySlug({ slug: placeSlug });
    case 2:
      return await fetchFoodBySlug({ slug: placeSlug });
    default:
      throw new Error(
        hardcoded("Invalid category. Please select a valid category.")
      );
  }
}
