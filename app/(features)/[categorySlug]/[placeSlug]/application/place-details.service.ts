import { CategoryId } from "@/app/lib/my-data-types";

import { hardcoded } from "@/app/lib/i18n";
import { fetchResidenceDetailsBySlug } from "../data/residence-details.repo";
import { fetchFoodDetailsBySlug } from "../data/food-details.repo";

interface Props {
  categoryId: CategoryId;
  placeSlug: string;
}

export async function fetchPlaceDetailsBySlug({
  categoryId,
  placeSlug,
}: Props) {
  switch (categoryId) {
    case 1:
      return await fetchResidenceDetailsBySlug({ slug: placeSlug });
    case 2:
      return await fetchFoodDetailsBySlug({ slug: placeSlug });
    default:
      throw new Error(
        hardcoded("Invalid category. Please select a valid category.")
      );
  }
}
