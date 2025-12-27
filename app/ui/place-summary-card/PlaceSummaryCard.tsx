import Image from "next/image";
import { Pricing } from "../../(features)/[categorySlug]/domain/pricing";
import Link from "next/link";
import { StarIcon } from "lucide-react";
import { formatPricing } from "@/app/lib/pricing.formatter";
import { StatusIndicator } from "@/app/ui/place-summary-card/StatusIndicator";
import { OperationalStatus, PlaceId } from "@/app/lib/my-data-types";
import { cn } from "@/app/lib/utils";
import { Suspense } from "react";
import { StatusIndicatorSkeleton } from "@/app/ui/place-summary-card/StatusIndicatorSkeleton";
import Skeleton from "../skeleton";

interface Props {
  id: PlaceId;
  name: string;
  categorySlug: string;
  slug: string;
  coverImageUrl: string;
  cityName: string;
  streetAddress: string;
  avgRating: number;
  operationalStatus: OperationalStatus;
  pricing?: Pricing;
  availability?: boolean;
}

export function PlaceSummaryCard({
  id,
  name,
  slug,
  categorySlug,
  coverImageUrl,
  cityName,
  streetAddress,
  avgRating,
  pricing,
  availability,
  operationalStatus,
}: Props) {
  const p = pricing ? formatPricing(pricing) : null;

  return (
    <Link
      href={`/${categorySlug}/${slug}`}
      className={cn("group block w-[280px] shrink-0")}
    >
      <div className="flex flex-col gap-3">
        {/* 1. Image: Forced 4:3 Aspect Ratio */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100">
          <Skeleton className="absolute inset-0 h-full w-full rounded-2xl" />
          {coverImageUrl && (
            <Image
              src={coverImageUrl}
              alt={name}
              placeholder="empty"
              fill
              className={cn(
                "object-cover transition-transform duration-500 group-hover:scale-110"
              )}
              sizes="280px"
            />
          )}

          {/* Top-down shadow overlay to make white text/icons readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* Status Badge (Bottom Left) */}
          <div className="absolute bottom-3 left-3 z-10">
            <Suspense fallback={<StatusIndicatorSkeleton />}>
              <StatusIndicator
                placeId={id}
                availability={availability}
                operationalStatus={operationalStatus}
              />
            </Suspense>
          </div>
        </div>

        {/* 2. Info Section */}
        <div className="space-y-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-[16px] text-zinc-900 dark:text-zinc-100 line-clamp-2">
              {name}
            </h3>

            {/* Rating next to title for a cleaner look */}
            <div className="flex items-center gap-1 pt-0.5">
              <StarIcon
                className={cn(
                  "h-3.5 w-3.5 fill-current text-zinc-900 dark:text-zinc-100"
                )}
              />
              <span className="text-sm font-medium">{avgRating}</span>
            </div>
          </div>

          <p className="text-sm text-zinc-500 line-clamp-2">
            {cityName}, {streetAddress}
          </p>

          {/* Pricing - Industry standard formatting */}
          {p && (
            <p className="text-[15px] font-bold mt-1 text-zinc-900 dark:text-zinc-50">
              {p.cost}
              <span className="text-zinc-500 font-normal text-[13px]">
                {" "}
                / {p.period} / {p.unit}
              </span>
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
