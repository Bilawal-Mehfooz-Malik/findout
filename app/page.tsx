import CategorySection from "./ui/home/CategorySection";
import HomeSearchBar from "./ui/home/HomeSearchBar";

export default function Page() {
  return <div className="px-4 sm:px-6 max-w-3xl mx-auto space-y-6">
    <HomeSearchBar/>
    <CategorySection/>
  </div>;
}