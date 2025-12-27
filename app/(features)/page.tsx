import HomeAppBar from "./components/HomeAppBar";
import CategorySection from "./components/CategorySection";
import HomeSearchBar from "./components/HomeSearchBar";
import PopularPlacesSection from "./components/PopularPlacesSection";
import { CategoryId } from "../lib/my-data-types";
import { hardcoded } from "../lib/i18n";

export default function Page() {
  const popularPlacesToStayTitle = hardcoded("Popular Places to Stay");
  const popularPlacesToEatTitle = hardcoded("Popular Places to Eat");
  return (
    <div className="space-y-6 sm:space-y-10 pb-8">
      <HomeAppBar />
      <HomeSearchBar />
      <CategorySection />
      <PopularPlacesSection
        title={popularPlacesToStayTitle}
        categoryId={CategoryId(1)}
      />
      <PopularPlacesSection
        title={popularPlacesToEatTitle}
        categoryId={CategoryId(2)}
      />
    </div>
  );
}
