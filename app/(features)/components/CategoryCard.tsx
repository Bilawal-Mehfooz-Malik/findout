import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Shadcn's helper
import { Card, CardHeader, CardTitle } from "@/app/components/card";
import { hardcoded } from "@/app/lib/i18n";

type Props = {
  name: string;
  icon: LucideIcon;
  href: string;
  color?: string;
};

export default function CategoryCard({
  icon: Icon,
  name,
  href,
  color = "text-primary bg-primary/5",
}: Props) {
  return (
    <Link href={`/${href}`} className="group block">
      <Card
        className={cn(
          "relative overflow-hidden border-muted/60 transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
        )}
      >
        {/* 1. The Background Glow */}
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-3xl" />

        <CardHeader
          className={cn(
            "flex flex-col items-center justify-center p-1 space-y-1 sm:space-y-4 sm:p-4"
          )}
        >
          {/* 2. The Icon Container */}
          <div
            className={cn(
              "flex h-15 w-15 items-center justify-center rounded-full ",
              color
            )}
          >
            <Icon className={cn("h-6 w-6 stroke-[1.5]")} />
          </div>

          {/* 3. Typography & Hierarchy */}
          <div className="sm:space-y-1 text-center">
            <CardTitle className={cn("text-base font-semibold tracking-tight")}>
              {name}
            </CardTitle>
            <p className="sm:text-[11px] font-medium uppercase tracking-widest text-muted-foreground opacity-70 hidden sm:block">
              {hardcoded("Browse Collection")}
            </p>
          </div>
        </CardHeader>

        {/* 4. The "Action" Indicator (Hidden until hover) */}
        <div className="absolute bottom-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full hidden sm:block " />
      </Card>
    </Link>
  );
}
