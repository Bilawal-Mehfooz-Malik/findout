import HomeAppBar from "./components/HomeAppBar";
import CategorySection from "./components/CategorySection";
import HomeSearchBar from "./components/HomeSearchBar";

export default function Page() {
  return (
    <div>
      <HomeAppBar />
      <HomeSearchBar />
      <CategorySection />
    </div>
  );
}
