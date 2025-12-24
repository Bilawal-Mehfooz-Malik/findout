import { OperationalStatus } from "@/app/lib/my-data-types";
import { getStatusIndicator } from "../lib/status.formatter";
import { cn } from "../lib/utils";

export type Props = {
  availability?: boolean;
  operationalStatus?: OperationalStatus;
};
export function StatusIndicator({ availability, operationalStatus }: Props) {
  const status = getStatusIndicator({
    availability,
    operationalStatus,
  });

  return (
    <div
      className={cn(
        // Glass Effect: background opacity + backdrop blur + thin border
        "flex items-center gap-1.5 rounded-full px-2.5 py-1",
        "bg-white/70 backdrop-blur-md border border-white/40 shadow-sm",
        "dark:bg-black/50 dark:border-white/10"
      )}
    >
      {/* The Pulse Dot: makes it feel "live" */}
      <span className="relative flex h-2 w-2">
        {status.variant === "success" && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        )}
        <span
          className={cn(
            "relative inline-flex h-2 w-2 rounded-full",
            status.variant === "success" && "bg-green-500",
            status.variant === "error" && "bg-red-500",
            status.variant === "muted" && "bg-zinc-400"
          )}
        />
      </span>

      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
        {status.label}
      </span>
    </div>
  );
}
