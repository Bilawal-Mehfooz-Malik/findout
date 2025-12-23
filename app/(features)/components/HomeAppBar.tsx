import Link from "next/link";
import PrimaryButton from "../../ui/PrimaryButton";
import OutlinedButton from "../../ui/OutlinedButton";
import { hardcoded } from "@/app/lib/i18n";
import { ModeToggle } from "../../ui/theme/ModeToggle";
import { cn } from "@/app/lib/utils";

export default function HomeAppBar() {
  return (
    <header className={cn("sticky top-0 z-50 bg-background text-foreground")}>
      <div
        className={cn(
          "flex items-center justify-between py-3 mb-1 w-[95%] mx-auto max-w-8xl"
        )}
      >
        <Link href="/" className={cn("font-bold text-primary text-2xl")}>
          {hardcoded("FindOut")}
        </Link>

        <div className={cn("flex items-center gap-3")}>
          <PrimaryButton label={hardcoded("Log in")} />
          {/* Hidden on small screens */}
          <div className={cn("hidden sm:block")}>
            <OutlinedButton label={hardcoded("Sign Up")} />
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
