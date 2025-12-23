import { hardcoded } from "@/app/lib/i18n";
import SearchBar from "../../ui/SearchBar";
import { cn } from "@/app/lib/utils";

export default function HomeSearchBar() {
  return (
    <div className={cn("w-[95%] mx-auto max-w-6xl")}>
      <SearchBar
        hintText={hardcoded("Search for residences and resturants...")}
      />
    </div>
  );
}
