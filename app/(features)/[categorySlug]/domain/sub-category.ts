import { CategoryId, SubCategoryId } from "@/app/lib/my-data-types";

export type SubCategory = {
  id: SubCategoryId;
  categoryId: CategoryId;
  slug: string;
  name: string;
};

export function mapSubCategory(subCategory: any): SubCategory {
  return {
    id: subCategory.id,
    categoryId: subCategory.category_id,
    slug: subCategory.slug,
    name: subCategory.name,
  };
}
