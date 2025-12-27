import { hardcoded } from "@/app/lib/i18n";
import SearchBar from "../../ui/SearchBar";

export default function HomeSearchBar() {
  return (
    <SearchBar
      className="w-[95%] mx-auto max-w-6xl"
      hintText={hardcoded("Search for residences and resturants...")}
    />
  );
}
