import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import OutlinedButton from "./OutlinedButton";
import { hardcoded } from "@/app/lib/i18n";


export default function AppBar() {
  return (
    <header className="sticky top-0 z-50 bg-background text-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-primary text-2xl">
          {hardcoded("FindOut")}
        </Link>

        <div className="flex items-center gap-3">
          <PrimaryButton label={hardcoded("Log in")} />
          <OutlinedButton label={hardcoded("Sign Up")} />
        </div>
      </div>
    </header>
  );
}
