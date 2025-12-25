import { hardcoded } from "@/app/lib/i18n";
import { SearchIcon } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

export default function SearchBar({ hintText }: { hintText: string }) {
  return (
    <div className="relative group w-full">
      <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white p-1.5 transition-all duration-300 focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10 dark:border-zinc-800 dark:bg-zinc-950">
        {/* Icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muted-foreground">
          <SearchIcon className="h-5 w-5" />
        </div>

        {/* Input for small screens */}
        <input
          type="text"
          placeholder={hardcoded("Search...")}
          className="flex-1 bg-transparent px-2 text-base font-medium placeholder:text-zinc-400 focus:outline-none min-w-0 truncate sm:hidden"
        />

        {/* Input for medium+ screens */}
        <input
          type="text"
          placeholder={hintText}
          className="hidden sm:flex flex-1 bg-transparent px-2 text-base font-medium placeholder:text-zinc-400 focus:outline-none min-w-0 truncate"
        />

        {/* Button */}
        {/* <PrimaryButton label={hardcoded("Search")} /> */}
      </div>
    </div>
  );
}
