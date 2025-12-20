import { hardcoded } from "@/app/lib/i18n";
import SearchBar from "../../ui/SearchBar";

export default function HomeSearchBar() {
  return (
    <SearchBar
      hintText={hardcoded("Search for residences and resturants...")}
    />
  );
}
