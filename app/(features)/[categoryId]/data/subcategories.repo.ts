import { CategoryId } from "@/app/lib/my-data-types";
import { mapSubCategory, SubCategory } from "../domain/sub-category";
import { hardcoded } from "@/app/lib/i18n";
import sql from "@/app/lib/db";

export async function fetchSubCategories({
  categoryId,
}: {
  categoryId: CategoryId;
}) {
  try {
    const data = await sql<
      SubCategory[]
    >`SELECT * FROM sub_categories WHERE category_id = ${categoryId} AND is_active = true ORDER BY sort_order ASC`;

    return data.map(mapSubCategory);
  } catch (error) {
    console.error("SubCategories List Fetch Error:", error);
    throw new Error(hardcoded("Failed to fetch subcategories."));
  }
}
