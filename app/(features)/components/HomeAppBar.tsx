import Link from "next/link";
import PrimaryButton from "../../ui/PrimaryButton";
import { hardcoded } from "@/app/lib/i18n";
import { ModeToggle } from "../../ui/theme/ModeToggle";
import OutlinedButton from "@/app/ui/OutlinedButton";

export default function HomeAppBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 w-[95%] max-w-7xl items-center justify-between">
        {/* Logo Section */}
        <Link
          href="/"
          className="group flex items-center gap-1 text-2xl font-bold transition-opacity hover:opacity-80"
        >
          {hardcoded("FindOut")}
        </Link>

        {/* Action Section */}
        <div className="flex items-center gap-2">
          {/* Login Action (Uses Ghost/Text variant) */}
          <PrimaryButton label={hardcoded("Log in")} />

          {/* Signup Action (The Primary focus) */}
          <div className="hidden sm:block">
            <OutlinedButton label={hardcoded("Sign Up")} />
          </div>

          {/* Theme Toggle with a subtle divider */}
          <div className="ml-2 flex items-center border-l border-zinc-100 pl-4 dark:border-zinc-800">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
