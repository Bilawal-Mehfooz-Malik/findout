import HomeAppBar from "./components/HomeAppBar";
import CategorySection from "./components/CategorySection";
import HomeSearchBar from "./components/HomeSearchBar";
import PopularPlacesSection from "./components/PopularPlacesSection";
import { CategoryId } from "../lib/my-data-types";
import { hardcoded } from "../lib/i18n";
import { Suspense } from "react";
import { PlacesCarouselSkeleton } from "./components/PlacesCarouselSkeleton";

export default function Page() {
  const popularPlacesToStayTitle = hardcoded("Popular Places to Stay");
  const popularPlacesToEatTitle = hardcoded("Popular Places to Eat");
  return (
    <div className="space-y-6 sm:space-y-10 pb-8">
      <HomeAppBar />
      <HomeSearchBar />
      <CategorySection />
      <Suspense
        fallback={
          <PlacesCarouselSkeleton
            categoryId={CategoryId(1)}
            title={popularPlacesToStayTitle}
          />
        }
      >
        <PopularPlacesSection
          title={popularPlacesToStayTitle}
          categoryId={CategoryId(1)}
        />
      </Suspense>
      <Suspense
        fallback={
          <PlacesCarouselSkeleton
            categoryId={CategoryId(2)}
            title={popularPlacesToEatTitle}
          />
        }
      >
        <PopularPlacesSection
          title={popularPlacesToEatTitle}
          categoryId={CategoryId(2)}
        />
      </Suspense>
    </div>
  );
}
