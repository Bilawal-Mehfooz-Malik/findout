import { CategoryId } from "@/app/lib/my-data-types";

export default function getPlaceType(
  categoryId: CategoryId
): "residence" | "food" | "unknown" {
  switch (categoryId) {
    case 1:
      return "residence";
    case 2:
      return "food";
    default:
      return "unknown";
  }
}
