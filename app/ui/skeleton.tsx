import { cn } from "@/app/lib/utils";

type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={cn("rounded-md bg-zinc-200 dark:bg-zinc-800", className)} />
  );
}
