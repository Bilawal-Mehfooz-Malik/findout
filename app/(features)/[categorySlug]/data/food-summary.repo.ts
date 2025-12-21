import { SubCategoryId } from "@/app/lib/my-data-types";
import { hardcoded } from "@/app/lib/i18n";
import sql from "@/app/lib/db";
import { FoodSummary, mapFoodSummary } from "../domain/food-summary";

interface Props {
  subCategoryId: SubCategoryId;
}

export async function fetchFoodList(): Promise<FoodSummary[]> {
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
}: Props): Promise<FoodSummary[]> {
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

export async function fetchPopularFoodList(): Promise<FoodSummary[]> {
  try {
    const data = await sql<FoodSummary[]>`
      SELECT * FROM foods 
      WHERE approval_status = 'approved' 
      AND is_featured = true 
      ORDER BY updated_at DESC
    `;

    return data.map(mapFoodSummary);
  } catch (error) {
    console.error("Fetch Popular Food List Error:", error);
    return [];
  }
}

export async function fetchPopularFoodListBySubCategoryId({
  subCategoryId,
}: Props): Promise<FoodSummary[]> {
  try {
    const data = await sql<FoodSummary[]>`
      SELECT * FROM foods 
      WHERE sub_category_id = ${subCategoryId} 
      AND approval_status = 'approved' 
      AND is_featured = true 
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
