import { hardcoded } from "@/app/lib/i18n";
import { CATEGORIES, type Category } from "../domain/categories";
import { CategoryId } from "@/app/lib/my-data-types";

export function fetchCategoriesList(): Category[] {
  return [...CATEGORIES];
}

export function fetchCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}

export function fetchCategoryById(id: CategoryId): Category | undefined {
  return CATEGORIES.find((category) => category.id === id);
}

export function fetchCategorySlugById(id: CategoryId): string {
  const category = fetchCategoryById(id);

  if (!category) {
    throw new Error(hardcoded(`Category not found for id: ${id}`));
  }

  return category.slug;
}

export function fetchCategoryIdBySlug(slug: string): CategoryId {
  const category = fetchCategoryBySlug(slug);

  if (!category) {
    throw new Error(hardcoded(`Category not found for slug: ${slug}`));
  }

  return category.id;
}
