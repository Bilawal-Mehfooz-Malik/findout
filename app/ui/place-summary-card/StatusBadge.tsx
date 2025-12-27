import { cn } from "@/app/lib/utils";

export function StatusBadge({
  label,
  variant,
}: {
  label: string;
  variant: "success" | "error" | "muted";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-full px-2.5 py-1",
        "bg-white/70 backdrop-blur-md border border-white/40 shadow-sm",
        "dark:bg-black/50 dark:border-white/10"
      )}
    >
      <span
        className={cn(
          "inline-flex h-2 w-2 rounded-full border",
          variant === "success" && "bg-green-500 border-green-700",
          variant === "error" && "bg-red-500 border-red-700",
          variant === "muted" && "bg-zinc-400 border-zinc-600"
        )}
      />
      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
        {label}
      </span>
    </div>
  );
}
