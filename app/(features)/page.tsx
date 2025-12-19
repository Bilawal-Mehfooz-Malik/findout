import HomeAppBar from "../ui/home/HomeAppBar";
import CategorySection from "../ui/home/CategorySection";
import HomeSearchBar from "../ui/home/HomeSearchBar";

export default function Page() {
  return (
    <div>
      <HomeAppBar />
      <HomeSearchBar />
      <CategorySection />
    </div>
  );
}
