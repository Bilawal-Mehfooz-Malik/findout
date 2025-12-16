import SearchBar from "./ui/SearchBar";
import CategorySection from "./ui/home/CategorySection";

export default function Page() {
  return <div className="px-4 sm:px-6 max-w-3xl mx-auto">
    <SearchBar />
    <CategorySection/>
  </div>;
}