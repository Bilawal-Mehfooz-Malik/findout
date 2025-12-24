import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Shadcn's helper
import { Card, CardHeader, CardTitle } from "@/app/components/card";

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
  color = "text-primary bg-primary/10",
}: Props) {
  return (
    <Link href={`/${href}`} className="group block">
      <Card className="relative overflow-hidden border-muted/60 transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
        {/* 1. The Background Glow */}
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover:opacity-100" />

        <CardHeader className="flex flex-col items-center justify-center space-y-4 p-8">
          {/* 2. The Icon Container */}
          <div
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
              color
            )}
          >
            <Icon className="h-8 w-8 stroke-[1.5]" />
          </div>

          {/* 3. Typography & Hierarchy */}
          <div className="space-y-1.5 text-center">
            <CardTitle className="text-base font-semibold tracking-tight">
              {name}
            </CardTitle>
            <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground opacity-70">
              Browse Collection
            </p>
          </div>
        </CardHeader>

        {/* 4. The "Action" Indicator (Hidden until hover) */}
        <div className="absolute bottom-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
      </Card>
    </Link>
  );
}
