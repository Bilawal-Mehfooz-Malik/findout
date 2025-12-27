export function StatusIndicatorSkeleton() {
  return (
    <div className="flex animate-pulse items-center gap-1.5 rounded-full bg-zinc-200/80 px-2.5 py-1 dark:bg-zinc-800/80">
      <div className="h-2 w-10 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
    </div>
  );
}
