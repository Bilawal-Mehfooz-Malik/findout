import { CategoryId } from "@/app/lib/my-data-types";
import { fetchSubCategoriesList } from "../data/subcategories.repo";
import { SubCategoryChip } from "./SubCategoryChip";
import { hardcoded } from "@/app/lib/i18n";

interface Props {
  categoryId: CategoryId;
}

export default async function SubCategorySection({ categoryId }: Props) {
  const subcategories = await fetchSubCategoriesList({ categoryId });
  return (
    <>
      <SubCategoryChip key="all" label={hardcoded("All")} selected={true} />
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
