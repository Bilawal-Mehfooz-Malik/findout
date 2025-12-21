import Link from "next/link";
import PrimaryButton from "../../ui/PrimaryButton";
import OutlinedButton from "../../ui/OutlinedButton";
import { hardcoded } from "@/app/lib/i18n";
import { ModeToggle } from "../../ui/theme/ModeToggle";

export default function HomeAppBar() {
  return (
    <header className="sticky top-0 z-50 bg-background text-foreground">
      <div className=" flex items-center justify-between py-3 mb-1">
        <Link href="/" className="font-bold text-primary text-2xl">
          {hardcoded("FindOut")}
        </Link>

        <div className="flex items-center gap-3">
          <PrimaryButton label={hardcoded("Log in")} />
          <OutlinedButton label={hardcoded("Sign Up")} />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
