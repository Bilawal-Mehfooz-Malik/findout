import HomeAppBar from "./components/HomeAppBar";
import CategorySection from "./components/CategorySection";
import HomeSearchBar from "./components/HomeSearchBar";
import PopularPlacesSection from "./components/PopularPlacesSection";
import { CategoryId } from "../lib/my-data-types";
import { hardcoded } from "../lib/i18n";

export default function Page() {
  return (
    <div>
      <HomeAppBar />
      <HomeSearchBar />
      <CategorySection />
      <PopularPlacesSection
        title={hardcoded("Popular Residences")}
        categoryId={CategoryId(1)}
      />
      <PopularPlacesSection
        title={hardcoded("Popular Foods")}
        categoryId={CategoryId(2)}
      />
    </div>
  );
}
