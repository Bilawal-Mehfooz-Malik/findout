import { hardcoded } from "@/app/lib/i18n";
import sql from "@/app/lib/db";
import { FoodDetails, mapFoodDetails } from "../domain/food-details";

export async function fetchFoodDetailsBySlug({
  slug,
}: {
  slug: string;
}): Promise<FoodDetails | null> {
  try {
    const [food] = await sql<FoodDetails[]>`
      SELECT * FROM foods 
      WHERE slug = ${slug}
    `;

    if (!food) return null;

    return mapFoodDetails(food);
  } catch (error) {
    console.error("Fetch Food By Id Error:", error);
    throw new Error(
      hardcoded(
        "Oops! We couldn't load this food item. Please try again later."
      )
    );
  }
}
