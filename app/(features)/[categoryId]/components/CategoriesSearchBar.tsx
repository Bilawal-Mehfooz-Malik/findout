import { hardcoded } from "@/app/lib/i18n";
import SearchBar from "@/app/ui/SearchBar";
import { CategoryId } from "@/app/lib/my-data-types";

export const categoriesSearchBars = {
  [CategoryId(1)]: (
    <SearchBar hintText={hardcoded("Search for residences...")} />
  ),
  [CategoryId(2)]: (
    <SearchBar hintText={hardcoded("Search for restaurants...")} />
  ),
};
