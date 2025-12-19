import { CategoryId } from "@/app/lib/my-data-types";
import { fetchSubCategories } from "../data/subcategories.repo";
import { SubCategoryChip } from "./SubCategoryChip";

export default async function SubCategorySection({
  categoryId,
}: {
  categoryId: CategoryId;
}) {
  const subcategories = await fetchSubCategories({ categoryId });
  return (
    <>
      <SubCategoryChip key="all" label="All" selected={true} />
      {subcategories.map((subcategory) => (
        <SubCategoryChip
          key={subcategory.id}
          label={subcategory.name}
          selected={false}
        />
      ))}
    </>
  );
}
