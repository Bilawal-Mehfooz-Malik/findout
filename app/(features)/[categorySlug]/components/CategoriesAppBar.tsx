import { CategoryId } from "@/app/lib/my-data-types";
import { hardcoded } from "@/app/lib/i18n";
import OutlinedButton from "@/app/ui/OutlinedButton";
import PrimaryButton from "@/app/ui/PrimaryButton";
import { ModeToggle } from "@/app/ui/theme/ModeToggle";
import Link from "next/link";
import { categoriesSearchBars as CategoriesSearchBars } from "./CategoriesSearchBar";

interface Props {
  categoryId: CategoryId;
}

export default function CategoriesAppBar({ categoryId }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-background text-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-primary text-2xl">
          {hardcoded("FindOut")}
        </Link>
        {CategoriesSearchBars[categoryId]}
        <div className="flex items-center gap-3">
          <PrimaryButton label={hardcoded("Log in")} />
          <OutlinedButton label={hardcoded("Sign Up")} />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
