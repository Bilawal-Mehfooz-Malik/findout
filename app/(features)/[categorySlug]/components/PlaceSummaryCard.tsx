import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/card";
import Image from "next/image";
import { Pricing } from "../domain/pricing";
import Link from "next/link";
import { StarIcon } from "lucide-react";
import { formatPricing } from "@/app/lib/pricing.formatter";
import { StatusIndicator } from "@/app/ui/StatusIndicator";
import { OperationalStatus } from "@/app/lib/my-data-types";
import { cn } from "@/app/lib/utils";

interface Props {
  name: string;
  categorySlug: string;
  slug: string;
  coverImageUrl: string;
  cityName: string;
  streetAddress: string;
  avgRating: number;
  ratingCount: number;
  operationalStatus: OperationalStatus;
  pricing?: Pricing;
  availability?: boolean;
}

export function PlaceSummaryCard({
  name,
  slug,
  categorySlug,
  coverImageUrl,
  cityName,
  streetAddress,
  avgRating,
  ratingCount,
  pricing,
  availability,
  operationalStatus,
}: Props) {
  return (
    <Link href={`/${categorySlug}/${slug}`} className="group block">
      <Card className="overflow-hidden transition-shadow hover:shadow-md w-[250px] pt-0">
        {/* Image with 4:3 aspect ratio */}
        <div className="relative w-full h-[187.5px] bg-muted">
          {coverImageUrl && (
            <Image
              src={coverImageUrl}
              alt={name}
              fill
              className="object-cover"
            />
          )}
          {/* Status Indicator overlay */}
          <div className="absolute bottom-2 left-2 z-10">
            <StatusIndicator
              availability={availability}
              operationalStatus={operationalStatus}
            />
          </div>
        </div>

        {/* Content */}
        <CardHeader>
          <CardTitle className="line-clamp-2">{name}</CardTitle>
          <CardDescription className="line-clamp-1">
            {cityName}, {streetAddress}
          </CardDescription>
        </CardHeader>

        <CardContent
          className={cn(
            `flex items-center ${pricing ? "justify-between" : "justify-start"}`
          )}
        >
          {/* Pricing */}
          {pricing &&
            (() => {
              const p = formatPricing(pricing);
              return (
                <p className="text-sm font-semibold">
                  {p.cost}
                  <span className="ml-1 text-xs text-muted-foreground">
                    / {p.period} · per {p.unit}
                  </span>
                </p>
              );
            })()}

          {/* Rating */}
          <div className="flex items-center gap-1 text-sm font-medium">
            <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{avgRating}</span>
            <span className="text-muted-foreground">({ratingCount})</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
