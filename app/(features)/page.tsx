import HomeAppBar from "./components/HomeAppBar";
import CategorySection from "./components/CategorySection";
import HomeSearchBar from "./components/HomeSearchBar";
import PopularPlacesSection from "./components/PopularPlacesSection";
import { CategoryId } from "../lib/my-data-types";
import { hardcoded } from "../lib/i18n";

export default function Page() {
  return (
    <div className="space-y-6 sm:space-y-10 pb-8">
      <HomeAppBar />
      <HomeSearchBar />
      <CategorySection />
      <PopularPlacesSection
        title={hardcoded("Popular Places to Stay")}
        categoryId={CategoryId(1)}
      />
      <PopularPlacesSection
        title={hardcoded("Popular Places to Eat")}
        categoryId={CategoryId(2)}
      />
    </div>
  );
}
