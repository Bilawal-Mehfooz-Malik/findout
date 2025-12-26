import { hardcoded } from "@/app/lib/i18n";
import SearchBar from "../../ui/SearchBar";

export default function HomeSearchBar() {
  return (
    <div className="w-[95%] mx-auto max-w-6xl">
      <SearchBar
        hintText={hardcoded("Search for residences and resturants...")}
      />
    </div>
  );
}
