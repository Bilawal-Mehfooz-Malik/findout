import { CategoryId } from "@/app/lib/my-data-types";

interface Props {
  categoryId: CategoryId;
}

export function PlaceSummaryCardSkeleton({ categoryId }: Props) {
  return (
    <div className="w-[280px] shrink-0">
      <div className="flex flex-col gap-3">
        {/* 1. Image Skeleton */}
        <div className="aspect-[4/3] w-full animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800" />

        {/* 2. Info Section Skeleton */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            {/* Title Skeleton */}
            <div className="h-5 w-full animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
            {/* Rating Skeleton */}
            <div className="h-4 w-10 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
          </div>

          {/* Address Skeleton */}
          <div className="h-4 w-full animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />

          {/* Pricing Skeleton */}
          {categoryId === CategoryId(1) && (
            <div className="h-5 w-3/4  animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
          )}
        </div>
      </div>
    </div>
  );
}
