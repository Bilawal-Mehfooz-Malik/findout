import { PlaceId, SubCategoryId } from "@/app/lib/my-data-types";
import { hardcoded } from "@/app/lib/i18n";
import sql from "@/app/lib/db";
import { food as Food } from "../domain/food";
import { FoodSummary, mapFoodSummary } from "../domain/food-summary";

export async function fetchFoodList() {
  try {
    const data = await sql<FoodSummary[]>`
      SELECT * FROM foods 
      WHERE approval_status = 'approved' 
      ORDER BY updated_at DESC
    `;

    return data.map(mapFoodSummary);
  } catch (error) {
    console.error("Fetch Food List Error:", error);
    throw new Error(
      hardcoded("Oops! We couldn't load the food list. Please try again later.")
    );
  }
}

export async function fetchFoodListBySubCategoryId({
  subCategoryId,
}: {
  subCategoryId: SubCategoryId;
}) {
  try {
    const data = await sql<FoodSummary[]>`
      SELECT * FROM foods 
      WHERE sub_category_id = ${subCategoryId} 
      AND approval_status = 'approved' 
      ORDER BY updated_at DESC
    `;

    return data.map(mapFoodSummary);
  } catch (error) {
    console.error("Fetch Food List By SubCategoryId Error:", error);
    throw new Error(
      hardcoded(
        "Oops! We couldn't load the foods for this category. Please try again later."
      )
    );
  }
}

export async function fetchFoodById({ placeId }: { placeId: PlaceId }) {
  try {
    const [food] = await sql<FoodSummary[]>`
      SELECT * FROM foods 
      WHERE id = ${placeId}
    `;

    if (!food) return null;

    return mapFoodSummary(food);
  } catch (error) {
    console.error("Fetch Food By Id Error:", error);
    throw new Error(
      hardcoded(
        "Oops! We couldn't load this food item. Please try again later."
      )
    );
  }
}
