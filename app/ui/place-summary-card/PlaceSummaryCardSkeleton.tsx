import { CategoryId } from "@/app/lib/my-data-types";
import Skeleton from "../skeleton";

interface Props {
  categoryId: CategoryId;
}

export function PlaceSummaryCardSkeleton({ categoryId }: Props) {
  return (
    <div className="w-[280px] shrink-0">
      <div className="flex flex-col gap-3">
        {/* 1. Image Skeleton */}
        <Skeleton className="aspect-[4/3] w-full rounded-2xl" />

        {/* 2. Info Section Skeleton */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            {/* Title Skeleton */}
            <Skeleton className="h-5 w-full rounded-2xl" />
            {/* Rating Skeleton */}
            <Skeleton className="h-4 w-10" />
          </div>

          {/* Address Skeleton */}
          <Skeleton className="h-4 w-full" />

          {/* Pricing Skeleton */}
          {categoryId === CategoryId(1) && <Skeleton className="h-5 w-3/4" />}
        </div>
      </div>
    </div>
  );
}
