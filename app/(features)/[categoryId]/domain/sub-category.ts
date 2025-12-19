import { CategoryId, SubCategoryId } from "@/app/lib/my-data-types";

export type SubCategory = {
  id: SubCategoryId;
  categoryId: CategoryId;
  slug: string;
  name: string;
  sortOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export function mapSubCategory(subCategory: any) {
  return {
    id: subCategory.id,
    categoryId: subCategory.category_id,
    slug: subCategory.slug,
    name: subCategory.name,
    sortOrder: subCategory.sort_order,
    isActive: subCategory.is_active,
    createdAt: subCategory.created_at,
    updatedAt: subCategory.updated_at,
  };
}
