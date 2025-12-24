import { hardcoded } from "@/app/lib/i18n";
import { SearchIcon } from "lucide-react";
import { cn } from "@/app/lib/utils";

export default function SearchBar({ hintText }: { hintText: string }) {
  return (
    <div className="relative group w-full">
      {/* 1. The Container: Increased height (h-14 to h-16) and pill shape */}
      <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white p-1.5 transition-all duration-300 focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10 dark:border-zinc-800 dark:bg-zinc-950">
        {/* 2. The Icon: Fixed size, won't shrink */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muted-foreground">
          <SearchIcon className="h-5 w-5" />
        </div>

        {/* 3. The Input: Larger font and truncate to prevent overflow */}
        <input
          type="text"
          placeholder={hintText}
          className="flex-1 bg-transparent px-2 text-base font-medium placeholder:text-zinc-400 focus:outline-none min-w-0 truncate"
        />

        {/* 4. The Button: Responsive text hiding */}
        <button className="flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-95 shrink-0">
          <span className="hidden sm:inline">{hardcoded("Search")}</span>
          <SearchIcon className="h-4 w-4 sm:hidden" />{" "}
          {/* Icon only on mobile */}
        </button>
      </div>
    </div>
  );
}
