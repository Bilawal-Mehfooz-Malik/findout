import HomeAppBar from "./components/HomeAppBar";
import CategorySection from "./components/CategorySection";
import HomeSearchBar from "./components/HomeSearchBar";
import PopularPlacesSection from "./components/PopularPlacesSection";
import { CategoryId } from "../lib/my-data-types";

export default function Page() {
  return (
    <div>
      <HomeAppBar />
      <HomeSearchBar />
      <CategorySection />
      <PopularPlacesSection categoryId={CategoryId(1)} />
      <PopularPlacesSection categoryId={CategoryId(2)} />
    </div>
  );
}
